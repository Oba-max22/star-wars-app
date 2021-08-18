import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/SignIn.css";

const SignIn = () => {
    const history = useHistory()

    const goToDashboard = (e)=> {
        e.preventDefault()
        history.push('/dashboard')
    }
    return (
        <div className="sign-in">
            <div className="first-section">
                <div>
                    <h2>Welcome to Star Wars the Clone Wars</h2>
                    <img src='./images/rockets.svg' alt='rocket bg' className='rocket-img' />
                </div>
                <div className="bottom-box">
                </div>
            </div>
            <div className="second-section">
                <h5>Sign in to continue to your account.</h5>
                <form>
                        <label for="email">Email address</label>
                        <input type="email" placeholder="Email address" name="email" required/>
                        <label for="password">Password</label>
                        <input type="password" placeholder="Enter strong password" name="password" required/>
                        <button onClick = {goToDashboard}>Sign In</button>
                </form>
            </div>
            <div className="third-section">
                <img src='./images/flags.svg' alt='flags bg' className='flags-img' />
            </div>
            
        </div>
    );
};

export default SignIn;