import { useEffect, useRef, useState } from "react";
import { login } from "../../Redux/Action/Auth";
import "./login.scss";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const emailRef = useRef();
  // const passwordRef = useRef();
const dispatch=useDispatch()
const navigate = useNavigate();

  // const handleStart = () => {
  //   setEmail(Email);
  // };
  // const handleFinish = () => {
  //   setPassword(Password);
  // };
  const handleLogin=(e)=>{
    e.preventDefault();
    dispatch(login({email,password}))
  }
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      navigate("/");
    }
  },[])
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="http://www.cuevasandalucia.es/es/images/logos/netflix-logo.png"
            alt="netflix"
            className="logo"
          />
          <button className="loginButton" >Sign In</button>
        </div>
        <div className="container">
          <form action="">
            <h1>Sign In</h1>
            <input type="email" placeholder="Email " onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            <button className="loginButton" onClick={handleLogin}>Sign In</button>
            <span>
              New to Netflix? <Link to="/register"> Sign up now.</Link>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>learn more...</b>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
