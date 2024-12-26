import React, { useEffect, useState } from 'react'
import Plusimg from '@assets/Offer_img/Plus_(1).png'
// import ReactModal from 'react-modal'
import Modal from 'react-modal'
import ModalforListItem from './ModalforListItem'
import axios from 'axios'
// import { data } from 'autoprefixer'
Modal.setAppElement('#root');
export default function ProductListItem() {
  const [modaldata,setmodaldata]=useState(null);

  const [modalIsopen,setmodalIsopen]=useState(null);
  const handelModelIsopen = (item)=>{
    setmodalIsopen(true);
    setmodaldata(item)
  }
  const handelModelIsclose = ()=>{
    setmodalIsopen(false);
  }

  const [Burgerdata,setdata]= useState([]);

  useEffect(()=>{
  axios.get(`http://localhost:4000/Burger`).then((res)=>{
    setdata(res.data)
  })
})
const [FriesData,setdataFries]= useState([]);

// Fries data
useEffect(()=>{
  axios.get(`http://localhost:4000/Fries`).then((res)=>{
    setdataFries(res.data)
  })
});

const [Colddrinks,setdataColddrinks]= useState([]);
//cold drinks data
useEffect(()=>{
  axios.get(`http://localhost:4000/Cold_drinks`).then((res)=>{
    setdataColddrinks(res.data)
  })
})


  
  return (
    <>
    <div className='relative'>
         <Modal isOpen={modalIsopen}
          overlayClassName="fixed   bg-black  z-40" className='inset-0  flex items-center fixed top-0 left-0 right-0 bottom-0  justify-center w-full bg-black bg-opacity-80 z-[1000]' >
          <ModalforListItem handelModelIsclose={handelModelIsclose} item={modaldata}/>
         </Modal>
    </div>

     <div className='mt-3 container'>
        {/*  Burgers */}
        <div>
             <h1 className='text-3xl font-bold my-6' >Burgers</h1>
              
                 <div className='grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 grid-flow-row gap-6' >
                 {Burgerdata.map((item)=>(
                    <div className='grid grid-cols-2 gap-2 bg-PRodecDetailcolor shadow-xl border p-4 rounded-md' >
                         <div className='py-4 text-xs' >
                            <h1 className='font-bold text-sm' >{item.Categorey_Name}</h1>
                              <p className='text-xs py-5'>{item.Categorey_Details}</p>
                               <p className='felx text-xl font-medium'>Pricing<span className='font-bold ml-3 text-sm' >&#8377;{item.Small_pricing}</span></p>
                         </div>

                          <div className='relative cursor-pointer' onClick={()=>{handelModelIsopen(item)}}>
                               <img src={item.Categorey_Img} className='relativev w-full h-full object-cover'/>
                                 <button><div className='bg-customgray flex items-center justify-center p-3 opacity-85 cursor-pointer rounded-tl-3xl absolute z-30 bottom-0 right-0 ' >
                                   <img src={Plusimg} alt="plus" />
                                 </div> 
                                 </button>
                          </div>
                   </div>
                   ))}
             </div>
             
        </div>
        {/* Burgers */}
             
        {/* Fries */}
        <div className=' mt-20'>
             <h1 className='text-3xl font-bold my-8 text-orange-400'>Fries</h1>
              
                 <div className='grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-3   grid-flow-row gap-6' >
                 {FriesData.map((item)=>(
                    <div className='grid grid-cols-2  gap-2 bg-PRodecDetailcolor shadow-xl border p-4 rounded-md'>
                         <div className='py-4 text-xs' >
                            <h1 className='font-bold text-sm' >{item.Categorey_Name}</h1>
                              <p className='text-xs py-5'>{item.Categorey_Details}</p>
                              <p className='felx text-xl font-medium'>Pricing<span className='font-bold ml-3 text-sm' >&#8377;{item.Small_pricing}</span></p>
                             
                         </div>

                          <div className='relative cursor-pointer' onClick={()=>{handelModelIsopen(item)}}>
                               <img src={item.Categorey_Img} className='relative w-full h-full object-cover'/>
                                 <div className='bg-customgray flex items-center justify-center p-3 opacity-85 cursor-pointer rounded-tl-3xl absolute z-30 bottom-0 right-0 ' >
                                   <img src={Plusimg} alt="plus" />
                                 </div> 
                          </div>
                   </div>
                   ))}
             </div>
             
        </div>
        {/* Fries */}

        {/* Coldrinks */}
             
        <div className='mt-20'>
             <h1 className='text-3xl font-bold my-8 text-orange-400'>Cold Drinks</h1>
              
                 <div className='grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-3  grid-flow-row gap-6' >
                 {Colddrinks.map((item)=>(
                    <div className='grid grid-cols-2 gap-2 bg-PRodecDetailcolor shadow-xl border p-4 rounded-md'>
                         <div className='py-4 text-xs' >
                            <h1 className='font-bold text-sm' >{item.Categorey_Name}</h1>
                              <p className='text-xs py-5'>{item.Categorey_Details}</p>
                              <p className='felx text-xl font-medium'>Pricing<span className='font-bold ml-3 text-sm' >&#8377;{item.Small_pricing}</span></p>

                         </div>

                          <div className='relative cursor-pointer'onClick={()=>{handelModelIsopen(item)}} >
                               <img src={item.Categorey_Img} className='relative w-full h-full object-cover'/>
                               <button >
                                 <div className='bg-customgray flex items-center justify-center p-3 opacity-85 cursor-pointer rounded-tl-3xl absolute z-30 bottom-0 right-0 ' >
                                   <img src={Plusimg} alt="plus"  className='' />
                                 </div> 
                                 </button>
                          </div>
                   </div>
                   ))}
             </div>
             
          </div>    
        {/* Coldrinks */}
         


        

     </div>
     </>
  )
}
