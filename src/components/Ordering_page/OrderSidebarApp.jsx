import React, { useContext, useEffect, useState } from 'react'
import { BiSolidFoodMenu } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import SidebarImg from '@assets/Order/OrderBottomImg.png'
import Plusimg from '@assets/Offer_img/Plus_(1).png'
import { getcategory } from '../adminDashboard/Apibaseurl'
import { OrderContext } from './context/MyContext'



export default function OrderSidebarApp() {
  const {orderCopmonentValue,handelSetOrderComponentValue,loading,setcategoryData,category,SetOrderComponentValue} = useContext(OrderContext);

  console.log("orderCopmonentValue",orderCopmonentValue)
  // const [category,setcategoryData] = useState([]);
  console.log("category from the sidebar",category)
  
  return (
      <nav className=''>
        <div className='space-y-4' >
          <div className='border rounded-lg bg-Mainccolor '>
            <ul className=''>
            <p>{loading ? "loading":""}</p>
                <li className='my-10 flex items-center ps-10'>
                  <h1 className='font-bold text-2xl flex items-center' >
                    <BiSolidFoodMenu className='mr-4 text-3xl'/>
                  
                     Menu
                     
                  </h1>
                </li>
           {category.map((item)=>(
         
             
             <li className='my-6 font-bold' key={item._id}>
             <button 
             className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue.name ===`${item.Categoryname}` ? 'bg-black text-white ':''}`} 
             onClick={()=>handelSetOrderComponentValue(item.Categoryname,item._id)}>
              {item.Categoryname}
             </button>
             </li>
           
       
           ))}
                
            </ul>

          </div>
                <div>
                <div className='relative'>
                   <img src={SidebarImg} className='z-10 relative h-60 w-full rounded-lg' />
                      <div className='bg-gradient-to-r  from-black to-slate-600 absolute opacity-50 top-0 left-0 z-20 rounded-lg w-full h-60'>
                      </div>
                    <span className='p-2 rounded-b-xl bg-black text-white absolute top-0 left-4 z-30'>-20%</span>
                    <p className='text-orange-400 absolute bottom-0 top-40 left-8 z-30'>Special Offer</p>
                  <h1 className='font-bold text-lg text-green absolute top-48 left-8 text-white z-30'>First Order Discount</h1>
                     <div className='bg-customgray flex items-center justify-center p-3 opacity-75 cursor-pointer rounded-tl-3xl absolute z-30 bottom-0 right-0 ' >
                         <img src={Plusimg} alt="plus" />
                     </div>
                   </div>
                </div>
          </div>
      </nav>
  )
}
