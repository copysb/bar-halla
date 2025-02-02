import React from 'react'
import Menu from '../Buttons/Menu.jsx'
import Swipe from '../Buttons/Swipe.jsx'
import Favourites from '../Buttons/Favourites.jsx'
import OwnDrink from '../Buttons/OwnDrink.jsx'
import Oops from '../../Oops/Oops.jsx'
import './Lower.css'
import { Routes, Route } from 'react-router-dom'

const Lower = () => {
  return (
    <div>
      <div className='lower'>
        <a href='*'><Menu/></a>
        <a href='*'><Swipe/></a>
        <a href='*'><Favourites/></a>
        <a href='*'><OwnDrink/></a>
      </div>

    </div>
  )
}

export default Lower