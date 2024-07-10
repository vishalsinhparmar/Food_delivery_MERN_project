import React from 'react'
import Categories1 from '../assets/Categories/Rectangle 13.png'
import Categories2 from '../assets/Categories/Rectangle 15.png'
import Categories3 from '../assets/Categories/Rectangle 17.png'
import Categories4 from '../assets/Categories/Rectangle 19.png'
import Categories5 from '../assets/Categories/Rectangle 21.png'
import Categories6 from '../assets/Categories/Rectangle 23.png'


export default function Categories() {
    const Categories = [
        { 
            id:1,
            img:Categories1,
            Categorie:'Burgers & Fast food',
            Restaurant:'21 Restaurants'
        },
     
        {   
            id:2,
            img:Categories2,
            Categorie:'Salads',
            Restaurant:'32 Restaurants'
        },
        {
            id:3,
            img:Categories3,
            Categorie:'Pasta & Casuals',
            Restaurant:'4 Restaurants'
        },
        {
            id:4,
            img:Categories4,
            Categorie:'Pizza',
            Restaurant:'32 Restaurants'
        },
        {  
            id:5,
            img:Categories5,
            Categorie:'Breakfast',
            Restaurant:'4 Restaurants'
        },
        {
            id:6,
            img:Categories6,
            Categorie:'Soups',
            Restaurant:'32 Restaurants'
        },
        

    ]
  return (
      <div className='mt-10 container MainSec'>
         <h1 className='my-8 font-bold text-xl'>Order.uk Popular Categories 🤩</h1>
         <div className='grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7 xl:grid-cols-6 '>
  {Categories.map((item)=>(
         <div className='border rounded-xl bg-Categories' key={item.id}>
            <img src={item.img} className='w-full object-cover'/>
             <h1 className='font-semibold p-1 ps-3'>{item.Categorie}</h1>
             <p className='ps-3 pb-2 text-orange-400'>{item.Restaurant}</p>
         </div>
         ))}
         </div>
      </div>
  )
}
