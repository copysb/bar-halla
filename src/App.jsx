import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Oops from './Components/Oops/Oops.jsx'
import RegForm from './Components/RegForm/RegForm.jsx'
import Login from './Components/Login/Login.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<RegForm/>}/>
        <Route path='/Error' element={<Oops/>}/>
      </Routes>
    </div>
  )
}

export default App