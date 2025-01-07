import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { MdCancel, MdNoCell } from 'react-icons/md'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProductContext } from './Context/ProductContext';
import { getfoodcategoryItembyid } from '../adminDashboard/Apibaseurl';
import { addsubcategoryCartdata } from '../../services/Api';

export default function ModalforListItem() {
  const [modalData,setModaldata] = useState(null);
  const {handelModelIsclose,modaldataId} = useContext(ProductContext);

  const fetchDataModel = async ()=>{
    try{
       
      const res = await getfoodcategoryItembyid(modaldataId);
       console.log("modaldataId",modaldataId)
      if(res.success === true){
        
         setModaldata(res.data)
      } 

  }catch(err){
     console.log("err is happen in the fectchModldata",err.response)
  }
  }
  console.log("modalData from model",modalData)
  const HandelAddcart = async ()=>{

    setTimeout(()=>{
   handelModelIsclose(true);
  },1500)

  const categoryItem  = {
    qty:1,
    total:modalData?.pricing[1]?.price,
    subcategoryId:null
 };


  

           try{
               const res = await addsubcategoryCartdata(categoryItem)
               console.log('res is',res)
               if(res.success === true){
                   alert('added a success a subcategories to a cart')
                    
                   handelModelIsclose()
               }
            }catch(err){
               console.log("error occur in pizzamodel",err.response)
            }
  }

  useEffect(()=>{
    fetchDataModel()
  },[modaldataId])

  return (
    <>
   
    <div className=' inset-0   bg-black  w-450 rounded-md border shadow-xl  text-white relative px-3'>
    {modalData  ? (
        <div>
                     <div className='absolute top-0 right-0 z-40 '>
                       <MdCancel  className='  text-2xl text-orange-500 cursor-pointer ' onClick={handelModelIsclose}/>
                    </div>
        <div className='grid grid-cols-2 gap-2   py-6 px-4   relative'>
                
                         <div className=' text-xs ' >
                            <h1 className='font-bold text-sm'>{modalData?.categoryItemName} </h1>
                              <p className='text-xs py-5'>{modalData?.description}</p>
                              <button className='bg-white px-5 py-1 rounded-md text-xl text-black'> &#8377; <span className='font-bold' >{modalData?.pricing[1]?.price}</span></button>
                         </div>

                          <div className='relative'>
                               <img src={modalData.image} className='relativev w-full h-full object-cover'/>     
                          </div>
                      
                   </div>

                       <div className=' flex justify-end pb-4  w-full  '>
                         <button className='flex items-center justify-between bg-green-600 text-white font-bold  rounded-lg' onClick={HandelAddcart} >
                             <div className='flex items-center px-4 py-2' >
                                <p className='mr-4 text-md'><BsArrowRightCircleFill/></p> 
                                <p className='text-md' >Add!</p>
                               </div>
                          </button>
                       </div>
        </div>
    ):(
      <p>not data are found</p>
    )
}
                  
    </div> 
   
    </> 
  )
}
