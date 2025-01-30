import React from 'react'
import './Navbar.css'
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <header className="header">
            <a href="#" className="Profile"><FaUser />Profile</a>
            <div className="Stick"><a className='Coins'></a></div>
            <nav className="navbar">
                <a href="#" className="Home">Home</a>
                <a href="#" className="FAQ">FAQ</a>
                <a href="#" className="About-Us">About Us</a>
            </nav>
        </header>
        <main>
          <div>
            
          </div>
        </main>
    </div>
  );
}

export default Navbar