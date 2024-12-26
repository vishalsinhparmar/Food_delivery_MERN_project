import React from 'react'
import { BiCalendar } from 'react-icons/bi'
import { FaAngleDown } from 'react-icons/fa'
import { IoArrowDown, IoArrowUp } from 'react-icons/io5'
import order1 from '@assets/png_logo/image_4.png'
import order2 from '@assets/png_logo/image_1.png'
import order3 from '@assets/png_logo/image_5.png'
import order4 from '@assets/png_logo/image_6.png'
import App from './Chart'
import AdminCustomerReview from './AdminCustomerReview'





export default function Dashboard() {
    const MyOrder = [
        {
            id:1,
            img:order1,
            Mynumber:'75',
            totalOrder:'Total Orders',
            ArrowBuutton:<span className='bg-green-100 p-1 flex justify-center items-center rounded-full'><IoArrowUp className=' text-xs text-green-600'/></span>,
            Days:'4% (30 days)'
        },
        {
            id:2,
            img:order2,
            Mynumber:'357',
            totalOrder:'Total Delivered',
            ArrowBuutton:<span className='bg-green-100 p-1 flex justify-center items-center rounded-full'><IoArrowUp className=' text-xs text-green-600'/></span>,
            Days:'4% (30 days)'

        },
        {
            id:3,
            img:order3,
            Mynumber:'65',
            totalOrder:'Total Canceled',
            ArrowBuutton:<span className='bg-red-100 p-1 flex justify-center items-center rounded-full'><IoArrowDown className=' text-xs text-red-600'/></span>,
            Days:'25% (30 days)' 
        },
        {
            id:4,
            img:order4,
            Mynumber:'$128',
            totalOrder:'Total Revenue',
            ArrowBuutton:<span className='bg-red-100 p-1 flex justify-center items-center rounded-full'><IoArrowDown className=' text-xs text-red-600'/></span>,
            Days:'12% (30 days)' 
        }
    ]
  return (
<div className='py-10'>
    <div className='flex items-center justify-between '>
          <div>
             <h1 className='text-xl font-bold' >Dashboard</h1>
             <p>Hi, Samantha. Welcome back  to Sedap Admin!</p>
          </div>

          <div className='flex items-center px-3 py-3 bg-white rounded-xl'>
                <div className='bg-blue-100 p-2  rounded-xl mr-4'>
                   < BiCalendar className='text-blue-500 text-xl'/>
                </div>
                
                <div>
                    <p className=' font-semibold' >Filter Periode</p>
                    <p className=' text-xs' >17 April 2020 - 21 May 2020</p>
                </div>

                 <div className='px-2 cursor-pointer'>
                    <FaAngleDown className=' text-xl'/>
                 </div>
          </div>
    </div>

    <div className='grid grid-cols-4 gap-8 py-10'>
     {MyOrder.map((item)=>(
         <div className='flex items-center justify-center bg-white rounded-xl py-4' key={item.id}>
              <div className='pr-4'>
                <img src={item.img} alt='order image' className='w-14 rounded-full p-1'/>
              </div>

              <div>
                <h1 className=' text-3xl font-bold'>{item.Mynumber}</h1>
                <p>{item.totalOrder}</p>
                 <p className='flex items-center text-xs opacity-30'><span className='mr-1'>{item.ArrowBuutton}</span>{item.Days}</p>
              </div>
         </div>
         ))}
    </div>
{/* chart-start */}
      <div>
        <App/>
      </div>
{/* chart-end */}

       {/* customer Reviews-start */}
       <AdminCustomerReview/>
       {/* customer Reviews-end */}

    </div>
    
  )
}
