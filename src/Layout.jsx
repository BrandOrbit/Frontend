import React from 'react'
import Home from './components/Home/Home.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'

const Layout = () => {
  return (
    <>
         <Home/>
         <Outlet/>
         <Footer/>
    </>
  )
}

export default Layout
