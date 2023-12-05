import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Host = () => {
  return (
    <>
    <nav>
        <Link to={"/post"}>Dashboard</Link>
        <Link to={"/post/:id"}>post detail</Link>
        <Link to={"/post/income"}>Income</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Host