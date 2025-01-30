import React from 'react'
import './Navbar.css'
import logo from 'D:/Владелец/Desktop/WWW BAR-HALLA/bar-halla-1/src/Assets/Bar-Halla-logo.png'
import coin from 'D:/Владелец/Desktop/WWW BAR-HALLA/bar-halla-1/src/Assets/stick-coin.png'
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li className='prof'><FaUser />Profile</li>
            <li className='coins'><a><img src={coin} alt='' className='sc'/></a></li>
            </ul>
        <img src={logo} alt=' ' className='logo'/>
        <ul>
            <li>Home</li>
            <li>FAQ</li>
            <li>About Us</li>

        </ul>
    </nav>
  )
}

export default Navbar