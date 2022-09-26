import React,{useRef, useState} from 'react'
import "./Register.css"
import Footer from "../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [cpassword,setcpassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();
  const usernameRef = useRef();

  const handleStart = ()=>{
     setEmail(emailRef.current.value);
  }
  const handleFinish = async()=>{
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    setcpassword(cpasswordRef.current.value);
    console.log(email);
    let message;
    try{
       await axios.post("/register", {username,email,password,cpassword})
      .then((response)=>message = response.data.message);
      alert(message);
      navigate("/login");
    }
    catch(err){
       console.log(err);
    }
  }
  return (
    <>
    <div className='register'>
         <div className='wrapper'>
         <Link to ="/" ><img
            className="logoR"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            /></Link> 
          <Link to = "/login" style= {{textDecoration:"none"}}><button className='loginButton'>Sign In</button></Link>
        </div>
        <div className="containerPromo">
        <h1>Unlimited movies, TV<br/> shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className='inputwrap'>
          {!email ? (
              <div className='input'>
                <input type="email" placeholder='email address' ref={emailRef}/>
                <button className='registerButton' onClick={handleStart}>Get Started</button>
              </div>
          ):
          (
            <div className='input'>
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder='set password' ref={passwordRef}/>
            <input type="password" placeholder='confirm password' ref={cpasswordRef}/>
            <button className='registerButton' onClick={handleFinish}>Register</button>
            </div>
          )
          }
        </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Register