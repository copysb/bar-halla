import React from 'react'
import './Navbar.css'
import logo from '../Assets/Bar-Halla-logo.png'
import coin from '../Assets/stick-coin.png'
import { FaUser } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li className='prof'><a href='/profile'><FaUser /> Profile</a></li>
            <li className='coins'><a href='/Error'><img src={coin} alt='' className='sc'/></a></li>
            </ul>
        <a href='/main'><img src={logo} alt=' ' className='logonav'/></a>
        <ul>
            <li><a href='/main'>Home</a></li>
            <li><a href='/Error'>FAQ</a></li>
            <li><a href='/Error'>About Us</a></li>

        </ul>
    </nav>
  )
}

export default Navbar