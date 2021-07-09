import React from 'react';
import './register.css';
// import '../login/login/login.css';
import Button from '../../utilities/button/Button';

function Register() {
    return (
        <div className="register">
            <div className="register__left">
                <div className="container_register">
                    <img src={process.env.PUBLIC_URL + 'assets/3dlogo.png'} alt="company logo" className='register__logo-1' />
                    <h1 className="heading_register">Create your health card account</h1>
                    <div className="form_register">
                        {/* first name field here */}
                        <div className="field part_register_1">
                            <label htmlFor="fname" className="input_label">First Name</label>
                            <input type="text" name="fname" id="fname" className="input_text" />
                            {/* <AlternateEmailIcon fontSize="medium"/> */}
                        </div>
                        {/* last name field here */}
                        <div className="field part_register_2">
                            <label htmlFor="lname" className="input_label">Last Name</label>
                            <input type="text" name="lname" id="lname" className="input_text" />
                            {/* <AlternateEmailIcon fontSize="medium"/> */}
                        </div>
                        {/* Email address */}
                        <div className="field part_register special2">
                            <label htmlFor="email" className="input_label">Email</label>
                            <input type="email" name="email" id="email" className="input_text" />
                            {/* <AlternateEmailIcon fontSize="medium"/> */}
                        </div>
                        {/* password */}
                        <div className="field part_register_1">
                            <label htmlFor="passwordf" className="input_label">Password</label>
                            <input type="password" name="passwordf" id="passwordf" className="input_text" />
                            <span className="extern-type">Atleast 8 characters long.</span>
                            {/* <AlternateEmailIcon fontSize="medium"/> */}
                        </div>
                        {/* Confirm Password */}
                        <div className="field part_register_2">
                            <label htmlFor="passwordl" className="input_label">Retype Password</label>
                            <input type="password" name="passwordl" id="passwordl" className="input_text" />
                            <span className="extern-type">Atleast 8 characters long.</span>
                            {/* <AlternateEmailIcon fontSize="medium"/> */}
                        </div>
                        <div className="field part_register_1">
                            <label htmlFor="organization" className="input_label">Institution/Organization name</label>
                            <input type="text" name="organization" id="organization" className="input_text" />
                            {/* <AlternateEmailIcon fontSize="medium"/> */}
                        </div>
                        {/* Confirm Password */}
                        <div className="field part_register_2">
                            <label for="user-role" className="input_label"> User Role</label>
                            <select name="user-role" className="input_text special">
                                <option value="0" selected disabled>Select Role</option>
                                <option value="1">Institution</option>
                                <option value="1">Doctor/Hospital</option>
                            </select>
                            {/* <AlternateEmailIcon fontSize="medium"/> */}
                        </div>
                        <div className="field part_register special2">
                            <label htmlFor="file1" className="input_label">Upload Proof Documents</label>
                            <input type="file" name="file1" id="file1" className="input_text" />
                        </div>
                        <div className="field-check">
                            <input type="checkbox" id="register-agree" name="checker" className="toggle-input"/>
                            <span className="info">Do you agree to the <a href="#" className="sign_up_link">terms and conditions?</a></span>
                        </div>
                            {/* Register Button */}
                            <div className="field part_register">
                                <Button text="Create Account" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="register__right">
                    <div className="login__right">
                        <img src={process.env.PUBLIC_URL + '/assets/headth.gif'} alt="a basic animation" className="right__img" />
                    </div>
                </div>
            </div>
            )
}

            export default Register;