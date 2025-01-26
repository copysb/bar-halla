import React from "react";
import './RegForm.css';

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
                    <a href="#">Login</a>
                </div>
                <button type="submit">CONFIRM</button>
            </from>
        </div>
    );
};

export default Registration;