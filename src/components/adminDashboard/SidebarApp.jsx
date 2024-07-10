import React, { useState } from 'react'
import logo from '../../assets/png_logo/LOGO 1.png'
import { MdEdit, MdOutlineFastfood, MdOutlineHome } from 'react-icons/md'
import { VscListSelection } from 'react-icons/vsc'
import { BiDetail, BiEdit, BiEditAlt, BiSolidCategory } from 'react-icons/bi'
import { SiSimpleanalytics } from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import AddFoodCategory from './AddFoodCategory'
 
export default function SidebarApp({setselectCategory,setselectManaeCategory,setsubCategorySelect}) {
     const [selectButton,SetSelectbutton]=useState('Dashboard');
     const navigation = useNavigate();



     const handelSelectButton=(value)=>{
          SetSelectbutton(value);  
     }
     // for select libraraies


 

     const handelSelectValue = (options)=>{
          setselectCategory(options)
          navigation('/admin/Foods')
     }
     const handelManageSelectValue = (options)=>{
          setselectManaeCategory(options)
          navigation('/admin/MangeCategory')
     }

     const handelsubCategorySelect = (options)=>{
      setsubCategorySelect(options)
      navigation('/admin/Addsubcategory')
 }

     
     // for select library
     const options = [
          {id:1,value:'Pizza',label:'Pizza'},
          {id:2,value:'Burger',label:'Burger'},
          {id:3,value:'Salad',label:'Salad'},
          {id:4,value:'Garlic_Bread',label:'Garlic_Bread'},
          {id:5,value:'Calzone',label:'Calzone'},
          {id:6,value:'Cold_drinks',label:'Cold_drinks'},
          {id:7,value:'Happy_Meal',label:'Happy_Meal'},
          {id:8,value:'Hot_drinks',label:'Hot_drinks'},
          {id:9,value:'Sauces',label:'Sauces'},
          {id:10,value:'Orbit',label:'Orbit'},
          {id:11,value:'Kebabas',label:'Kebabas'},
          {id:12,value:'Dessert',label:'Dessert'},
          {id:13,value:'Fries',label:'Fries'}
    
     ]

     const subCategoryoptions = [
      {id:1,value:'SubCategoryName',label:'SubCategory'},
     
      
     
     

 ]

  return (
     <div className='fixed scrollbar-thin scrollbar-hide '>
      <aside className='h-screen overflow-y-auto relative z-10'>
          {/* <div></div> */}
           <div className='flex w-full flex-col items-center justify-center '>
                <div className='py-10 w-40'>
                       <img src={logo} alt='adminLogo'/>
                </div>

                <ul className='flex flex-col mx-auto'>
                   <li className={`flex items-baseline my-2 py-2 px-5 ${selectButton=="Dashboard"? 'bg-green-100 rounded-full   text-green-700':''}`}><button className='flex items-center'onClick={()=>{handelSelectButton('Dashboard')}}><Link to='dashboard'><MdOutlineHome className='inline-flex mr-4 text-2xl'/><span>Dashboard</span></Link></button></li>
                   <li className={`flex items-baseline my-2 py-2 px-5 ${selectButton=="Order List"? 'bg-green-100 rounded-full   text-green-700':''}`}><button className='flex items-center' onClick={()=>{handelSelectButton('Order List')}}><Link to='order-list'><VscListSelection className='inline-flex mr-4 text-2xl'/><span>Order List</span></Link></button></li> 
                   <li className={`flex items-baseline my-2 py-2 px-5 ${selectButton=="Order Detail"? 'bg-green-100 rounded-full   text-green-700':''}`}><button className='flex items-center' onClick={()=>{handelSelectButton('Order Detail')}}><Link to='Product-detail'><BiDetail className='inline-flex mr-4 text-2xl'/><span>Order Detail</span></Link></button></li> 
                   <li className={`flex items-baseline my-2 py-2 px-5 ${selectButton=="Analytics"? 'bg-green-100 rounded-full   text-green-700':''}`}> <button className='flex items-center' onClick={()=>{handelSelectButton('Analytics')}}><Link to='Analytics'><SiSimpleanalytics className='inline-flex mr-4 text-2xl'/><span>Analytics</span></Link></button></li> 
                   <li className={`flex items-baseline my-2 py-2 px-5 ${selectButton=="Reviews"? 'bg-green-100 rounded-full   text-green-700':''}`}><button className='flex items-center' onClick={()=>{handelSelectButton('Reviews')}}><Link to='Reviews'><BiEditAlt className='inline-flex mr-4 text-2xl'/><span>Reviews</span></Link></button></li>
                   <li className={`flex items-baseline my-2 py-2 px-5 ${selectButton=="Foods"? 'bg-green-100 rounded-full   text-green-700':''}`}><button className='flex items-center' onClick={()=>{handelSelectButton('Foods')}}><Link to='Foods'><MdOutlineFastfood className='inline-flex mr-4 text-2xl'/><span>Foods</span></Link></button></li> 
                  
     <div className='w-full '>    
           <li className='flex items-center my-2 py-2 justify-center'>
           <BiEdit  className='inline-flex mr-1 text-2xl'/>
             <Select 
                onChange={handelSelectValue}
                
                options={options} 
                placeholder='Add food category'
                
                menuPlacement='auto' 
                className=' w-56  top-0'
                styles={{
                    menu: (provided) => ({
                      ...provided,
                      zIndex: 20,
                      position: 'relative',
                      font:600
                    }),
                    control: (provided) => ({
                      ...provided,
                      zIndex: 10,
                    })
                  }}
                >
             </Select>
          </li>
    </div>
    {/* <li className={`flex items-baseline  px-5 ${selectButton=="MangeCategory"? 'bg-green-100 rounded-full   text-green-700':''}`}><button className='flex items-center' onClick={()=>{handelSelectButton('MangeCategory')}}><Link to='MangeCategory'><BiSolidCategory className='inline-flex mr-4 text-2xl'/><span>MangeCategory</span></Link></button></li>  */}

    <div className='w-full '>    
           <li className='flex items-center my-2 py-2 justify-center'>
           <BiSolidCategory  className='inline-flex mr-1 text-2xl'/>
             <Select 
                onChange={handelManageSelectValue}
                
                options={options} 
                placeholder='Manage category'
                
                menuPlacement='auto' 
                className=' w-56  top-0'
                styles={{
                    menu: (provided) => ({
                      ...provided,
                      zIndex: 20,
                      position: 'relative',
                      font:600
                    }),
                    control: (provided) => ({
                      ...provided,
                      zIndex: 10,
                    })
                  }}
                >
             </Select>
          </li>
    </div>
      
    <div className='w-full '>    
           <li className='flex items-center my-2 py-2 justify-center'>
           <BiSolidCategory  className='inline-flex mr-1 text-2xl'/>
             <Select 
                onChange={handelsubCategorySelect}
                
                options={subCategoryoptions} 
                placeholder='Addsubcategory'
                
                menuPlacement='auto' 
                className=' w-56  top-0'
                styles={{
                    menu: (provided) => ({
                      ...provided,
                      zIndex: 20,
                      position: 'relative',
                      font:600
                    }),
                    control: (provided) => ({
                      ...provided,
                      zIndex: 10,
                    })
                  }}
                >
             </Select>
          </li>
    </div>
      
                </ul>

                <div className='py-10'>
                    <h1 className=' font-semibold text-sm'>Order Admin Dashboard</h1>
                    <p className=' opacity-55 text-xs'>&#169; 2020 All Rights Reserved </p>
                </div>

           </div>
      </aside>
  

      </div>
  )
}
