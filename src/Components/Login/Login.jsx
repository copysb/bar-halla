import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='wrapper'>
            <from action = "">
                <h1>LOGIN</h1>
                <div className = "input-box">
                    <input type="text"  placeholder= 'Username...' required/>
                </div>
                <div className = "input-box">
                    <input type="password"  placeholder= 'Password...' required/>
                </div>
                <div className="forgot">
                    <a href="*">Forgot password?</a>
                </div>
                <a className='mpage' href='/main' type="submit">CONFIRM</a>
            </from>
        </div>
    );
};

export default Login;