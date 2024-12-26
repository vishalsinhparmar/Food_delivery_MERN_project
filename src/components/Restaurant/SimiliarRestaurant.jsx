import React from 'react'
import Restaurant1 from '@assets/Restaurant/Rectangle_13_1.png'
import Restaurant2 from '@assets/Restaurant/Rectangle_13_2.png'
import Restaurant3 from '@assets/Restaurant/Rectangle_13_3.png'
import Restaurant4 from '@assets/Restaurant/Rectangle_13_4.png'
import Restaurant5 from '@assets/Restaurant/Rectangle_13_5.png'
import Restaurant6 from '@assets/Restaurant/Rectangle_13_6.png'

export default function SimiliarRestaurant() {
    const Restaurant = [
        {    
            id:1,
            img:Restaurant1,
            name:'McDonalds London'
        },
        {    
            id:2,
            img:Restaurant2,
            name:'Papa Johns'
        },
        {    
            id:3,
            img:Restaurant3,
            name:'KFC West London'
        },
        {    
            id:4,
            img:Restaurant4,
            name:'Texas Chicken'
        },
        {    
            id:5,
            img:Restaurant5,
            name:'Burger King'
        },
        {    
            id:6,
            img:Restaurant6,
            name:'Shaurma 1'
        },

    ]
  return (

  
    <div className='container mt-24 sm:mt-10'>
    <h1 className='mt-15 font-bold text-xl'>Similar Restaurants</h1>
     <div className='lg:grid lg:grid-cols-6 flex gap-4 mt-10 overflow-x-auto'>
        
        {Restaurant.map((item)=>(
         <div key={item.id} className='border rounded-xl flex-shrink-0' >
             <img src={item.img} className='w-full ' />
             <h5 className=' bg-Restaurant text-white text-center py-3 rounded-b-xl font-semibold'>{item.name}</h5>
        </div>
        ))}
     </div>
     </div>
  


  )
}
