import React from 'react'
import TandooriPizza from '../../assets/Pizza/Rectangle 44.png'
import OrderLogo from '../../assets/Mackdonald/Order Completed.png'
import MotorCycle from '../../assets/Mackdonald/Motocross.png'
import Rectangle1 from '../../assets/Mackdonald/Rectangle 43.png'
// import Rectangle2 from '../../assets/Mackdonald/Rectangle 44.png'
// import Rectangle3 from '../../assets/Mackdonald/Rectangle 64.png'
import clock from '../../assets/Mackdonald/Clock.png'
import { TiStarFullOutline } from 'react-icons/ti'

export default function Tandoori_Pizza() {
  return (
    <section className='container'>
    <div className='relative sm:flex sm:justify-center '>
        <img src={Rectangle1} className='object-cover w-full lg:h-96  rounded-t-lg h-651 '  />
        <div className='bg-Mackdonaldcolor absolute w-full lg:h-96 h-651 opacity-60 top-0 rounded-t-lg'></div>
    
    <div className='grid lg:grid-flow-col grid-flow-row items-center  absolute top-8 gap-10 px-5   '  >
        <div className='items-center ps-4 pr-5'>
             <p className='text-sm' >Desi Flavours with a blend of Italian aesthetics!</p>
             <h1 className='lg:text-5xl font-semibold py-8 text-xl' >Tandoori Pizza London</h1>
           <div className='lg:space-x-2 md:space-x-4 space-x-2 space-y-5 lg:space-y-4' >
             <button className='rounded-full bg-black' >
               <div className='flex justify-center items-center lg:px-6 lg:py-4 px-4 py-4   text-white'> 
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

        <div className='relative w-full  justify-items-end h-auto ' >
        <img src={TandooriPizza} alt="" className='relative z-10 right-0 object-cover w-full h-full ' />

            {/* <img src={Rectangle3} alt="" className='absolute bottom-0 -left-9  z-30' /> */}
            <div className='rounded-lg py-3 bg-white hidden lg:flex flex-col px-4 absolute bottom-0 -left-9  z-20 shadow-lg ' >
          
          <h1 className='text-6xl' >3.4</h1>
          <div className=''>
                      <TiStarFullOutline className='inline-flex text-orange-500'/><TiStarFullOutline className='inline-flex text-orange-500'/>
                      <TiStarFullOutline className='inline-flex  text-orange-500'/><TiStarFullOutline className='inline-flex  text-orange-500'/><TiStarFullOutline className='inline-flex'/>
           </div>
           <p>1,360 review</p>
    
             </div>
        </div>

      </div>
      <p className='bg-orange-500 text-white flex items-center px-5 py-2 w-64 rounded-r-xl left-0 absolute -bottom-6' ><img src={clock} className='mr-3'/>Open until 3:00 AM</p>

    </div>
 </section>
  )
}
