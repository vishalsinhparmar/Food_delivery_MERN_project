import NavabarApp from '../Layout/NavabarApp'
import Tandoori_Pizza from './Tandoori_Pizza'
import OrderingPageDetail from './OrderingPageDetail'
import RestaurantLocation from '../Restaurant/RestaurantLocation'
import CustomerReviews from '../Restaurant/CustomerReviews'
import SimiliarRestaurant from '../Restaurant/SimiliarRestaurant'
import InformationAbout from '../Restaurant/InformationAbout'

export default function Ordering_PageRout() {
  return (
    <>
      
        <Tandoori_Pizza/>
         <OrderingPageDetail/>
         <InformationAbout/>
        <RestaurantLocation/>
        <CustomerReviews/>
        <SimiliarRestaurant/>
       
        </>
  )
}
