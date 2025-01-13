import '../loginStyles/login.css'
import {useState, useEffect} from 'react';
function Login() {
    return (
        <>
            <header className="login__header">
                <h1>Login</h1>
            </header>
            <form className="login__form">
                <div className="login__camp">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email..."/>
                </div>
                <div className="login__camp">
                    <label htmlFor={"password"}>Password</label>
                    <input type="password" id="password" placeholder="Enter your password..."/>
                </div>
                <button className={"login__button"}>Log In</button>
            </form>
            <div className="login__options">
                <a>Forgot your password?</a>
                <a href={'/register'}>Dont have an account?</a>
            </div>
        </>
    )
}
export default Login;