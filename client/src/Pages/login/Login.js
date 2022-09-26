import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { login } from '../../context/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import "./Login.css"

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const { isFetching, dispatch} = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) =>{
     e.preventDefault();
     login({email,password},dispatch);
  }
  return (
    <div className='login'>
         <div className='wrapper'>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            />
        </div>
        <div className="containerLogin">
         <form>
          <h1>Sign In</h1>
          <input type="email" 
           placeholder="Email or phone number"
           ref={emailRef} 
           onChange = {(e)=>setEmail(e.target.value)}
          />
          <input type="password" 
           placeholder="Password" 
           ref = {passwordRef} 
           onChange = {(e)=>setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin} 
           disabled = {isFetching}>Sign In</button>
          <span>
            New to Netflix? <b><Link to = "/register" style={{textDecoration:"none"}}>Sign up now.</Link> </b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
         </form>
        </div>
    </div>
  )
}

export default Login