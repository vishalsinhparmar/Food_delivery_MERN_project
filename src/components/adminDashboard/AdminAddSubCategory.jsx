import axios from 'axios';
import React, { useRef } from 'react'
import Swal from 'sweetalert2';

export default function AdminAddSubCategory() {
   
    const subCategoryImg = useRef();
    const subCategoryName =useRef();
    const pricing =useRef();

    const HandelsubCategory = (e)=>{
         e.preventDefault();

         const Subcategory = {
            subCategoryImg:subCategoryImg.current.value,
            subCategoryName:subCategoryName.current.value,
            subCategoryImg:subCategoryImg.current.value,

         }

         axios.post(`http://localhost:4000/subCategory`,Subcategory).then(()=>{
            Swal.fire({
                position: "top-bottom",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
         })

         e.target.reset();
    }
  return (
     <div>

           <div className='py-6 '> 
            <h1 className='text-3xl font-semibold my-2'>Category name :<span className=' underline underline-offset-8 ml-2 text-blue-400 mb-3 font-normal'>Subcategory</span>
            </h1>
            <p className='opacity-50 font-medium'>Add this category</p>
        </div> 
        <form onSubmit={HandelsubCategory}>
           
           
            <fieldset className='border border-spacing-2 border-black p-5 '>
            <legend className=' font-semibold text-2xl text-white rounded-md bg-green-400 border p-2 px-4'>subCategory</legend>
            
            <div>
                <label for='subCategory1' className=' font-bold text-2xl mr-4'>subCategory Img:</label>
                <input type="text" ref={subCategoryImg} className='w-full p-4 rounded-lg my-1 outline-none border' />
            </div>

              <div>
                <label for='subCategory1' className=' font-bold text-2xl mr-4'>subCategory Name:</label>
                <input type="text" ref={subCategoryName} className='w-full p-4 rounded-lg my-1 outline-none border' />
              </div>

              <div className='py-4'>
                <label for='subCategory1' className=' font-bold text-2xl mr-4'>pricing:</label>
                <input type="number" ref={pricing} className=' w-28 p-4 rounded-lg my-1 outline-none border no-arrows' />
              </div>

              <div className='py-4 flex items-center justify-center space-x-4'>
                   <button type='submit' className='p-2 px-4 border bg-blue-400 hover:bg-blue-500 text-white rounded-lg ' >Submit</button>
                   <button type='reset' className='p-2 px-4 border bg-red-300 hover:bg-red-400 text-white rounded-lg '>Reset</button>
              </div>

        

            </fieldset>

           

           
            
        </form>
     </div>
  )
}
