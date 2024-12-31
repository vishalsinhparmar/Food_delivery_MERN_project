import NavabarApp from './components/Layout/NavabarApp'
import Footer from './components/Layout/Footer'
import { Outlet } from 'react-router-dom'
import { OrderProvider } from './components/Ordering_page/context/MyContext'

export default function Layout() {
  return (
   <>
          <NavabarApp/>
          {/* <Hersection/>
          <Exclusicedeal/>
          <Categories/>
          <Restaurant/>
          <Order/>
          <AboutUs/> */}
          <OrderProvider>
            <Outlet/>
          </OrderProvider>
          <Footer/>
   </>
  )
}
