import React from 'react';
import './login.css';
import Button from '../../utilities/button/Button';
// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

function Login(props) {
    return (
        <div className='login'>
            <div className="login__left">
                <div className="container_login">
                <h1 className="heading_login">Welcome to Health Card</h1>
                <div className="form">
                    <div className="field">
                        <label htmlFor="email" className="input_label">Email</label>
                        <input type="email" name="email" id="email_1" className="input_text"/>
                        {/* <AlternateEmailIcon fontSize="medium"/> */}
                    </div>
                    <div className="field">
                        <label htmlFor="password" className="input_label">Password</label>
                        <input type="password" name="password" id="password_1" className="input_text"/>
                        {/* <AlternateEmailIcon fontSize="medium"/> */}
                    </div>
                    <div className="field">
                        <Button text="Login Into Account"/>
                    </div>
                </div>
                </div>
                <div className="sign_up">
                    <h3 className="help">Do Not Have a Account</h3> <a href="#" className="sign_up_link">Sign Up</a>
                </div>
            </div>
            <div className="login__right">
            <img src={process.env.PUBLIC_URL + '/assets/headth.gif'} alt="a basic animation" className="right__img"/>
            </div>
        </div>
    )
}

export default Login;