import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './App.scss';
import Layout from './Layout';
import { BrowserRouter as Router,Routes,Route, BrowserRouter, Navigate} from 'react-router-dom'
import RestaurantRout from './components/Restaurant/RestaurantRout';
import Ordering_PageRout from './components/Ordering_page/Ordering_PageRout';
import OrderingPageDetail from './components/Ordering_page/OrderingPageDetail';
import ErrorBoundary from './components/ErrorBoundary';
import AdminLayout from './components/adminDashboard/AdminLayout';
import UserSignIn from '../src/components/Auth/UserSignIn'
import Home from './components/Layout/Home';
import AuthRoute from './components/Auth/AuthRoute';
import SignIn from '../src/components/Auth/UserSignIn';
import SignUp from './components/Auth/UserSignUp';
import { ForgottePassword, VerifyUser } from './services/Api';
import NewPassword from './components/Auth/NewPassword';
import ForgotPassword from './components/Auth/ForgottePassword';
import VerifyuserBymail from './components/Auth/VerifyUser';
import OrderPage from './components/Ordering_page/cart/OrderPage';
import Userprofile from './components/Auth/Profile';
import Addresslayout from './components/Layout/profile/AddresPage';
import Order from './components/Layout/Order';
import Favourites from './components/Layout/profile/Favourites';
import OrderUk from './components/Layout/profile/OrderUK';
import OrderDetail from './components/Layout/profile/Orderdetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
    <ErrorBoundary>
    <Routes>
     <Route path='/' element={<Layout/>}>
        <Route index  element={<Home/>}/>
         <Route  path='/order' element={<Ordering_PageRout/>}/>
        <Route  path='/restaurant' element={<RestaurantRout/>}/>
       <Route  path='/order-detail' element={<OrderingPageDetail/>}/>
       <Route  path='/checkout' element={<OrderPage/>}/>
     
     {/* profille */}
       
     <Route path="/profile" element={<Userprofile/>}>
                    <Route path="address" element = {<Addresslayout/>} />
                    <Route path="Orders" element = {<OrderDetail/>} />
                    <Route path="Favourites" element = {<Favourites/>} />
                    <Route path="OrderUk" element = {<OrderUk/>} />
      </Route>
        
        
       <Route path='/auth' element={<AuthRoute/>}>
                
       
                <Route index  element={<SignIn/>}/>
                <Route path="SignUp" element={<SignUp/>}/>
                <Route path="ForgottePassword" element={<ForgotPassword/>}/>
                <Route path="NewPassword" element={<NewPassword/>}/>
                <Route path="NewPassword/:token" element={<NewPassword/>}/>
                <Route path="verifyemail/:token" element={<VerifyuserBymail/>}/>
                <Route path="verifyemail" element={<VerifyuserBymail/>}/>

            
  
   </Route>
     </Route>

     {/* for admin routing */}
    
    <Route path='/admin/*' element={<AdminLayout/>}  />
   

     </Routes>
     </ErrorBoundary>
     </Router>
  </React.StrictMode>,
)


