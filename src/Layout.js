import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import { useSearchParams } from 'react-router-dom'

const Layout = () => {

  const [searchParams, setSearchparams] = useSearchParams()
  return (
    <> 
        <Header />
        <Nav />
        <Outlet/>
        {console.log(searchParams.get('type'))}
        <Footer />
    </>
  )
}

export default Layout