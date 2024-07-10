import React from 'react'
import Rectangle1 from '../assets/ExclusiveOffer/Rectangle 8.png'
import Rectangle2 from '../assets/ExclusiveOffer/Rectangle 8 (1).png'
import Rectangle3 from '../assets/ExclusiveOffer/Rectangle 8 (2).png'


export default function Exclusicedeal() {
    const Exclusive = [
        {
            id:1,
            img:Rectangle1,
            restaurantItem:'Chef Burgers London',
            offer:'-40%'
        },
        {   
            id:2,
            img:Rectangle2,
            restaurantItem:'Grand Ai Cafe London',
            offer:'-20%'
        },
        {   
            id:3,
            img:Rectangle3,
            restaurantItem:'Butterbrot Caf’e London',
            offer:'-17%'
        }
    ]
  return (
   <div className='container MainSec '>
        
     <section className='lg:flex lg:items-center lg:justify-between grid grid-flow-col gap-3 items-center lg:px-5 px-4'>
       <h1 className='font-bold lg:text-xl sm:text-xl text-sm inline-flex'>Up to -40% 🎊 <span className='hidden lg:flex'> Order.uk </span>&nbsp;exclusive deals</h1>
       <ul className='lg:inline-flex lg:items-center   '>
         <li className='mx-10 hidden lg:flex'>Vegan</li>
         <li className='mx-10  hidden lg:flex'>Sushi</li>
         <li className='lg:mx-10 lg:flex sm:text-xl text-xs'><button className='bg-transparent border border-orange-400 text-orange-400 rounded-full lg:px-5 py-2 px-4'>Pizza & Fast food</button></li>
         <li className='mx-10 hidden lg:flex'>others</li>
       </ul>
       </section>

       <section className='grid lg:grid-cols-3 mt-5 gap-10 overflow-x-auto'>
        {Exclusive.map((item)=>(

        
        < div className='relative' key={item.id}>
                  <img src={item.img} className='z-10 relative h-auto w-full rounded-lg' />
               <div className='bg-gradient-to-r  from-black to-slate-600 absolute opacity-70 top-0 left-0 z-20 rounded-lg w-full h-full'>
              </div>
                   <span className='p-2 rounded-b-xl bg-black text-white absolute top-0 right-4 z-30'>{item.offer}</span>
                  <p className='text-orange-400 absolute bottom-0 top-40 left-16 z-30 sm:text-xl'>Restaurant</p>
                  <h1 className='font-bold text-green absolute top-48 left-16 text-white z-30 sm:text-2xl'>{item.restaurantItem}</h1>
               
        </div>
        ))}
       </section>
   </div>    

   
  )
}
