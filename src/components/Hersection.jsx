import React from 'react'
// import HeroImg from '../assets/Hero_section/Rectangle 44.png'
import person1 from '../assets/Hero_section/Untitled-1 1.png'
import person2 from '../assets/Hero_section/Untitled-2 1.png'
import Logo from '../assets/png_logo/LOGO 1.png'
import notificationimg from '../assets/Hero_section/notification 1.png'



export default function Hersection() {
  return (
      <main className='relative container MainSec'>
         <div className='border rounded w-full h-auto bg-Mainccolor mb-10 lg:ps-9'>
             <div className='grid grid-cols-1 w-full content-center lg:grid-cols-3  sm:py-6 lg:py-0 '>
                 <div className='flex flex-col justify-center HeroSec col-span-1 sm:items-center'>
                     <p className='sm:py-2' >Order Restaurant food, takeaway and groceries.</p>
                     <h1 className='text-3xl lg:text-4xl font-medium py-2 lg:py-0 sm:py-4' >Feast Your Senses,<span className='text-orange-400'>Fast and Fresh</span></h1>
                     <p>Enter a postcode to see what we deliver</p>
                    <div className='flex'>
                       <input type="text" className='rounded-full p-3 border placeholder-black mt-5 placeholder:text-sm  focus:outline-none w-64 sm:w-80 lg:w-64'  placeholder='  e.g. EC4R 3TE'/>
                           <button className=' bg-orange-400 p-2 lg:px-10 px-6 rounded-full text-white mt-5 lg:-ml-10 -ml-20 sm:-ml-20'>Search</button>
                     </div>
                  </div>
                {/* img sec */}
              <div className='relative lg:flex w-[800] h-500 hidden '>
              <img src={person1} className='object-cover  w-full h-full z-20  ' />
              </div>

                {/* img sec2 */}

                <div className='relative hidden lg:flex'>
           
                     <div className='bg-orange-400 p-4 rounded-tl-3xl pl-0 relative w-full h-full '>
                     
                           
                       <div className='relative flex h-96 '>
                       <img src={person2} className='absolute object-cover top-16 right-24 z-10'/>
                       </div>

                              <div className='p-3  bg-white rounded-xl absolute top-28 left-20 z-40'>
                                 <img src={Logo} className='w-14 ml-2 inline-flex' /><span className=' float-end text-sm text-gray-400 font-semibold'>now</span>
                                 <h1 className='text-black font-bold mt-1'>We've Received your order!</h1>
                                 <p>Awaiting Restaurant acceptance</p>
                              </div>

                              <div className='p-3 bg-white rounded-xl  absolute top-60 -left-3 z-40'  >
                                 <img src={Logo} className='w-14 ml-2 inline-flex'/><span className=' float-end text-sm text-gray-400 font-semibold'>now</span>
                                 <h1 className='text-black font-bold mt-1'>Order Accepted! </h1>
                                 <p>Your order will be delivered shortly</p>
                              </div>

                              <div className='p-3 bg-white rounded-xl absolute top-96 left-16 z-40'  >
                              <img src={Logo} className='w-14 ml-2 inline-flex'/><span className=' float-end text-sm text-gray-400 font-semibold'>now</span>
                                 <h1 className='text-black font-bold mt-1'>Your rider's nearby</h1>
                                 <p>They're almost there-get ready</p>
                                  
                              </div>

                           </div>
                     
                </div>

              </div>
         </div>
      </main>
  )
}
