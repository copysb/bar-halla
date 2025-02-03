import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <h1>SIGN IN</h1>
            <div className='wrapper loginp'>
                <from action = "">

                    <div className = "input-box">
                        <input type="text"  placeholder= 'Username...' required/>
                    </div>
                    <div className = "input-box">
                        <input type="password"  placeholder= 'Password...' required/>
                    </div>
                    <div className="check-account">
                        <a href="*" className="nextp">Forgot password?</a>
                    </div>
                    <a className='mpage' href='/main' type="submit">CONFIRM</a>
                </from>
            </div>
        </div>
    );
};

export default Login;