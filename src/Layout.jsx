import NavabarApp from './components/Layout/NavabarApp'
import Footer from './components/Layout/Footer'
import { Outlet } from 'react-router-dom'
import { OrderProvider } from './components/Ordering_page/context/MyContext'
import { ProductContextProvider } from './components/Restaurant/Context/ProductContext'

export default function Layout() {
  return (
   <>
          <NavabarApp/>
   
          <OrderProvider>
            
             <div>Testing Outlet Rendering</div>
            <Outlet/>
             
          </OrderProvider>
          <Footer/>
   </>
  )
}
