import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Incomelayout = () => {
  return (
    <>
        <h6>income id</h6>
        <Link to='boss'>imcome detal</Link>
        <Outlet />
    </>
  )
}

export default Incomelayout