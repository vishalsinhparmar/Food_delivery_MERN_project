import React, { useContext, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import SidebarImg from '@assets/Order/OrderBottomImg.png'
import Plusimg from '@assets/Offer_img/Plus_(1).png'

import { BsArrowDownCircleFill } from 'react-icons/bs';
import MyBasket from './cart/MyBasket';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { OrderContext } from './context/MyContext'
import OrderSidebarApp from './OrderSidebarApp';
import PizzaDetailCard from './PizzaDetailCard';

export default function OrderingPageDetail() {
  const [ValueforToggelMenu, setMenuToggel] = useState(false);
  const { orderCopmonentValue} = useContext(OrderContext)
  const HangelToggelMenu = () => {
    setMenuToggel(!ValueforToggelMenu)
  }

  return (
    <section className='container mx-auto px-4'>
      {/* Main section */}
      <section className='mt-16'>
        {/* 1st Section: Title and Search */}
        <div className='flex flex-col lg:flex-row justify-between items-center lg:space-x-4 space-y-4 lg:space-y-0'>
          <h1 className='font-bold text-xl lg:text-2xl'>Order from Tandoori Pizza London</h1>
          <div className='relative'>
            <input 
              type="text" 
              placeholder='Search from menu ...' 
              className='p-2 rounded-full placeholder:ml-10 w-60 border focus:outline-none pl-10' 
            />
            <div className='absolute flex items-center justify-center inset-y-0 left-0 pl-3'>
              <FaSearch className='text-2xl' />
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Section: Content Grid */}
      <section className='grid lg:grid-cols-4 grid-cols-1 gap-4 my-10'>
        {/* Sidebar */}
        <section className={`lg:flex hidden ${ValueforToggelMenu ? 'block' : 'hidden'}`}>
          <OrderSidebarApp />
        </section>

        {/* Main content for pizza detail */}
        <section className='col-span-2 relative overflow-auto min-h-screen'>
          {/* Mobile Menu Button */}
          <div className='lg:hidden my-5'>
            <button onClick={HangelToggelMenu} className='flex items-center justify-between w-full bg-Mainccolor p-3 rounded-lg'>
              <h1 className='font-bold text-xl flex items-center'>
                <BiSolidFoodMenu className='mr-4 text-2xl' />
                Menu
                <span className='ml-4 text-sm inline-flex'>
                  {orderCopmonentValue?.name ?  HangelToggelMenu : "" }
                  <BsArrowDownCircleFill className='ml-2 text-gray-300' />
                </span>
              </h1>
            </button>

            {ValueforToggelMenu && <OrderSidebarApp />}
          </div>

          {/* Category Name and Sort Button (Desktop) */}
          <div className='hidden lg:flex items-center justify-between py-4 px-6'>
            <h1 className='text-2xl font-bold'>{orderCopmonentValue.name}</h1>
            <button className='border rounded-full flex items-center px-4 py-3'>
              <p className='mr-4'>Sort by Pricing</p>
              <BsArrowDownCircleFill />
            </button>
          </div>

          {/* Pizza Detail Card */}
          <PizzaDetailCard />

          {/* Mobile Card with Special Offer */}
          <div className='lg:hidden py-5'>
            <div className='relative w-full h-auto'>
              <img src={SidebarImg} className='h-full w-full rounded-lg z-10' />
              <div className='bg-gradient-to-r from-black to-slate-600 absolute inset-0 opacity-50 rounded-lg'></div>
              <span className='p-2 rounded-b-xl bg-black text-white absolute top-0 left-4 z-30'>-20%</span>
              <p className='text-orange-400 absolute left-8 bottom-0 sm:text-xl md:text-2xl z-30'>Special Offer</p>
              <h1 className='font-bold text-lg text-green absolute sm:top-36 sm:text-xl left-8 top-28 text-white z-30'>
                First Order Discount
              </h1>
              <div className='bg-customgray flex items-center justify-center p-3 opacity-75 cursor-pointer rounded-tl-3xl absolute bottom-0 right-0'>
                <img src={Plusimg} alt="plus" />
              </div>
            </div>
          </div>
        </section>

        {/* My Basket Sidebar */}
        <section className='lg:block'>
          <MyBasket />
        </section>
      </section>
    </section>
  )
}
