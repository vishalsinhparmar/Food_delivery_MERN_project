import { useContext, useEffect, useState } from "react"
import { categorydeleteByid, getfoodcategory, getsubcategory, subCategorydeleteByid } from "../Apibaseurl"
import { MyContext } from "../contextprovider/Mycontext"
import { MdDeleteForever } from "react-icons/md"
import { FiDelete } from "react-icons/fi"
import { RiDeleteBin2Fill, RiDeleteBin5Fill } from "react-icons/ri"
import { FaRegEdit } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const ManageSubcategory = () => {
    // const categoryId = ["a","b","c"];
    const navigate = useNavigate();
    const [subcategoryData, setcategoryData] = useState([])
    const { product,
        categoryId,
        handleChangeCategory,
        select,
        setSelectvalue
         } = useContext(MyContext);
    console.log('categoryId', categoryId);
    console.log('product is from subCategory', product)

    useEffect(() => {
        // setSelectvalue({})
     
    
        try {
            const FetchsubcategoryData = async () => {
                console.log('id', select.subcategory)
                 if(select.subcategory){

                const res = await getsubcategory(select.subcategory || []);
                
                if (res.success === true) {
                    alert('category response is successfully')
                    setcategoryData(res.data.subcategories)
                }
                console.log('category res is', res)
            }
        }
            FetchsubcategoryData()
        } catch (err) {
            console.log('error occur in the mangeCategory', err.message)
        }
    }, [select.subcategory,setSelectvalue]);

    const handleCategorydelete = async (id) => {
        alert(id)
        try {
            const res = await subCategorydeleteByid(id);
            
            if (res.success === true) {
                const deletdata = subcategoryData.filter(data => data._id !== id)

                console.log("delete data", deletdata)
                setcategoryData(deletdata)
            }
            console.log('categoryDelete', res)
        } catch (err) {
            console.log('error in the category', err.message)
        }
    }
    return (

        <>
            <div>
                <select type="text"
                    className='w-full rounded-2xl p-3 border outline-none '
                    name="subcategory"
                    value={select.subcategory || "default"}
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
                        subcategoryData.map((data) => (
                            <>
                             <div className=" bg-white  w-full rounded-md hover:bg-blue-50">
                                <div className="border p-4 grid grid-cols-3 justify-center items-center">
                                    <div className=" w-full  flex items-center justify-center   object-cover">
                                        <img src={data.image} alt="" className="w-20 h-20 rounded-full " />
                                    </div>

                                    <div className="p-3">
                                        <h1 className="text-2xl font-medium ">{data.subCategoryname}</h1>
                                    </div>

                                    <div className=" gap-2 flex items-center justify-center">
                                                 <button className="p-2 bg-red-400 flex items-center justify-center gap-2 text-xl text-white w-1/3 hover:bg-red-500 rounded-md mx-2" onClick={() => handleCategorydelete(data._id)}><RiDeleteBin5Fill/>delete</button>
                                                 <button className="p-2 bg-yellow-300 font-medium flex items-center justify-center gap-2 text-xl text-white w-1/3 hover:bg-yellow-400 rounded-md mx-2" onClick={()=>navigate(`/admin/Foods/${data._id}`)}><FaRegEdit/>edit</button>

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

export default ManageSubcategory