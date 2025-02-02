import React from 'react'
import Menu from '../Buttons/Menu.jsx'
import Swipe from '../Buttons/Swipe.jsx'
import Favourites from '../Buttons/Favourites.jsx'
import OwnDrink from '../Buttons/OwnDrink.jsx'
import './Lower.css'
const Lower = () => {
  return (
    <div>
      <div className='lower'>
        <a href='#'><Menu/></a>
        <a href='#'><Swipe/></a>
        <a href='#'><Favourites/></a>
        <a href='#'><OwnDrink/></a>
      </div>
      <div className='guests'>
        <ul>Amount of guests</ul>
      </div>
    </div>
  )
}

export default Lower