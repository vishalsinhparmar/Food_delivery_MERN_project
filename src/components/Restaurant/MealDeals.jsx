import React, { useState } from 'react'
import Rectangle56 from '@assets/Order/Rectangle_53.png'
import Elips6 from '@assets/Order/Ellipse_6.png'
import { NavLink } from 'react-router-dom'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'

export default function MealDeals() {
  const [count, setcount]=useState([0]);

  const handelCountInc = ()=>{
     setcount(count+1);
  } 
  const handelCountDic = ()=>{
    setcount(count-1);
 } 
    // const MealDeal = [
    //     {
    //         img:
    //         pizzaName:'Margherita',
            
    //     }
    // ]
  return (
       <div className='w-1/2  shadow-2xl pb-6 relative'>
       
        <div className='' >
            <div>
                <img src={Rectangle56} alt=""  className='h-16 w-full object-cover'/>
                <div className=''>
                     <MdCancel className='text-4xl text-orange-500 absolute top-0 right-0 bg-orange-50 cursor-pointer' />
                </div>
            </div>

            <div>
                <p className=' text-center my-4 font-bold text-black'>Please select your first Pizza</p>
            </div>

            <div className='w-96  mx-auto'>
    {[1,2,3,4].map((item)=>(


               <div className='bg-Aboutcolor w-full flex  my-4 rounded-lg '>

            
                <div className='p-4  flex items-center justify-center'>
                    <div className='border-r-2 px-2' >
                      <img src={Elips6} alt="Margherita" className='w-14' />
                    </div>
                    <div className='ml-4 font-bold'>
                     <h1>Margherita</h1>
                     </div>
                </div>

                <div className='inline-flex items-center'>
                    <div>
                    <button className='bg-black  rounded-full w-6 text-white flex justify-center ' onClick={handelCountDic}>-</button>
                    </div>
                    <div className='px-2'>
                    <input type='number' className='w-16 h-16 rounded-lg focus:outline-none text-center text-xl ' value={count}/>
                    </div>
                    <div>
                    <button className='bg-black  rounded-full w-6 text-white flex justify-center  ' onClick={handelCountInc}>+</button>
                    </div>
                </div>
             </div>  
              ))}  
       
              

        
         </div >

          {/*for pay button  */}
         <div className='mx-10 flex items-center justify-between ' >
                <button className='flex items-center justify-between bg-orange-500 text-white font-bold rounded-lg'>
                             <div className='flex items-center px-4 py-2' >
                                <p className='mr-2'>Total to pay</p> 
                                <p className='text-xl' >£127.90</p>
                               </div>
                             </button>
                <p className='text-xs'>Delivery & Tax will be calculated in the next step</p>
        </div> 
        {/*for pay button-end  */}

        <div className='flex  items-center justify-end mx-10'>
            <NavLink to='/order' className='underline underline-offset-2'>Take me back</NavLink>
            <button className='flex items-center justify-between  bg-green-600 text-white font-bold  rounded-lg mx-2'>
                             <div className='flex items-center justify-center px-4 py-3' >
                                <p className='mr-5 text-xl'><BsArrowRightCircleFill/></p> 
                                <p className='text-md' >Checkout!</p>
                               </div>
                          </button>
        </div>
         
        </div>

       </div>
  )
}

