import { useContext, useState } from "react";
import { MyContext } from "../contextprovider/Mycontext";
import { addcategoryItem, categoryUpdatebyId, getfoodcategory } from "../Apibaseurl";
import { useParams } from "react-router-dom";

const AddfoddCategoryItem = () => {
    const {id} = useParams();
    const { handleChangevalue,
            product,
            categoryId,
            select,
            setimage,
            image,
            setproductvalue,
            handlchangeImage} = useContext(MyContext);
            
    console.log('image is',image);
      const [price, setprice] = useState(  
        [
          { size: "small", price: 0 },
          { size: "medium", price: 0 },
          { size: "large", price: 0 },
          { size: "xlarge", price: 0 }  
        ]
      )
     const handlepriceChange = (index,value)=>{
        const updateprice = [...price]
        updateprice[index].price = Number(value)
        setprice(updateprice)
     }
    //  formhandle
    const FormHandelSubmit = async (e)=>{
         e.preventDefault();

         const formdetail = new FormData();
         formdetail.append('categoryId',product.category)
         formdetail.append('categoryItemName',product.categoryItemname)
         formdetail.append('description',product.description)
         if(image.image){
         formdetail.append('image',image.image)
         }
         formdetail.append('pricing',JSON.stringify(price));

         console.log('formdetail',formdetail)

         try{
            if(id){
            const res = await getfoodcategory(id);
            const data = await categoryUpdatebyId(formdetail);
            }
            const res = await addcategoryItem(formdetail);
            console.log('categorydataItem',res);
            if(res.success === true){
                alert('category item added successfully')
                setprice( [
                    { size: "small", price: 0 },
                    { size: "medium", price: 0 },
                    { size: "large", price: 0 },
                    { size: "xlarge", price: 0 }  
                  ])
                setimage({})
                setproductvalue({})
            }
         }catch(error){
            console.log('error occur in the AddFoodCategoryitem',error.message)
         }
    }


    return (
        <>
            <form onSubmit={FormHandelSubmit}>

                <div className="bg-white mt-10 p-4 rounded-md ">
                    <select type="text"
                        className='w-full rounded-2xl p-3 border outline-none '
                        name="category"
                        value={product.category}
                        onChange={handleChangevalue}
                        placeholder="category"
                        required
                    >
                        <option value="" disabled>
                            Select category
                        </option>
                        {
                            categoryId.map((val) => (
                                <>
                                    <option value={val._id} className=''>
                                        {val.Categoryname}
                                    </option>
                                </>
                            ))
                        }

                    </select>


                    <div className='py-1 text-xl'>
                        <p className=' font-bold py-1'>CategoryItem:</p>
                        <input type="text"
                            className='w-full rounded-2xl p-3 border outline-none '
                            name="categoryItemname"
                            value={product.categoryItemname}
                            onChange={handleChangevalue}
                            placeholder="CategoryItem"
                            required
                        />
                    </div>

                    <div className='py-1 text-xl'>
                        <p className=' font-bold py-1'>Categorydetail</p>
                        <input
                            type="text"
                            className='w-full rounded-2xl p-3 border outline-none '
                            name="description"
                            value={product.description}
                            onChange={handleChangevalue}
                            placeholder="description"
                            required
                        />
                    </div>

                    <div className='py-1 text-xl'>
                        <p className=' font-bold py-1'>Category Img:</p>
                        <input
                            type="file"
                            name="image"
                            className='w-full rounded-2xl p-3 border outline-none '
                            onChange={handlchangeImage}
                        />
                       {image.image && < img src={URL.createObjectURL(image.image)} className="mt-4 w-32 h-32 object-cover rounded-lg" />}

                    </div>

                    <div className='py-4 text-xl flex flex-rows items-center'>
                        <p className=' font-bold py-1 mr-5'>Pricing:</p>
                        <div className='flex flex-col justify-around items-center gap-3'>
                            {
                                price.map((input, index) => (
                                    <>
                                        <div className="flex gap-4">
                                            <input
                                                type="number"
                                                onChange={(e) => handlepriceChange(index, e.target.value)}
                                                value={input.price}
                                                name="price"
                                                placeholder={`price ${input.size}`}
                                                className="border p-2 w-1/2 rounded"
                                            />
                                        </div>
                                    </>
                                ))
                            }

                        </div>
                    </div>

                    <div className='py-4 flex items-center justify-center space-x-4'>
                        <button type='submit' className='p-2 px-4 border bg-blue-400 hover:bg-blue-500 text-white rounded-lg ' >Submit</button>
                        <button type='reset' className='p-2 px-4 border bg-red-300 hover:bg-red-400 text-white rounded-lg '>Reset</button>

                    </div>



                </div>

            </form>
        </>
    )
};

export default AddfoddCategoryItem;