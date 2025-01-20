import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Profile from './Profile'
import { NavLink,Nav,Link } from 'react-router-dom'
function Nav() {
  return (
    <>
     <Nav>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
        <NavLink to="/home" >Home</NavLink>
        <NavLink to="/contact" >Contact</NavLink>
        <NavLink to="/profile" >Profile</NavLink>
     </Nav>
    </>
  )
}

export default Nav