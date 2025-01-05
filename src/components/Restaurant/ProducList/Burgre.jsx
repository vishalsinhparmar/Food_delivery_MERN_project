import Plusimg from '@assets/Offer_img/Plus_(1).png'
import { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../../Ordering_page/context/MyContext';

const BurgerItem = () => {
     const {category,SetOrderComponentValue,orderCopmonentValue,categoryData} = useContext(OrderContext);
     console.log("category from the burgerItem",category);
     const Burger =  category.find(item => item.Categoryname === "Burgers");
    //  console.log("Burger item",Burger)
     const burgerItem = Burger;
     console.log("burgerITem",burgerItem)
      useEffect(()=>{
        SetOrderComponentValue({
            name:burgerItem.Categoryname,
            id:burgerItem._id,
        })
      },[])
   
    return (

           <div className='grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 grid-flow-row gap-6' >
                        {categoryData && categoryData?.map((item)=>(
                           <div className='grid grid-cols-2 gap-2 bg-PRodecDetailcolor shadow-xl border p-4 rounded-md' key={item._id} >
                                <div className='py-4 text-xs' >
                                   <h1 className='font-bold text-sm' >{item.categoryItemName}</h1>
                                     <p className='text-xs py-5'>{item.description}</p>
                                      <p className='felx text-xl font-medium'>Pricing<span className='font-bold ml-3 text-sm' >&#8377;{item.Small_pricing}</span></p>
                                </div>
       
                                 <div className='relative cursor-pointer' >
                                      <img src={item.image} className='relativev w-full h-full object-cover'/>
                                        <button><div className='bg-customgray flex items-center justify-center p-3 opacity-85 cursor-pointer rounded-tl-3xl absolute z-30 bottom-0 right-0 ' >
                                          <img src={Plusimg} alt="plus" />
                                        </div> 
                                        </button>
                                 </div>
                          </div>
                          ))}
                    </div>

    )
};

export default BurgerItem