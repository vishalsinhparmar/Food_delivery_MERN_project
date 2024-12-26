import React from 'react'
import { IoIosArrowBack, IoIosArrowForward, IoMdStopwatch } from 'react-icons/io'
import AvatarImg from '@assets/Revieimg/Ellipse_3.png'
import { TiStarFullOutline } from 'react-icons/ti'

export default function CustomerReviews() {
  return (
     <div className='mt-5 relative'>

      
        
         <div className='bg-Aboutcolor lg:py-24 py-10 '>
          <div className='container'>

              <div className='flex justify-between lg:flex-row flex-col items-center pb-2'>
                <h1 className='font-bold text-4xl mb-5 lg:mb-5' >Customer Reviews</h1>
                <div className='flex items-center space-x-4 cursor-pointer'>
                <p className='bg-orange-500 text-white rounded-full p-4'><IoIosArrowBack/></p>
                <p className='bg-orange-500 text-white rounded-full p-4'><IoIosArrowForward/></p>
                </div>
              </div>

        <div className='lg:grid lg:grid-cols-3 gap-3 flex overflow-x-auto scrollbar-hide'>
             
              {[0,1,2].map((item)=>(
                  <div className='mt-5 bg-white px-4 py-4 shadow-lg rounded-md flex-shrink-0'>
                      <div className='flex  items-center justify-between'>
                          <div className='flex items-center'>
                             <div className='border-r-2 border-orange-500 pr-1' >
                              <img src={AvatarImg} alt="avtarimg" className='border-r-orange-500' />
                              </div>
                              <div className='ml-2 text-sm'>
                               <p>St Glx</p>
                               <p>South London</p>
                               </div>
                          </div>

                          <div className=''>
                            <div className='text-right'>
                            <TiStarFullOutline className='inline-flex text-orange-500'/><TiStarFullOutline className='inline-flex text-orange-500'/>
                            <TiStarFullOutline className='inline-flex  text-orange-500'/><TiStarFullOutline className='inline-flex  text-orange-500'/><TiStarFullOutline className='inline-flex'/>
                            </div>

                            <div className='flex items-center text-sm'>
                                <IoMdStopwatch className='inline-flex text-orange-500 mr-1'/>
                                <p>24th September, 2023</p>
                            </div>
                          </div>
                      </div>
                        

                
                      <p className='py-6 text-sm w-72'>
                    The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food 
                      was up to the usual McDonald's standard hot and satisfying.
                    </p>
              </div>

                 ))}
                    
                
            
              </div>

              </div>
              
         </div> 
         <div className='rounded-lg py-3 bg-white w-36 px-5 lg:absolute z-20 -bottom-16 shadow-lg left-2/4 hidden' >
          
                <h1 className='text-6xl' >3.4</h1>
                <div className=''>
                            <TiStarFullOutline className='inline-flex text-orange-500'/><TiStarFullOutline className='inline-flex text-orange-500'/>
                            <TiStarFullOutline className='inline-flex  text-orange-500'/><TiStarFullOutline className='inline-flex  text-orange-500'/><TiStarFullOutline className='inline-flex'/>
                 </div>
                 <p>1,360 review</p>
          
            </div>
          
     </div>
  )
}
