import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Header</h1>
        <NavLink className={({isActive}) => {return (isActive ? "my-link": null)}} to='/post'>Newpost</NavLink>
    </header>
  )
}

export default Header