import React from 'react'
import './Footer.css'
import logo from '../Assets/Bar-Halla-logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='Contacts'>
        <li>Contact us!</li>
        <li className='crosscont'></li>
        <li>teamsisistick@gmail.com</li>
        <li>8(800) 555-35-35</li>
      </ul>
        <img src={logo} alt=' ' className='logofoot'/>
      <ul className='Contacts'>
        <li className='crosscont'></li>
        <li className='quote'>© Bar-Halla</li>
      </ul>
    </div>
  )
}

export default Footer