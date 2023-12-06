import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Host = () => {
  return (
    <>
    <nav>
        <Link to={"."}>Dashboard</Link>
        <Link to={":id"}>post detail</Link>
        <Link to={"income/:id"}>Income</Link>
        <Link to={".."} relative='path'>Back to home page</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Host