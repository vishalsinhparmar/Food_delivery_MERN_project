import React from 'react'
import NavabarApp from './components/NavabarApp'
import Hersection from './components/Hersection'
import Exclusicedeal from './components/Exclusicedeal'
import Categories from './components/Categories'
import Restaurant from './components/Restaurant'
import Order from './components/Order'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

export default function Layout() {
  return (
   <>
          <NavabarApp/>
          <Hersection/>
          <Exclusicedeal/>
          <Categories/>
          <Restaurant/>
          <Order/>
          <AboutUs/>
          <Footer/>
   </>
  )
}
