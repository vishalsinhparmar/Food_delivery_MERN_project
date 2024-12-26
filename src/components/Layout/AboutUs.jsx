import React from 'react'
import about1 from '@assets/AboutUs/order-food_1.png'
import about2 from '@assets/AboutUs/order_1.png'
import about3 from '@assets/AboutUs/food_1.png'

export default function AboutUs() {
    const About = [
        {
            id:1,
            img:about1,
            header:'Place an Order!',
            detail:'Place order through ourwebsite or Mobile app'
        },
        {
            id:2,
            img:about2,
            header:'Track Progress',
            detail:'Your can track your order status with delivery time'
        },
        {
            id:3,
            img:about3,
            header:'Get your Order!',
            detail:'Receive your order at a lighting fast speed!'
        },

    ];

    const ResNumber = [
        {
            id:1,
            number:'546+',
            NumberDetail:'Registered Riders'
        },
        {
            id:2,
            number:'789,900+',
            NumberDetail:'Orders Delivered'
        },
        {
            id:3,
            number:'690+',
            NumberDetail:'Restaurants Partnered'
        },
        {
            id:4,
            number:'17,457+',
            NumberDetail:'Food items'
        }
    ]


  return (
    <div className='container'>

       <div className=' lg:bg-Aboutcolor rounded-md py-20 mt-10 mx-auto'>
        <div className='lg:px-12'>
            <div className='flex items-center lg:py-8 pt-0 lg:justify-between justify-center'>
            <h1 className='font-bold text-xl text-center'>Know more about us!</h1>
            <div className='hidden lg:flex' >
                <ul className='inline-flex items-center ' >
                    <li className='mx-4'><button className=' border bg-transparent border-orange-400  rounded-full py-2 px-4 font-bold'>Frequent Questions  </button></li>
                    <li className='mx-4'>Who we are?</li>
                    <li className='mx-4'>Partner Program</li>
                    <li className='mx-4'>Help & Support</li>
                </ul>
            </div>
            </div>

            <div className='grid lg:grid-cols-3  grid-cols-1 gap-4 bg-white  rounded-lg  pt-10'>
                 <div className='max-w-auto lg:ps-5 '>
                    <ul className='text-center'>
                      <li className='py-2 font-bold'><button className='bg-orange-500 text-black px-5 py-4 rounded-full font-bold' >How does Order.UK work?</button></li>
                      <li className='py-2 font-bold'>What payment methods are accepted?</li>
                      <li className='py-2 font-bold'>Can I track my order in real-time?</li>
                      <li className='py-2 font-bold'>Are there any special discounts or promotions available?</li>
                      <li className='py-2 font-bold'>Is Order.UK available in my area?</li>
                    </ul>
                 </div>

                 <div className='col-span-2 mx-2' >
                  
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 lg:pr-4' >
                    {About.map((item)=>(
                       <div className='py-4 px-1 bg-Aboutcolor text-center rounded-md' key={item.id}>
                        <h1 className='font-bold'>{item.header}</h1>
                        <div className='flex justify-center items-center mt-2'>
                        <img src={item.img} className='h-32'  />
                        </div>
                        <p className='my-2'>{item.detail}</p>
                      </div>
                      ))}
                    </div>
                    <div className='flex justify-center items-center  lg:mx-14'>
                         <p className='lg:text-center py-6 '>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishe
                             and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
                             </div>
                 </div>
            </div>

        </div>
    </div>
             <div className='bg-orange-400 rounded-lg p-5 grid lg:grid-cols-4 grid-cols-1  mt-10 justify-items-center'>
                {ResNumber.map((item)=>(
                 <div className='text-white lg:border-r border-b border-gray-200 w-56 text-center flex flex-col justify-center items-center mb-5' key={item.id}>
                     <h1 className='text-5xl  lg:pr-9'>{item.number}</h1>
                     <p className=' border-white font-bold' >{item.NumberDetail} </p>
                </div>
                   ))} 
             </div>
    </div>
  )
}
