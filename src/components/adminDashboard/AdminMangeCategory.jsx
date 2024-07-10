  import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  import Redchilli1 from '../../assets/Order/icons8-chilli-96 2.png'
  import Redchilli2 from '../../assets/Order/icons8-chilli-96 5.png'
  import { MdDeleteForever, MdEdit } from 'react-icons/md';
  import { FaRegEdit } from 'react-icons/fa';
  import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


  export default function AdminMangeCategory({selectCategory}) {
      const [data,setData]=useState([]);
      const {id}=useParams();
      const Navigation = useNavigate();

    
      useEffect(()=>{
        if(selectCategory){
          const Category = selectCategory.label
          axios.get(`http://localhost:4000/${Category}`).then((res)=>{
          
            setData(res.data)
          }).catch((error)=>{
              console.error('API response is not an array',error)
          })
        }
      },[data])
    
      const HandelDeleteCategory = (id)=>{
        const Category = selectCategory.label
        axios.delete(`http://localhost:4000/${Category}/${id}`).then(()=>{
          Swal.fire({
            position: "top-bottom",
            icon: "error",
            title: "Your work has been deleted",
            showConfirmButton: false,
            timer: 1000
          });  
        })
     
      }
      const handelCategory = (id)=>{
        Navigation(`/admin/Foods/${id}`)
      }

    return (
      <div className='py-4'>
      <div className='py-6'>
        <h1 className=' font-semibold text-3xl'>MangeCategory:{selectCategory ? selectCategory.label:''}</h1>
        <p className=' opacity-45'>Category are mange by admin</p>
      </div>

      <div className='grid grid-cols-3 gap-5'>

          { data.map((item)=>(
      <div className='bg-white rounded-lg shadow-xl p-4 border cursor-pointer' key={item.id} >
                          <div className=''>
                            <div className=' '>
                                <h1 className='text-xl font-semibold' >{item.Categorey_Name}</h1>
                                <div className='flex items-center '>

                                  <img src={Redchilli1} alt="" className='w-6'/>
                                  <img src={Redchilli1} alt="" className='w-6' />
                                  <img src={Redchilli1} alt="" className='w-6'/>
                                  <img src={Redchilli1} alt="" className='w-6'/>
                                  <img src={Redchilli2} alt="" className='w-6' />
                                  
                                </div>
                            </div>

                            <div className='grid grid-cols-5 items-center'>
                              <div className='col-span-3'>
                              <p className='text-sm py-1 max-w-56' >{item.Categorey_Details}</p>
                              </div>
                            <div className=' rounded-full w-24 col-span-2' >
                                <img src={item.Categorey_Img} className='w-full  object-cover '/> 
                            </div>
                            </div>

                        </div>

                        <div className=' pt-2 space-y-2'>
                          <div className='grid grid-flow-col gap-2'>
                            <div className=' p-1 px-2 flex items-baseline  bg-black text-white rounded-md '>
                                <p className='mr-2  text-sm'>Small</p>
                                <p className='py-1 px-3 bg-green-700 text-white font-bold rounded-md'>&#8377;{item.Small_pricing}</p>
                            </div>
                            
                              <div className='p-1 px-2 border flex items-baseline rounded-md'>
                                <p className='mr-2 text-sm'>Medium </p>
                                <p className='py-1 px-3 bg-green-700 text-white font-bold rounded-md'>&#8377;{item.Small_pricing}</p>                           
                              </div>
                            </div>

                        <div>
                            <div className='border p-1 px-2  flex items-baseline rounded-md     '>
                                <p className='mr-5 text-sm'>Large</p>
                                <p className='py-1 px-4 bg-green-700 text-white font-bold rounded-md'>&#8377;{item.Large_pricing}</p>                           
                            </div>
                        </div>
                          <div>
                            <div className='border p-1 px-2 flex items-baseline rounded-md '>
                                <p className='mr-5 text-sm'>XL Large with Sauces</p>
                                <p className='py-1 px-4 bg-green-700 text-white font-bold rounded-md'>&#8377;{item.XlLarge_pricing}</p>                           
                            </div>
                            </div>
                          <div className='flex items-center justify-evenly pt-2'>
                            <button className='p-2 bg-red-50 text-red-500 rounded-md flex items-center justify-center border hover:bg-red-100' onClick={()=>{HandelDeleteCategory(item.id)}}><span><MdDeleteForever className=' text-red-600 text-2xl mr-2'/></span>Delete</button>
                            <button className='p-2 bg-blue-50 text-blue-500  rounded-md flex items-center justify-center border hover:bg-blue-100'onClick={()=>{handelCategory(item.id)}} ><span><MdEdit className='  text-xl text-blue-700 mr-2'/></span>Edit</button>
                            
                            </div>
                      </div>
                          

                        </div>
                      
                      ))}
      </div>

      </div>
    )
  }
