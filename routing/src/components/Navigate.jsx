import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Profile from './Profile'
import {Link } from 'react-router-dom'
function Navigate() {
  return (
    <>
     <Nav>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
     </Nav>
    </>
  )
}

export default Navigate