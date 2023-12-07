import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const data = 3
  return (
    <header>
        <h1>Header</h1>
        <NavLink className={({isActive}) => {return (isActive ? "my-link": null)}} to='/post' state={data}>Newpost</NavLink>
    </header>
  )
}

export default Header