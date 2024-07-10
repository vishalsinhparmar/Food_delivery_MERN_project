import React from 'react'
import LocationImg from '../../assets/Location/Rectangle 52.png'
import previousLocation from '../../assets/Location/Previous Location.png'

export default function RestaurantLocation() {
  return (
    <div className='container mt-10' >

    <div className='relative z-30 mt-10'>
        <img src={LocationImg} alt="location " className='w-full object-cover h-450 '/>
    
   <div className='flex justify-between absolute lg:top-20 left-20 top-10 z-10'>
         <div className='bg-Herocolor h-auto lg:h-350 flex justify-items-center items-center rounded-md lg:max-w-72 max-w-56 p-2 py-4 lg:p-0' >
        <ul className='px-2 ps-6'>
            <li><h1 className='font-bold text-white' >McDonald's</h1></li>
            <li className='text-orange-500 my-1' >South London</li>
            <li className='text-white my-5 text-xs'><p>Tooley St, London Bridge, London SE1 2TF,United Kingdom</p></li>
            <li className='text-white mt-1'>Phone number</li>
            <li className='text-orange-500'>+934443-43</li>
            <li className='text-white mt-2'>Website</li>
            <li className='text-orange-500'><a href="">http://mcdonalds.uk/</a></li>

        </ul>
    </div>
    
    </div>
   
    <div className='absolute right-36 top-40 shadow-lg hidden lg:flex'> 
        <div className='bg-white rounded-md relative w-48 p-3'>
        <h1>McDonald's </h1>
        <p>South London</p>

           <div className='bg-black p-2 rounded-full -right-3 absolute -top-7'>
                <img src={previousLocation}/>
           </div>
        </div>
    </div>

    </div>
</div>
  )
}
