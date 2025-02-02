import React from 'react'
import './Profile.css'
import { FaUser, FaPlus, FaStar } from 'react-icons/fa'
import { GiInfo } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import Footer from '../Footer/Footer';

const Profile = () => {
  return (
    <div>
      <nav>
          <div className='left-side'>
              <ul>
                <li><FaUser/></li>
                <li>Profile</li>
              </ul>
              <ul className='tays'>
                <input placeholder='Type about yourself'></input>
              </ul>
            <div className='ProfButtons'>
              <ul>
                <a className='sacr Info' href='#'><GiInfo/> Info</a>
                <a className='sacr SupportUs' href='#'><FaStar/> Support Us!</a>
                <a className='sacr Settings' href='#'><CiSettings /> Settings</a>
                <a className='sacr SignOut' href='#'><PiSignOut /> Sign out</a>
                <a className='del Delete' href='#'>Delete account</a>
              </ul>
            </div>
          </div>

          <span className='right-side'>
              <div className='func-border1'></div>
              <div className='func-border2'>
                <li className='TL'>Turn lights?</li>
                <li>
                  <button><svg className='dark-theme' width="189" height="76" viewBox="0 0 189 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="186" height="73" rx="36.5" fill="#262626" stroke="#5A5A5A" stroke-width="3" />
                    <circle cx="148" cy="38" r="29" fill="#D9D9D9" />
                  </svg></button>
                </li>
              </div>
              <div className='func-border3'></div>
          </span>
      </nav>
      <div className='foot'><Footer/></div>
    </div>
  )
}

export default Profile