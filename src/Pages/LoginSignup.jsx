import React from 'react'
import './CSS/login.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-field">
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Login</button>
        <p className="loginsignup-login">Dont have an accout <span>Signup</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>I agree the terms of use and privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup