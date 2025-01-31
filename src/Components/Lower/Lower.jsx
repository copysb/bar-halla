import React from 'react'
import Menu from 'D:/Владелец/Desktop/WWW BAR-HALLA/bar-halla-1/src/Components/Buttons/Menu.jsx'
import Swipe from 'D:/Владелец/Desktop/WWW BAR-HALLA/bar-halla-1/src/Components/Buttons/Swipe.jsx'
import Favourites from 'D:/Владелец/Desktop/WWW BAR-HALLA/bar-halla-1/src/Components/Buttons/Favourites.jsx'
import OwnDrink from 'D:/Владелец/Desktop/WWW BAR-HALLA/bar-halla-1/src/Components/Buttons/OwnDrink.jsx'
import './Lower.css'
const Lower = () => {
  return (
    <div className='lower'>
      <a href='#'><Menu/></a>
      <a href='#'><Swipe/></a>
      <a href='#'><Favourites/></a>
      <a href='#'><OwnDrink/></a>
      <div>Number of guests</div>
    </div>
  )
}

export default Lower