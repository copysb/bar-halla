import React from 'react'
import { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/MainPage/Hero/Hero.jsx'
import Lower from './Components/MainPage/Lower/Lower.jsx'
import RegForm from './Components/RegForm/RegForm.jsx'
import Oops from './Components/Oops/Oops.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import Login from './Components/Login/Login.jsx'
import Profile from './Components/Profile/Profile.jsx'
import MainPage from './Components/MainPage/MainPage.jsx'
import './App.css'

const App = () => {
  return (
    <div>
      <RegForm/>
    </div>
  )
}

export default App