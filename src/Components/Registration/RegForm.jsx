import React from "react";
import './RegForm.css';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter} from 'react-router-dom';
import Login from "../Login/LoginForm";
import { Link, Route, Routes } from "react-router-dom";

const Registration = () => {
    return(
        <div className='wrapper'>
            <from action = "">
                <h1>SIGN UP</h1>
                <div className = "input-box">
                    <input type="text"  placeholder= 'Username...' required/>
                </div>
                <div className = "input-box">
                    <input type="password"  placeholder= 'Password...' required/>
                </div>
                <div className = "input-box">
                    <input type="password"  placeholder= 'Confirm password...' required/>
                </div>
                <div className="check-account">
                    <p>Already have an account?</p>
                    <a href="/login">Login</a>
                </div>
                <button type="submit">CONFIRM</button>
            </from>
        </div>
    );
};

export default Registration;