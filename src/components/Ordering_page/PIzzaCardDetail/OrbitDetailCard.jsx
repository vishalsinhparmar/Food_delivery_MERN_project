import React, { useEffect, useState } from 'react'
import Redchilli1 from '../../../assets/Order/icons8-chilli-96 2.png'
import Redchilli2 from '../../../assets/Order/icons8-chilli-96 5.png'
import axios from 'axios';

export default function OrbitDetailCard() {
  const[data,setdata]=useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:4000/Orbit`).then((res)=>{
      setdata(res.data)
 })
},[]);
  return (
    <div>
    <div className='grid grid-flow-row gap-5'>
   {data.map((item)=>(
     <div className='bg-white rounded-lg shadow-xl p-4 border cursor-pointer' key={item.id} >
        <div className='flex items-center justify-items-center justify-between gap-10'>
          <div className='felx items-center justify-between '>
              <h1 className='text-2xl font-semibold' >{item.Categorey_Name}</h1>
              <div className='flex items-center '>

                <img src={Redchilli1} alt="" className='w-6'/>
                <img src={Redchilli1} alt="" className='w-6' />
                <img src={Redchilli1} alt="" className='w-6'/>
                <img src={Redchilli1} alt="" className='w-6'/>
                <img src={Redchilli2} alt="" className='w-6' />
                
              </div>
              <p className='text-sm py-4 max-w-56' >{item.Categorey_Details}</p>
          </div>

          <div className=' rounded-full w-36 ' >
              <img src={item.Categorey_Img} className='w-full object-cover '/> 
          </div>
      </div>

      <div className='grid grid-flow-col gap-2 pt-8'>
      <div className=' p-2 flex items-baseline  bg-black text-white rounded-md '>
              <p className='mr-5 bg-black text-white'>Small</p>
              <p className='py-2 px-4 bg-green-700 text-white font-bold rounded-md'>&#8377;{item.Small_pricing}</p>
          </div>
           
          <div className='border p-2 flex items-baseline rounded-md hover:bg-slate-50'>
              <p className='mr-5'>Medium </p>
              <p className='py-2 px-4 bg-green-700 text-white font-bold rounded-md'>&#8377;{item.Medium_pricing}</p>                           
          </div>

          <div className='border p-2 flex items-baseline rounded-md hover:bg-slate-50'>
              <p className='mr-5'>Large</p>
              <p className='py-2 px-4 bg-green-700 text-white font-bold rounded-md'>&#8377;{item.Large_pricing}</p>                           
          </div>

         

      </div>
      <div className='border p-2 flex items-baseline rounded-md w-80 mt-2 hover:bg-slate-50'>
              <p className='mr-5'>XL Large with Sauces</p>
              <p className='py-2 px-4 bg-green-700 text-white font-bold rounded-md'>&#8377;{item.XlLarge_pricing}</p>                           
          </div>

     </div>
     ))}
     {/* map */}
</div>
</div> 
  )
}
