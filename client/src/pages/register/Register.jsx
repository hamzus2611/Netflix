import { useEffect, useRef, useState } from "react";
import "./register.scss";
import { useDispatch } from "react-redux";
import { register } from "./../../Redux/Action/Auth";
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch;
  const navigate = useNavigate();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
    handleSubmit();
  };
  const handleSubmit = () => {
    dispatch(register(Email, Password));
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="http://www.cuevasandalucia.es/es/images/logos/netflix-logo.png"
            alt="netflix"
            className="logo"
          />
          <Link to="/login">
            <button className="loginButton">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        {!Email ? (
          <div className="input">
            <input type="email" placeholder="email adress" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
