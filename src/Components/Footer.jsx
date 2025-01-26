import React from "react";
import ReactDOM from "react-dom/client";
import "./Footer.css";


function Footer() {
    return (
        <div className='main'>
            <div className='frame'>
                <div className='frame_rect' />
            </div>
            <div className='contacts' />
                <span className='contact-us'>Contact us:</span>
                <span className='mail'>trulyawebsite@gmail.com</span>
                <span className='phone'>8(800) 555-35-35</span>
            <div className='crossline' />
            <div className="discord_icon" />
            <div className="vk_icon" />
            <div className="telegram_icon" />
            <span className="sign">© 2025 Bar-Halla</span>
        </div>
    );
}

export default Footer;