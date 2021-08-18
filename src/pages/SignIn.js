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
            <section className="main-second-section">
                <div className="second-section">
                    <h4>Sign in to continue to your account.</h4>
                    <form>
                        <div>
                            <label for="email">Email address</label>
                            <input type="email" placeholder="Email address" name="email" required/>
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" placeholder="Enter strong password" name="password" required/>
                        </div>
                        <button onClick = {goToDashboard}>Sign In</button>
                    </form>
                </div>
                <div className="third-section">
                    <img src='./images/flags.svg' alt='flags bg' className='flags-img'/>
                </div>
            </section>
            
        </div>
    );
};

export default SignIn;