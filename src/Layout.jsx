import NavabarApp from './components/Layout/NavabarApp'
import Footer from './components/Layout/Footer'
import { Outlet } from 'react-router-dom'
import { OrderProvider } from './components/Ordering_page/context/MyContext'
import { ProductContextProvider } from './components/Restaurant/Context/ProductContext'
import AdminLayout from './components/adminDashboard/AdminLayout'
import { AuthContextProvider } from './components/Auth/AuthContext/Authcontex'

export default function Layout() {
  return (
   <>
   <AuthContextProvider>
          <NavabarApp/>
         
          <OrderProvider>

            
            
                        <Outlet/>
             
          </OrderProvider>
          <Footer/>
          </AuthContextProvider>
   </>
  )
}
