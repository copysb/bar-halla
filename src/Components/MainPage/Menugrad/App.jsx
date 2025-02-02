import React from 'react'
import Navbar from '../../Navbar/Navbar.jsx'
import Hero from '../Hero/Hero.jsx'
import Lower from '../Lower/Lower.jsx'
import Footer from '../../Footer/Footer.jsx'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='Menuline'></div>
      <div className='endgrad'></div>
      <Lower />
      <Footer />
    </div>
  )
}

export default App