import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Lower from './Components/Lower/Lower.jsx'
import Footer from './Components/Footer/Footer.jsx'
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