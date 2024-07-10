import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './App.scss';
import Layout from './Layout';
import { BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import RestaurantRout from './components/Restaurant/RestaurantRout';
import Ordering_PageRout from './components/Ordering_page/Ordering_PageRout';
import OrderingPageDetail from './components/Ordering_page/OrderingPageDetail';
import ErrorBoundary from './components/ErrorBoundary';
import MealDeals from './components/Restaurant/MealDeals';
import Instructions from './components/Ordering_page/Instructions';
import AdminLayout from './components/adminDashboard/AdminLayout';
import AdminOrderDetail from './components/adminDashboard/AdminOrderDetail';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
    <ErrorBoundary>
    <Routes>
     <Route index path='/' element={<Layout/>}/>
     <Route  path='/restaurant' element={<RestaurantRout/>}/>
     <Route  path='/order' element={<Ordering_PageRout/>}/>
     <Route  path='/order-detail' element={<OrderingPageDetail/>}/>

     {/* for admin routing */}
    
    <Route path='/admin/*' element={<AdminLayout/>}  />
   

     </Routes>
     </ErrorBoundary>
     </Router>
  </React.StrictMode>,
)


