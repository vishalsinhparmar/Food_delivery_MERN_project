import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import SidebarImg from '../../assets/Order/OrderBottomImg.png'
import Plusimg from '../../assets/Offer_img/Plus (1).png'
import OrderSidebarApp from './OrderSidebarApp'
import PizzaDetailCard from './PizzaDetailCard'
import GarlicDetailcard from './PIzzaCardDetail/GarlicDetailcard';
import CalzoneDetailCard from './PIzzaCardDetail/CalzoneDetailCard';
import KebabasDetailCard from './PIzzaCardDetail/KebabasDetailCard';
import SaladDetailCard from './PIzzaCardDetail/SaladDetailCard';
import Cold_DrinksDetailCard from './PIzzaCardDetail/Cold_DrinksDetailCard';
import Happy_MealDetailCard from './PIzzaCardDetail/Happy_MealDetailCard';
import DessertsDetailCard from './PIzzaCardDetail/DessertsDetailCard';
import Hot_drinksDetailCard from './PIzzaCardDetail/Hot_drinksDetailCard';
import OrbitDetailCard from './PIzzaCardDetail/OrbitDetailCard';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import MyBasket from './MyBasket';
import { BiSolidFoodMenu } from 'react-icons/bi';

export default function OrderingPageDetail() {
  const [ValueforToggelMenu ,setMenuToggel]= useState(false);
  const [orderCopmonentValue,SetOrderComponentValue] =useState('Pizza');

  const HangelToggelMenu = () => {
     setMenuToggel(!ValueforToggelMenu)
  }
// for toglermenu menuItem
  const handelSetOrderComponentValue = (menuItem)=>{
        SetOrderComponentValue(menuItem)
        setMenuToggel(false)
  }
  // const HangelToggelMenu = () => {
  //   setMenuToggel(!ValueforToggelMenu);
  // }
// forsiderBarApp

  const CopmponentDetail = ()=>{
    switch(orderCopmonentValue){
      case 'Pizza':
      return <PizzaDetailCard/>;

      case 'Garlic':
      return <GarlicDetailcard/>;

      case 'Calzone':
      return <CalzoneDetailCard/>;

      case 'Kebabas':
      return <KebabasDetailCard/>;

      case 'Salads':
      return <SaladDetailCard/>;

      case 'Cold drinks':
      return <Cold_DrinksDetailCard/>;

      case 'Happy Meal':
      return <Happy_MealDetailCard/>;

      case 'Desserts':
      return <DessertsDetailCard/>;

      case 'Hot drinks':
      return <Hot_drinksDetailCard/>;
       
      case 'Sauces':
      return <SaladDetailCard/>;

      case 'Orbit':
      return <OrbitDetailCard/>;

      default:
      return <PizzaDetailCard/>
    }
  }
  return (
    <section className='container '>
        {/* main sec */}

          <section className='mt-16' >
          {/* 1 section- */}
              <div className='lg:flex lg:justify-between  items-center flex flex-col lg:flex-row justify-center container  w-full space-y-4 lg:space-y-0 mt-10'>
                    <div className=''>
                    <h1 className='font-bold lg:text-xl text-base'>Order from Tandoori Pizza London</h1>
                    </div>
                    <div className=''>
                        <div className='  relative'>
                          
                          <input type="text"  placeholder='Search from menu ...' className='p-2 rounded-full  placeholder:ml-10 w-60 border focus:outline-none pl-10 ' />
                          
                              <div className='absolute flex items-center justify-center  pointer-events-none inset-y-0'>
                                  <FaSearch className='pl-3   text-3xl '/>
                              </div>
                        </div>
                        </div>
                </div>

          </section> 

        
         <section className='grid lg:grid-cols-4 grid-cols-1 gap-4 flex-grow  my-10  '>
                {/* 2 section  */}
                
                <section className='lg:grid col-span-1 hidden '>
                    {/* sub-main-1-start-for-Sidebar */}
                        <OrderSidebarApp SetOrderComponentValue = {SetOrderComponentValue}
                         orderCopmonentValue={orderCopmonentValue} />
                    {/* sub-main-1-end-for-Sidebar */}
                </section>
              


                  <section className='col-span-2 relative overflow-scroll min-h-screen scrollbar-thin scrollbar-hide'>

                    {/* menu item for mobile display*/}

                    <div className='border rounded-lg bg-Mainccolor lg:hidden my-5'>
                         <ul className='cursor-pointer '>
                         <button onClick={HangelToggelMenu}>

                           <li className='my-5 flex items-center ps-10 '>
                              <h1 className='font-bold text-2xl flex items-center space-x-28' >
                                 <BiSolidFoodMenu className='mr-4 text-3xl'/>
                  
                                   Menu
                                <p className='font-normal text-sm flex items-center' >{orderCopmonentValue} 
                                   <BsArrowDownCircleFill className='ml-5 text-gray-300'/>
                                </p>
                                </h1>
                         </li>
                         </button>

                       </ul>
                {/* menu item for ToggelMenu in mobileScreeen-start */}
     
                       {ValueforToggelMenu && (
                           <div className='border rounded-lg bg-Mainccolor absolute z-50 w-full top-0'>
                             <ul className=''>
                               <li className='my-10 flex items-center ps-10'>
                                 <h1 className='font-bold text-2xl flex items-center' >
                                  <BiSolidFoodMenu className='mr-4 text-3xl'/>
                                      Menu                    
                                  </h1>
                               </li>
                <li className='my-10 font-bold'><button className={` text-white w-full ps-10 text-left py-2 ${orderCopmonentValue=='Pizza' ? 'bg-black text-white':''}`} onClick={()=>{handelSetOrderComponentValue("Pizza")}}>Pizzas</button></li>
                <li className='my-6 font-bold'><button className={` text-white w-full ps-10 text-left py-2 ${orderCopmonentValue=='Garlic' ? 'bg-black text-white':''}`}  onClick={()=>{handelSetOrderComponentValue('Garlic')}}>Garlic Bread</button></li>
                <li className='my-6 font-bold '><button className='hover:bg-slate-200 w-full ps-10 text-left py-2' onClick={()=>{handelSetOrderComponentValue('Calzone')}}>Calzone</button></li>
                <li className='my-6 font-bold '><button className='hover:bg-slate-200 w-full ps-10 text-left py-2' onClick={()=>{handelSetOrderComponentValue('Kebabas')}}>Kebabas</button></li>
                <li className='my-6 font-bold '><button className='hover:bg-slate-200 w-full ps-10 text-left py-2' onClick={()=>{handelSetOrderComponentValue('Salads')}}>Salads</button></li>
                <li className='my-6 font-bold '><button className='hover:bg-slate-200 w-full ps-10 text-left py-2' onClick={()=>{handelSetOrderComponentValue('Cold drinks')}}>Cold drinks</button></li>
                <li className='my-6 font-bold '><button className='hover:bg-slate-200 w-full ps-10 text-left py-2' onClick={()=>{handelSetOrderComponentValue('Happy Meal')}}>Happy Meal®</button></li>
                <li className='my-6 font-bold '><button className='hover:bg-slate-200 w-full ps-10 text-left py-2' onClick={()=>{handelSetOrderComponentValue('Desserts')}}>Desserts</button></li>
                <li className='my-6 font-bold '><button className='hover:bg-slate-200 w-full ps-10 text-left py-2' onClick={()=>{handelSetOrderComponentValue('Hot drinks')}}>Hot drinks</button></li>
                <li className='my-6 font-bold '><button className='hover:bg-slate-200 w-full ps-10 text-left py-2' onClick={()=>{handelSetOrderComponentValue('Sauces')}}>Sauces</button></li>
                <li className='my-6 font-bold '><button className='hover:bg-slate-200 w-full ps-10 text-left py-2' onClick={()=>{handelSetOrderComponentValue('Orbit')}}>Orbit®</button></li>
            </ul>

          </div> 
                    )}
                {/* menu item for ToggelMenu in mobileScreeen-End */}
          
            
                   </div>
                    {/* menu item for mobile display-end*/}





           {/* sub-main-2-start */}
                  <div className='lg:flex items-center lg:justify-between lg:py-4 lg:px-6  justify-around py-4 hidden  '>
                     <h1 className='text-2xl font-bold'>{orderCopmonentValue}</h1> 
                      <button className='lg:flex lg:items-center lg:justify-between  border rounded-full'>
                          <div className='flex items-center px-4 py-3' >
                            <p className='mr-4'>Sort by Pricing</p> 
                            <BsArrowDownCircleFill className=''/>
                          </div>
                     </button>
                  </div>
                  <div className='h-screen pt-30'>
                 
                      {CopmponentDetail()}
                      
                      {/* img for card for mobile-start*/}
                      <div className='lg:hidden py-5'>
                                 <div className='relative h-auto w-auto'>
                                    <img src={SidebarImg} className='z-10 relative h-full w-full  rounded-lg' />
                                          <div className='bg-gradient-to-r  from-black to-slate-600 absolute opacity-50 top-0 left-0 z-20 rounded-lg w-full h-full'>
                                  </div>
                                      <span className='p-2 rounded-b-xl bg-black text-white absolute top-0 left-4 z-30'>-20%</span>
                                        <p className='text-orange-400 absolute bottom-0 md:text-3xl md:top-40 top-20 sm:top-24 sm:text-2xl left-8 z-30'>Special Offer</p>
                                          <h1 className='font-bold text-lg text-green absolute md:text-5xl md:top-56 sm:top-36   top-28 sm:text-3xl left-8 text-white z-30'>First Order Discount</h1>
                                            <div className='bg-customgray flex items-center justify-center p-3 opacity-75 cursor-pointer rounded-tl-3xl absolute z-30 bottom-0 right-0 ' >
                                               <img src={Plusimg} alt="plus" />
                                            </div>
                                     </div>
                       </div>
                       </div>
                      {/* img for card for mobile-end */}

            {/* sub-main-2-end */}
                  </section>

                  <section className='lg:grid col-span-1 hidden'>
                    {/* sub-main-3-start */}
                      <MyBasket/>
                    {/* sub-main-3-end */}
                  </section>

                {/* 2 section-end  */}
         </section>

     </section>

  )
}
