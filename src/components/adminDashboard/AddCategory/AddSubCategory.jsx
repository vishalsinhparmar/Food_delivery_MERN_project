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
      
          setimage({})
          navigate('/admin/Managefoodcategory')
      }
      console.log('subcategory is', res) 

      }


    } catch (error) {
      console.log('error is the subCategory', error.message)
    }
  }

  return (
    <div className='bg-gray-100 min-h-screen py-10'>
    <div className='max-w-3xl mx-auto'>
      <h1 className='text-3xl font-semibold mb-4 text-center text-gray-700'>Subcategory {id ? 'Update' : 'Add'}</h1>
      <p className='text-lg text-center text-gray-500 mb-6'>Please fill out the form below to {id ? 'update' : 'add'} a subcategory</p>
      
      <form onSubmit={handelsubCategoryform} className='bg-white p-6 rounded-xl shadow-lg space-y-6'>
        <fieldset className='border border-gray-300 p-5 rounded-lg'>
          <legend className='text-2xl font-semibold text-white bg-green-400 p-2 rounded-md'>Subcategory Details</legend>
          
          <div className='flex flex-col space-y-4'>
            {/* Category Dropdown */}
            <div>
              <label htmlFor="subcategory" className='block text-lg font-medium text-gray-700'>Select Category</label>
              <select
                name="subcategory"
                id="category"
                value={select.subcategory || "default"}
                className='w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
                onChange={handleChangeCategory}
              >
                <option value="default" disabled>Select Category</option>
                {categoryId.map((val) => (
                  <option key={val._id} value={val._id}>{val.Categoryname}</option>
                ))}
              </select>
            </div>
            
            {/* Subcategory Name */}
            <div>
              <label htmlFor='subCategory1' className='block text-lg font-medium text-gray-700'>Subcategory Name</label>
              <input
                name="subCategory"
                value={product.subCategory}
                type="text"
                className='w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
                onChange={handleChangevalue}
              />
            </div>

            {/* Cover Image */}
            <div className='space-y-2'>
              <label className='text-lg font-medium text-gray-700'>Cover Image (Optional)</label>
              <button
                type='button'
                onClick={handlecoverImage}
                className='px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none'
              >
                {cover ? "Remove" : "Add"} Cover Image
              </button>
              {cover && (
                <div>
                  <input
                    type="file"
                    name='coverimage'
                    className='w-full p-3 border rounded-md shadow-sm mt-3'
                    onChange={handlchangeImage}
                  />
                  {typeof image.coverimage === "string" ? (
                    <img src={image.coverimage} className="mt-4 w-32 h-32 object-cover rounded-lg" />
                  ) : (
                    image.coverimage && <img src={URL.createObjectURL(image.coverimage)} className="mt-4 w-32 h-32 object-cover rounded-lg" />
                  )}
                </div>
              )}
            </div>

            {/* Subcategory Image */}
            <div className='space-y-2'>
              <label className='text-lg font-medium text-gray-700'>Subcategory Image</label>
              <input
                type="file"
                name='image'
                className='w-full p-3 border rounded-md shadow-sm'
                onChange={handlchangeImage}
              />
              {typeof image.image === "string" ? (
                <img src={image.image} className="mt-4 w-32 h-32 object-cover rounded-lg" />
              ) : (
                image.image && <img src={URL.createObjectURL(image.image)} className="mt-4 w-32 h-32 object-cover rounded-lg" />
              )}
            </div>
          </div>
        </fieldset>

        {/* Submit/Reset Buttons */}
        <div className='flex justify-center gap-4'>
          <button type='submit' className='w-32 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none'>
            {id ? "Update" : "Submit"}
          </button>
          <button type='reset' className='w-32 py-3 bg-red-400 text-white rounded-md hover:bg-red-500 focus:outline-none'>
            Reset
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
