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
        <a href='/Error'><Menu/></a>
        <a href='/Error'><Swipe/></a>
        <a href='/Error'><Favourites/></a>
        <a href='/Error'><OwnDrink/></a>
      </div>

    </div>
  )
}

export default Lower