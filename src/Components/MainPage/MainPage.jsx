import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import Menugrad from './Menugrad/Menugrad.jsx'
import Lower from './Lower/Lower.jsx'
import Footer from '../Footer/Footer.jsx'
import './MainPage.css'

const MainPage = () => {
  return (
    <div className='mainpage'>
        <Navbar />
        <Hero />
        <Menugrad/>
        <Lower />
        <Footer/>
    </div>
  )
}

export default MainPage