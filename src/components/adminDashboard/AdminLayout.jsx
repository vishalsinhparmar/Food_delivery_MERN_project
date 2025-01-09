import { useState } from 'react'
import SidebarApp from './SidebarApp'

import Dashboard from './Dashboard'
import NavbarAdmin from './NavbarAdmin'
import OrderList from './OrderList'
import AdminAnalytics from './AdminAnalytics'
import AdminCustomerReview from './AdminCustomerReview'
import AdminOrderDetail from './AdminOrderDetail'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import Signin from './Adminauth/AdminSignIn'
import { MyProvider } from './contextprovider/Mycontext'
import Managefoodcategory from './mangeCategory/AdminMangeCategory'
import AddFoodCategory from './AddCategory/AddFoodCategory'
import AdminSignin from './Adminauth/AdminSignIn'
import ArchivedOrder from './AdminOrderDetail'




export default function AdminLayout() {
   const [adminData, setAdmindata] = useState(null)
   console.log('sigIn data', adminData)
   console.log('admindata is you can see this', adminData)

   return (

      <MyProvider>
         <section>
            <div className='grid grid-cols-10 scrollbar-hide'>

               {/* for sidebar admin-start */}

               <div className=' col-span-2 h-screen '>

                  {/* <SidebarApp selectedButtonvalue={selectedButtonvalue}/> */}
                  <SidebarApp/>



               </div>

               {/* for sidebar admin-end */}

               {/* according to sidebar to render their components with navbar-start */}

               <div className=' min-h-screen col-span-8 bg-slate-100 p-10'>
                  {/* navbar */}
                  <NavbarAdmin adminData={adminData} />
                  {/* navbar-end */}

                  {/* {adminComponetsDetail()} */}
                  <Routes>

                     <Route path="/" element={<Dashboard />} />
                     <Route path='/dashboard' element={<Dashboard />} />
                     <Route path="/order-list" element={<OrderList />} />
                     <Route path="/Product-detail/:id" element={<ArchivedOrder />} />
                     <Route path="/Analytics" element={<AdminAnalytics />} />
                     <Route path="/Reviews" element={<AdminCustomerReview />} />
                     <Route path="/Foods" element={<AddFoodCategory/>} />

                     <Route path="/Foods/:id" element={<AddFoodCategory  />} />
                     <Route path="/sigIn" element={<AdminSignin setAdmindata={setAdmindata} />} />
                     <Route path='/Managefoodcategory' element={<Managefoodcategory/>}/>



                    
                  </Routes>


               </div>



               {/* according to sidebar to render their components with navbar-end */}


            </div>
         </section>
       </MyProvider>
   )
}

