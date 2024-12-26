import React from 'react'
import NavabarApp from './components/Layout/NavabarApp'
import Hersection from './components/Layout/Hersection'
import Exclusicedeal from './components/Layout/Exclusicedeal'
import Categories from './components/Layout/Categories'
import Restaurant from './components/Layout/Restaurant'
import Order from './components/Layout/Order'
import AboutUs from './components/Layout/AboutUs'
import Footer from './components/Layout/Footer'
import { Outlet } from 'react-router-dom'

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
            <Outlet/>
          <Footer/>
   </>
  )
}
