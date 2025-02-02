import React from 'react'
import './Navbar.css'
import logo from 'D:/Владелец/Desktop/WWW BAR-HALLA/bar-halla-1/src/Assets/Bar-Halla-logo.png'
import coin from 'D:/Владелец/Desktop/WWW BAR-HALLA/bar-halla-1/src/Assets/stick-coin.png'
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li className='prof'><FaUser /><a>Profile</a></li>
            <li className='coins'><a href=''><img src={coin} alt='' className='sc'/></a></li>
            </ul>
        <a><img src={logo} alt=' ' className='logonav'/></a>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>FAQ</a></li>
            <li><a href='#'>About Us</a></li>

        </ul>
    </nav>
  )
}

export default Navbar