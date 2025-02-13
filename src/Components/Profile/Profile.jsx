import React from 'react'
import './Profile.css'
import { FaUser, FaStar } from 'react-icons/fa'
import { GiInfo } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";

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
                <a className='sacr Info' href='/Error'><GiInfo/> Info</a>
                <a className='sacr SupportUs' href='/Error'><FaStar/> Support Us!</a>
                <a className='sacr Settings' href='/Error'><CiSettings /> Settings</a>
                <a className='sacr SignOut' href='/registration'><PiSignOut /> Sign out</a>
                <a className='del Delete' href='/registration'>Delete account</a>
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
    </div>
  )
}

export default Profile