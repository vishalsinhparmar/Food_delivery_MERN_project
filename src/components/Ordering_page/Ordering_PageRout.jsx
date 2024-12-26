import NavabarApp from '../Layout/NavabarApp'
import Tandoori_Pizza from './Tandoori_Pizza'
import OrderingPageDetail from './OrderingPageDetail'
import RestaurantLocation from '../Restaurant/RestaurantLocation'
import CustomerReviews from '../Restaurant/CustomerReviews'
import SimiliarRestaurant from '../Restaurant/SimiliarRestaurant'
import Footer from '../Layout/Footer'
import InformationAbout from '../Restaurant/InformationAbout'
import { OrderProvider } from './context/MyContext'

export default function Ordering_PageRout() {
  return (
    <OrderProvider>
      
        <Tandoori_Pizza/>
         <OrderingPageDetail/>
         <InformationAbout/>
        <RestaurantLocation/>
        <CustomerReviews/>
        <SimiliarRestaurant/>
       
    </OrderProvider>
  )
}
