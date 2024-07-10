import React from 'react'
import LocationImg from '../assets/Location/Rectangle 52.png'
import previousLocation from '../assets/Location/Previous Location.png'
export default function Location() {
  return (
    <div className='relative' >

        <div>
            <img src={LocationImg} alt="location" />
        </div>
     <div className='flex justify-between absolute'>
        <div className='bg-Herocolor h-80 flex justify-items-center items-center rounded-md ' >
            <ul className='p-5'>
                <li><h1 className='font-bold' >McDonald's</h1></li>
                <li className='text-orange-500' >South London</li>
                <li><p>Tooley St, London Bridge, London SE1 2TF,United Kingdom</p></li>
                <li>Phone number</li>
                <li>+934443-43</li>
                <li>Website</li>
                <li className='text-orange-500'><a href="">http://mcdonalds.uk/</a></li>

            </ul>
        </div>
        
        <div className='bg-white rounded-md relative'> 
            <h1>McDonald's </h1>
            <p>South London</p>

            <div className='bg-black p-4 absolute right-0'>
                <img src={previousLocation}/>
            </div>
        </div>

        </div>

    </div>
  )
}
