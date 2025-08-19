import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'

const Layout = () => {
  return (
    <>
         <Header/>
      <main className="flex-1 overflow-y-auto pb-16 h-125">
         <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout
