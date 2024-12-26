import React from 'react'
import { FaSearch } from 'react-icons/fa'
import offerimg1 from '@assets/Offer_img/Rectangle_8.png'
import offerimg2 from '@assets/Offer_img/Rectangle_8_(2).png'
import offerimg3 from '@assets/Offer_img/Rectangle_8_(1).png'
import Plusimg from '@assets/Offer_img/Plus_(1).png'



export default function Offers() {
  const offer = [
       {
            id:1,
            img:offerimg1,
            restaurantItem:'First Order Discount',
            offer:'-20%',
            plusimg:Plusimg
        },
        {   
            id:2,
            img:offerimg2,
            restaurantItem:'Vegan Discount',
            offer:'-20%',
            plusimg:Plusimg
        },
        {   
            id:3,
            img:offerimg3,
            restaurantItem:'Free ice Cream Offer',
            offer:'-100%',
            plusimg:Plusimg
        }
  ]
  return (
       <section className=''>
              


                 <div className='flex lg:justify-between flex-col lg:flex-row items-center  mt-10 sm:mt-10 container'>
                   <h1 className='font-bold lg:text-xl text-sm mb-5 lg:mb-5'>All Offers from McDonald's East London</h1>
                   <div className='relative'>
                   <input type="text"  placeholder='Search from menu ...' className='p-2 rounded-full  placeholder:ml-10 w-60 border focus:outline-none pl-10' />
                   <div className='absolute  flex items-center justify-center  pointer-events-none inset-y-0'>
                   <FaSearch className='pl-3   text-3xl'/>
                   </div>
                   </div>
                 </div>

                 <div className='py-5 lg:px-20 bg-offerColor mt-5 overflow-x-auto flex lg:block px-4 sm:my-4'>
                    <ul className='lg:grid lg:grid-flow-col items-center flex flex-shrink-0 space-x-4 lg:space-x-0 cursor-pointer '>
                        <li><button className='bg-black px-6 py-1 text-white rounded-full'>Offers</button></li>
                        <li>Burgers</li>
                        <li>Fries</li>
                        <li>Snacks</li>
                        <li>Salads</li>
                        <li>Cold drinks  </li>
                        <li>Happy Meal®</li>
                        <li>Desserts</li>
                        <li>Hot drinks</li>
                        <li>Sauces</li>
                        <li>Orbit®</li>
                        
                    </ul>
                 </div>

                  
              <div className='grid lg:grid-cols-3 md:grid-cols-3 mt-8 gap-5 container'>
                      
                 {offer.map((item)=>(
                  <div className='relative h-auto w-auto' key={item.id}>
                   <img src={item.img} className='z-10 relative h-full w-full object-cover rounded-lg' />
                      <div className='bg-gradient-to-r h-full  from-black to-slate-600 absolute opacity-70 top-0 left-0 z-20 rounded-lg w-full '>
                      </div>
                    <span className='p-2 rounded-b-xl bg-black text-white absolute top-0 right-4 z-30'>{item.offer}</span>
                    <p className='text-orange-400 absolute bottom-10 lg:top-40 md:top-24 left-8 z-30'>McDonald's East London</p>
                  <h1 className='font-bold text-2xl md:text-xl  text-green absolute lg:top-48 left-8  text-white z-30 bottom-2'>{item.restaurantItem}</h1>
                     <div className='bg-customgray flex items-center justify-center p-3 opacity-75 cursor-pointer rounded-tl-3xl absolute z-30 bottom-0 right-0 ' >
                         <img src={item.plusimg} alt="plus" />
                     </div>
                   </div>
                   ))}
       
                    
                  </div>



             
       </section>
  )
}
