import React from "react";
import './RegForm.css'  ;

const Registration = () => {
    return(
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
                    <a className='mpage' href='/main' type="submit">CONFIRM</a>
                </from>
            </div>
        </div>
    );
};

export default Registration;