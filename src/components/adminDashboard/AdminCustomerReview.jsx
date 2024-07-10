import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti'
import adminReview from '../../assets/png_logo/adminimage 4.png'
import adminAvatar from '../../assets/png_logo/adminplaceholder.png'

export default function AdminCustomerReview() {
  return (
    <>
    {/* customer Reviews-start */}
    <div className='py-4'>
    <div className='py-6'>
       <h1 className=' font-semibold text-3xl'>Customer Review</h1>
       <p className=' opacity-45'>Eum fuga consequuntur utadsjn et.</p>
    </div>
 
 <div className='lg:grid lg:grid-cols-3 gap-3 flex overflow-x-auto'>
      
      {[0,1,2].map((item)=>(
          <div className='mt-5 bg-white px-4 py-4 shadow-lg rounded-md flex-shrink-0' key={item.id}>
              <div className='flex  items-center justify-between'>
                  <div className='flex items-center'>
                     <div className='  pr-1' >
                      <img src={adminAvatar} alt="avtarimg" className='border-r-orange-500' />
                      </div>
                      <div className='ml-2 text-sm'>
                       <p>Jons Sena</p>
                       <p className=' text-xs opacity-45'>2 days ago</p>
                       </div>
                  </div>

              </div>
                
             <div className='grid grid-cols-3 items-center'>
                <div className='col-span-2'>
                   <p className='py-6 text-sm'>
                         Lorem Ipsum is simply dummy text of the printing
                          and typesetting industry. Lorem Ipsum has been 
                          the industry's standard dummy text 
                    </p>
                 </div>

                 <div className=' w-24 rounded-full'>
                     <img src={adminReview} className=' rounded-full'/>
                 </div>

              </div>
            
            <div className=''>
                    <div className='text-left'>
                    <TiStarFullOutline className='inline-flex text-orange-500'/><TiStarFullOutline className='inline-flex text-orange-500'/>
                    <TiStarFullOutline className='inline-flex  text-orange-500'/><TiStarFullOutline className='inline-flex  text-orange-500'/><TiStarFullOutline className='inline-flex'/>
                    </div>

                   
                  </div>
      </div>
      

         ))}
            
        
    
      </div>

      </div>  
{/* customer Reviews-end */}
</>
  )
}
