import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

const Layout = () => {
  return (
    <> 
        <Header />
        <Nav />
        <Outlet/>
        <Footer />
    </>
  )
}

export default Layout