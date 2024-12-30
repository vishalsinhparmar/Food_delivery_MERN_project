import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';
import { MyContext } from '../contextprovider/Mycontext';
import { addsubcategory, getsubcategorybyId, subCategoryupdatebyId } from '../Apibaseurl';
import { useNavigate, useParams } from 'react-router-dom';



export default function AdminAddSubCategory() {
  const [cover, setcoverImage] = useState(false)
  const navigate = useNavigate()
  const handlecoverImage = () => {
    setcoverImage(!cover)
  }
  const { id } = useParams();
  console.log('id of subcategory', id)
  const { categoryId,
    handleChangevalue,
    product,
    select,
    handlchangeImage,
    image,
    setimage,
    setSelectvalue,
    handleChangeCategory,
    setproductvalue
  } = useContext(MyContext);
  console.log('select in subcategory', select)
  console.log('image is', image)

  console.log("product is from where", product);
  console.log("product is", product.subCategory);

  console.log("product is", product.categoryId);

  console.log("categoryId data", categoryId);


  useEffect(() => { 
    if (id) {
      const FetchsubcategorybyId = async () => {
        const res = await getsubcategorybyId(id);
        if (res.success === true) {
          setproductvalue((prev) => (
            {
              ...prev,
              categoryId: select.subcategory,
              subCategory: res.data.subCategoryname
            }
          ))
          const { image, coverimage } = res.data;

          setimage((prev) => (
            {
              ...prev,
              image,
              coverimage

            }
          ))

          console.log("image for uploaded", image)
        }
        console.log("res from the subcategory by id", res.data)
      }

      FetchsubcategorybyId()

    } 
    
  }, [setSelectvalue, setimage, id,setproductvalue])


  const handelsubCategoryform = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('categoryId', select.subcategory)
    formdata.append('subCategoryname', product.subCategory);

    if (image.image && typeof image.image !== "string") {
      formdata.append('image', image.image);
      console.log('form data for subcategory image', image.image)
    }
    if (image.coverimage && typeof image.coverimage !== "string") {
      formdata.append('coverimage', image.coverimage);
    }
    console.log("formdata from the subcategory update", formdata)

    try {
      if(id){
        const updres = await subCategoryupdatebyId(id, formdata)
        Swal.fire("update")
        console.log("update res for subcategories", updres)
        if (updres.success === true) {
           Swal.fire("Updated!", "Subcategory added successfully", "success");
           navigate('/admin/Managefoodcategory')
            setproductvalue({}),
            setimage({})
        }
      }else {
        console.log('formdata for subcategory',formdata)
      const res = await addsubcategory(formdata);
      console.log('res is', res);
      if (res.success === true) {
        Swal.fire("Added!", "Subcategory added successfully", "success");

        alert(res.success)
        setproductvalue({}),
          setimage({})
      }
      console.log('subcategory is', res) 

      }


    } catch (error) {
      console.log('error is the subCategory', error.message)
    }
  }

  return (
    <div>

      <div className='py-6 '>
        <h1 className='text-3xl font-semibold my-2'>Category name :<span className=' underline underline-offset-8 ml-2 text-blue-400 mb-3 font-normal'>Subcategory</span>
        </h1>
        <p className='opacity-50 font-medium'>Add this category</p>
      </div>
      <form onSubmit={handelsubCategoryform}>

        <fieldset className='border border-spacing-2 border-black p-5 '>
          <legend className=' font-semibold text-2xl text-white rounded-md bg-green-400 border p-2 px-4'>subCategory</legend>
          <div>
            <select
              name="subcategory"

              id="category"
              value={select.subcategory || "default"}
              className='bg-white p-2 w-1/4 border hover:bg-slate-50 '
              onChange={handleChangeCategory}
            >
              <option value="default" disabled >
                Select category
              </option>
              {
                categoryId.map((val) => (
                  <>

                    <option
                      value={val._id}
                      className=''
                    >
                      {val.Categoryname}
                    </option>
                  </>
                ))
              }
            </select>
          </div>
          <div className='w-1/2 my-5'>
            <label htmlFor='subCategory1' className=' font-semibold text-2xl mr-4'>coverimg:</label>
            <button className='bg-slate-500 font-semibold px-4 py-2 border-black rounded-md text-white' onClick={() => handlecoverImage()}>{cover ? "remove" : "AddCoverImage"}</button>
            <p className='text-red-400 '>{cover ? "" : "*it is not require for every same subcategory"}</p>
            {cover && <input
              type="file"
              name='coverimage'
              // value={image.coverimage} 
              className='w-full p-4 rounded-lg my-1 outline-none border bg-white'
              placeholder='Subcategory'
              onChange={handlchangeImage}
            />
            }
            {typeof image.coverimage === "string" ? (

              < img src={image.coverimage} className="mt-4 w-32 h-32 object-cover rounded-lg" />
            ) : (
              image.coverimage && (

                < img src={URL.createObjectURL(image.coverimage)} className="mt-4 w-32 h-32 object-cover rounded-lg" />
              )
            )
            }
          </div>

          <div className='w-1/2 my-5'>
            <label htmlFor='subCategory1' className=' font-bold text-2xl mr-4'>subCategory Img:</label>
            <input
              type="file"
              name='image'
              // value={image.image}
              className='w-full p-4 rounded-lg my-1 outline-none border bg-white'
              // value={image.image}
              onChange={handlchangeImage}


            />
            {typeof image.image === "string" ? (

              < img src={image.image} className="mt-4 w-32 h-32 object-cover rounded-lg" />
            ) : (
              image.image && (

                <img src={URL.createObjectURL(image.image)} className="mt-4 w-32 h-32 object-cover rounded-lg" />
              )
            )
            }


          </div>

          <div className='w-2/3 my-5'>
            <label htmlFor='subCategory1' className=' font-bold text-2xl mr-4'>subCategory Name:</label>
            <input
              name="subCategory"
              value={product.subCategory}
              type="text"
              className='w-full p-4 rounded-lg my-1 outline-none border'
              onChange={handleChangevalue}
            />
          </div>



          <div className='py-4 flex items-center justify-center space-x-4'>
            <button type='submit' className='p-2 px-4 border bg-blue-400 hover:bg-blue-500 text-white rounded-lg ' >{id ? "Update" : "Submit"}</button>
            <button type='reset' className='p-2 px-4 border bg-red-300 hover:bg-red-400 text-white rounded-lg '>Reset</button>
          </div>



        </fieldset>





      </form>
    </div>
  )
}
