import React, { useState } from 'react'
import SidebarApp from './SidebarApp'

import Dashboard from './Dashboard'
import NavbarAdmin from './NavbarAdmin'
import OrderList from './OrderList'
import OrderDetail from './AdminOrderDetail'
import AdminAnalytics from './AdminAnalytics'
import AdminCustomerReview from './AdminCustomerReview'
import AdminFoods from './AdminFoods'
import AdminOrderDetail from './AdminOrderDetail'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import AddFoodCategory from './AddFoodCategory'
import AdminMangeCategory from './AdminMangeCategory'
import AddSubcategory from './AddSubcategory'
import AdminAddSubCategory from './AdminAddSubCategory'

export default function AdminLayout() {

   const [selectCategory,setselectCategory]=useState(null);

   const [selecMangetCategory,setselectManaeCategory]=useState(null);

    const [subCategory,setsubCategorySelect]=useState(null);

   // const adminComponetsDetail = ()=>{
   //    switch(AdminComponetsvalue){
   //       case 'Dashboard':
   //       return <Dashboard/>
          

   //       case 'Order List':
   //       return <OrderList/>

   //       case 'Order Detail':
   //       return <AdminOrderDetail/>

   //       case 'Analytics':
   //       return <AdminAnalytics/>

   //       case 'Reviews':
   //       return <AdminCustomerReview/>

   //       case 'Foods':
   //       return <AdminFoods/>

   //        default:
   //       return <Dashboard/>


   //    }
   // }

   
  return (


    <section>
       <div className='grid grid-cols-10 scrollbar-hide'>
    
      {/* for sidebar admin-start */}

         <div className=' col-span-2 h-screen '>
         
         {/* <SidebarApp selectedButtonvalue={selectedButtonvalue}/> */}
         <SidebarApp setselectCategory={setselectCategory} setselectManaeCategory={setselectManaeCategory} setsubCategorySelect={setsubCategorySelect} />
         
    
             
         </div>
       
      {/* for sidebar admin-end */}
      
      {/* according to sidebar to render their components with navbar-start */}

         <div className=' min-h-screen col-span-8 bg-slate-100 p-10'>
              {/* navbar */}
                 <NavbarAdmin/>
              {/* navbar-end */}

             {/* {adminComponetsDetail()} */}
              <Routes>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path="/order-list" element={<OrderList />} />
                <Route path="/Product-detail" element={<AdminOrderDetail />} />
                <Route path='/Product-detail/:orderId' element={<AdminOrderDetail />} />
                <Route path="/Analytics" element={<AdminAnalytics/>} />
                <Route path="/Reviews" element={<AdminCustomerReview />} />
                <Route path="/Foods" element={<AddFoodCategory selectvalue={selectCategory}/>} />
                <Route path="/Foods/:id" element={<AddFoodCategory selectvalue={selectCategory} selectCategory={selecMangetCategory}/>} />

                <Route path="/MangeCategory" element={<AdminMangeCategory selectCategory={selecMangetCategory}/>} />

                {selectCategory && <Route path="/Foods/:id" element={<AddFoodCategory selectvalue={selectCategory}/>} />}
                {selecMangetCategory && <Route path="/MangeCategory" element={<AdminMangeCategory selectCategory={selecMangetCategory}/>} />}

                {subCategory && <Route path='/Addsubcategory' element={<AdminAddSubCategory/>} />}
       
                <Route path="/" element={<Dashboard/>} />
                
                
              </Routes>


         </div>
  
   
      
      {/* according to sidebar to render their components with navbar-end */}

    
      </div> 
   </section>

  )
}

