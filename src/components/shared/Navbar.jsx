import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/navbar.css'
import {FaBars} from 'react-icons/fa'
import logo from '../../assets/logo/logo2.png'

const Header = () => {
  return (
    <nav className="nav">

    <a href="#" className="nav-logo">
      <img src={logo} alt="" />
    </a>

    <label htmlFor="menu" className="nav-label">
        <FaBars className="nav-menu"/>
    </label>
    <input type="checkbox" id="menu" className="nav-input"/>

    <ul className="nav-links">
      <li><NavLink to="/">HOME</NavLink></li>
      <li><NavLink to="">ABOUT ME</NavLink></li>
      <li><NavLink to="">PORTFOLIO</NavLink></li>
      <li><NavLink to="">CONTACT</NavLink></li>
    </ul>
  </nav>
  )
}

export default Header