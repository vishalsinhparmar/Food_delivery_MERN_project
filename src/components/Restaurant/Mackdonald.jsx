import React from 'react'
import OrderLogo from '@assets/Mackdonald/Order_Completed.png'
import MotorCycle from '@assets/Mackdonald/Motocross.png'
import Rectangle1 from '@assets/Mackdonald/Rectangle_43.png'
import Rectangle2 from '@assets/Mackdonald/Rectangle_44.png'
import Rectangle3 from '@assets/Mackdonald/Rectangle_64.png'
import clock from '@assets/Mackdonald/Clock.png'




export default function Mackdonald() {
  return (
     <section className='container'>
        <div className='relative sm:flex sm:justify-center '>
            <img src={Rectangle1} className='object-cover w-full lg:h-96 h-651 rounded-t-lg ' />
            <div className='bg-Mackdonaldcolor absolute w-full lg:h-96 h-651 opacity-60 top-0 rounded-t-lg '></div>
        
        <div className='lg:grid lg:grid-flow-col sm:grid-flow-row items-center   absolute top-8 gap-10 px-5   '  >
            <div className='items-center lg:ps-4 pr-5'>
                 <p className='text-sm' >I'm lovin' it!</p>
                 <h1 className='lg:text-5xl text-2xl font-semibold py-4 sm:py-2' >McDonald's East London</h1>

                <div className='lg:space-x-2   lg:space-y-0  justify-center sm:flex-row lg:flex-row lg:justify-normal my-4' >
                    <button className='rounded-full bg-black mr-2' >
                     <div className='flex justify-center items-center lg:px-6 lg:py-4 px-4 py-4  text-white'> 
                        <img src={OrderLogo} className='lg:mr-4 mr-2 w-6'/><h1>Minimum Order: 12 GBP</h1>
                     </div>
                   </button>

                   <button className='rounded-full bg-black '>
                      <div className='flex justify-center items-center text-white lg:px-6 lg:py-4 px-4 py-4'> 
                        <img src={MotorCycle} className='lg:mr-4 mr-2 w-6 '/><h1>Minimum Order: 12 GBP</h1>
                      </div>
                   </button>

                 </div>
             
            </div>

            <div className='relative w-auto lg:justify-items-end  ' >
            <img src={Rectangle2} alt="" className=' z-10  right-0  object-cover w-full ' />

                <img src={Rectangle3} alt="" className='absolute bottom-0 -left-9  z-30 hidden lg:flex' />
            </div>

          </div>
          <p className='bg-orange-500 text-white flex items-center px-5 py-2 w-64 rounded-r-xl left-0 absolute -bottom-6' ><img src={clock} className='mr-3'/>Open until 3:00 AM</p>

        </div>
     </section>
  )
}
