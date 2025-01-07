import React, { useContext, useEffect, useState } from 'react'
// import Plusimg from '@assets/Offer_img/Plus_(1).png'
// import ReactModal from 'react-modal'
import Modal from 'react-modal'
import ModalforListItem from './ModalforListItem'
import Plusimg from '@assets/Offer_img/Plus_(1).png'

import { ProductContext } from './Context/ProductContext';
Modal.setAppElement('#root');
export default function ProductListItem() {
  const { newProductdata ,handelModelIsopen,modalIsopen} = useContext(ProductContext)

  return (
    <>
    <div className='relative'>
         <Modal isOpen={modalIsopen}
          overlayClassName="fixed   bg-black  z-40" className='inset-0  flex items-center fixed top-0 left-0 right-0 bottom-0  justify-center w-full bg-black bg-opacity-80 z-[1000]' >
          <ModalforListItem />
         </Modal>
    </div>

     <div className='mt-3 container'>
        {/*  Burgers */}
      <div className='grid grid-rows-3 gap-6 '>
    {
    newProductdata && newProductdata.length > 0 ? (
      newProductdata && newProductdata?.map((item)=>( 
             
    
      
  <div key={item._id}>
      <h1 className='text-3xl font-bold  my-8 text-orange-400' >{item?.Categoryname}</h1>
   
                 <div className='grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 grid-flow-row gap-6' >
                              {item.categoryIteam && item?.categoryIteam?.map((category)=>(
                                 <div className='grid grid-cols-2 gap-2 bg-PRodecDetailcolor shadow-xl border p-4 rounded-md' key={item._id} >
                                      <div className='py-4 text-xs' >
                                         <h1 className='font-bold text-sm' >{category?.categoryItemName}</h1>
                                           <p className='text-xs py-5'>{category?.description}</p>
                                           
                                            <p className='felx text-xl font-medium'>Pricing<span className='font-bold ml-3 text-sm' >&#8377;{category?.pricing[1]?.price}</span></p>
                                      </div>
             
                                       <div className='relative cursor-pointer' >
                                            <img src={category.image} className='relativev w-full h-full object-cover'/>
                                              <button><div className='bg-customgray flex items-center justify-center p-3 opacity-85 cursor-pointer rounded-tl-3xl absolute z-30 bottom-0 right-0 '  onClick={()=>handelModelIsopen(category._id)}>
                                                <img src={Plusimg} alt="plus" />
                                              </div> 
                                              </button>
                                       </div>
                                </div>
                                ))}
                          </div>
 </div>
  ))
    ):(
      <p> data not found</p>
    )
    }
 
     </div>
     </div>
     </>
  )
}
