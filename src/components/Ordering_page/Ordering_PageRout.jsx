import React from 'react'
import NavabarApp from '../NavabarApp'
import Mackdonald from '../Restaurant/Mackdonald'
import Tandoori_Pizza from './Tandoori_Pizza'
import OrderingPageDetail from './OrderingPageDetail'
import RestaurantLocation from '../Restaurant/RestaurantLocation'
import CustomerReviews from '../Restaurant/CustomerReviews'
import SimiliarRestaurant from '../Restaurant/SimiliarRestaurant'
import Footer from '../Footer'
import InformationAbout from '../Restaurant/InformationAbout'

export default function Ordering_PageRout() {
  return (
    <div>
        <NavabarApp/>
        <Tandoori_Pizza/>
        <OrderingPageDetail/>
         <InformationAbout/>
        <RestaurantLocation/>
        <CustomerReviews/>
        <SimiliarRestaurant/>
        <Footer/>
    </div>
  )
}
