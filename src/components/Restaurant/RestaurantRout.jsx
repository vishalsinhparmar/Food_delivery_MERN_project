import React from 'react'
import NavabarApp from '../Layout/NavabarApp'
import Mackdonald from './Mackdonald'
import Offers from './Offers'
import ProductListItem from './ProductListItem'
import InformationAbout from './InformationAbout'
import RestaurantLocation from './RestaurantLocation'
import CustomerReviews from './CustomerReviews'
// import Restaurant from './Restaurant'
import SimiliarRestaurant from './SimiliarRestaurant'
import Footer from '../Layout/Footer'

export default function RestaurantRout() {
  return (
    <div className=''>
      <div className='flex flex-col'>
          
          <Mackdonald/>
          <Offers/>
          <ProductListItem/>
          <InformationAbout/>
          <RestaurantLocation/>
          <CustomerReviews/>
          <SimiliarRestaurant/>
         
          
          
      </div>
    </div>
  )
}

