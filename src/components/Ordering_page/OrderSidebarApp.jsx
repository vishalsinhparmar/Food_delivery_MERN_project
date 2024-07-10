import React from 'react'
import { BiSolidFoodMenu } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import SidebarImg from '../../assets/Order/OrderBottomImg.png'
import Plusimg from '../../assets/Offer_img/Plus (1).png'


export default function OrderSidebarApp({SetOrderComponentValue,orderCopmonentValue}) {
  return (
      <nav className=''>
        <div className='space-y-4' >
          <div className='border rounded-lg bg-Mainccolor '>
            <ul className=''>
                <li className='my-10 flex items-center ps-10'>
                  <h1 className='font-bold text-2xl flex items-center' >
                    <BiSolidFoodMenu className='mr-4 text-3xl'/>
                  
                     Menu
                     
                  </h1>
                </li>
                <li className='my-6 font-bold'><button className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue=='Pizza' ? 'bg-black text-white ':''}`} onClick={()=>{SetOrderComponentValue("Pizza")}}>Pizzas</button></li>
                <li className='my-6 font-bold'><button className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue=='Garlic' ? 'bg-black text-white ':''}`} onClick={()=>{SetOrderComponentValue('Garlic')}}>Garlic Bread</button></li>
                <li className='my-6 font-bold '><button className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue=='Calzone' ? 'bg-black text-white':''}`} onClick={()=>{SetOrderComponentValue('Calzone')}}>Calzone</button></li>
                <li className='my-6 font-bold '><button className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue=='Kebabas' ? 'bg-black text-white':''}`} onClick={()=>{SetOrderComponentValue('Kebabas')}}>Kebabas</button></li>
                <li className='my-6 font-bold '><button className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue=='Salads' ? 'bg-black text-white':''}`} onClick={()=>{SetOrderComponentValue('Salads')}}>Salads</button></li>
                <li className='my-6 font-bold '><button className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue=='Cold drinks' ? 'bg-black text-white':''}`} onClick={()=>{SetOrderComponentValue('Cold drinks')}}>Cold drinks</button></li>
                <li className='my-6 font-bold '><button className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue=='Happy Meal' ? 'bg-black text-white':''}`} onClick={()=>{SetOrderComponentValue('Happy Meal')}}>Happy Meal®</button></li>
                <li className='my-6 font-bold '><button className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue=='Desserts' ? 'bg-black text-white':''}`} onClick={()=>{SetOrderComponentValue('Desserts')}}>Desserts</button></li>
                <li className='my-6 font-bold '><button className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue=='Hot drinks' ? 'bg-black text-white':''}`} onClick={()=>{SetOrderComponentValue('Hot drinks')}}>Hot drinks</button></li>
                <li className='my-6 font-bold '><button className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue=='Sauces' ? 'bg-black text-white':''}`} onClick={()=>{SetOrderComponentValue('Sauces')}}>Sauces</button></li>
                <li className='my-6 font-bold '><button className={`hover:bg-slate-200 w-full ps-10 text-left py-2 ${orderCopmonentValue=='GOrbit' ? 'bg-black text-white':''}`} onClick={()=>{SetOrderComponentValue('Orbit')}}>Orbit®</button></li>
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
