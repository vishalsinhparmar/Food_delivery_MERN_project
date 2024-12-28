import { useContext, useEffect, useState } from "react"
import { categoryItemdeleteByid, getfoodcategory } from "../Apibaseurl"
import { MyContext } from "../contextprovider/Mycontext"
import { MdDeleteForever } from "react-icons/md"
import { FiDelete } from "react-icons/fi"
import { RiDeleteBin2Fill, RiDeleteBin5Fill, RiDeleteBin5Line } from "react-icons/ri"
import { FaRegEdit } from "react-icons/fa"
import { FaR } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const ManagefoodCategoryitem = () => {
    const navigate = useNavigate()
    // const categoryId = ["a","b","c"];
    const [categoryData, setcategoryData] = useState([])
    const { product,
        categoryId,
        
        handleChangeCategory,
        select,
        setSelectvalue
    } = useContext(MyContext);
    console.log('categoryId', categoryId);
    console.log('product is', product)
    useEffect(() => {
        console.log('select from the categoryItem',select)
 
    
        
        try {
            const FetchcategoryData = async () => {
                console.log('id', select.categoryItemselect)
                if(select.categoryItemselect){
                const res = await getfoodcategory(select.categoryItemselect);
                if (res.success === true) {
                    alert('category response is successfully')
                    setcategoryData(res.data.categoryIteam || [])
                }
                console.log('category res is', res)
            }
        }
            FetchcategoryData()
        } catch (err) {
            console.log('error occur in the mangeCategory', err.message)
        }
    }, [select.categoryItemselect]);

        const handleCategorydelete = async (id) => {
            alert(id)
            try {
                const res = await categoryItemdeleteByid(id);
                if (res.success === true) {
                    const deletdata = categoryId.filter(data => data._id !== id)
    
                    setcategoryData(deletdata)
                    console.log("delete data", deletdata)
                    setSelectvalue({})
                }
                console.log('categoryDelete', res)
            } catch (err) {
                console.log('error in the category', err.message)
            }
        };

    return (

        <>
            <div>
                <select type="text"
                    className='w-full rounded-2xl p-3 border outline-none '
                    name="categoryItemselect"
                    value={select.categoryItemselect || "default"}
                    onChange={handleChangeCategory}
                    placeholder="category"
                    required
                >
                    <option value="default" disabled>
                        Select category
                    </option>

                    {
                        categoryId.map((val) => (
                            // console.log("index is",index)
                            <>
                                <option value={val._id} className=''>
                                    {val.Categoryname}
                                </option>
                            </>
                        ))
                    }

                </select>
            </div>

            <div>
                <div className="grid grid-flow-row gap-5 mt-5">
                    {
                        categoryData.map((data) => (
                            <>
                             <div className=" bg-white  w-full rounded-md">
                                <div className="border p-4 grid grid-cols-2  items-center">
                                    <div className=" w-full flex items-center justify-center   object-cover">
                                        <img src={data.image} alt="" className="w-auto h-auto" />
                                    </div>

                                    <div className="p-3">
                                        <h1 className="text-2xl font-medium ">{data.categoryItemName}</h1>
                                        <p>{data.description}</p>

                                    </div>

                         


                                    <div className="grid grid-cols-2 justify-center items-center gap-2 mt-3">
                                         {data?.pricing?.map((price)=>(
                                            <>
                                              <div className="flex flex-col  bg-white items-center justify-center">
                                              <div className="flex w-full border p-2 items-center justify-center bg-slate-100 rounded-md">
                                                  <p className="w-full">{price.size}</p>
                                                 <button className="bg-black text-white mt-1 rounded-md px-3 py-1">&#x20B9;{price.price}</button>
                                              </div>
                                               </div>
                                            </>
                                         ))}
                                    </div>                              
                                             <div className="p-2 gap-2 flex items-center justify-center">
                                                 <button className="p-2 bg-red-400 flex items-center justify-center gap-2 text-xl text-white w-1/3 hover:bg-red-500 rounded-md mx-2" onClick={()=>handleCategorydelete(data._id)}><RiDeleteBin5Line/>delete</button>
                                                 <button className="p-2 bg-yellow-300 font-medium flex items-center justify-center gap-2 text-xl text-white w-1/3 hover:bg-yellow-400 rounded-md mx-2" onClick={()=> navigate(`/admin/Foods/${data._id}`)}><FaRegEdit/>edit</button>

                                             </div>
                                       </div>
                               
                                </div>
                            </>
                        )

                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ManagefoodCategoryitem