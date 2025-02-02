import React from "react";
import './RegForm.css';
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <div>
            <h1>SIGN UP</h1>
            <div className='wrapper'>
                <from action = "">

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
                        Already have an account? <a href="/login" className="nextp">Login</a>
                    </div>
                    <Link type="submit">CONFIRM</Link>
                </from>
            </div>
        </div>
    );
};

export default Registration;