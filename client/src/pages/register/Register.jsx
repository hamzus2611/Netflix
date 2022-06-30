import { useEffect, useRef, useState } from "react";
import { Button, PlayArrow } from "@mui/material";
import "./register.scss";
import { useDispatch } from "react-redux";
import { register } from "./../../Redux/Action/Auth";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePic, setPicprofile] = useState(
    "https://th.bing.com/th/id/R.562b6b808a243c7298369a865a8c7a60?rik=HXjf8i27SP5J5A&pid=ImgRaw&r=0"
  );
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleNext = () => {
    setPassword(passwordRef.current.value);
  };

  const handleSubmit = () => {
    console.log(email, password, username, lastname, phone);
    dispatch(
      register({ email, password, username, lastname, phone, profilePic })
    );
  };
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="http://www.cuevasandalucia.es/es/images/logos/netflix-logo.png"
            alt="netflix"
            className="logo"
          />
          <button component={Link} to="/login" className="loginButton">
            Sign In
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        {!email && !password ? (
          <p>
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
        ) : (
          <p>Ready to watch? Enter your password to create your membership</p>
        )}
        {!email && !password ? (
          <div className="input">
            <input
              type="email"
              placeholder="email adress"
              name="email"
              ref={emailRef}
            />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : !password ? (
          <div className="input">
            <input
              type="password"
              placeholder="password"
              name="password"
              ref={passwordRef}
            />
            <button className="registerButton" onClick={handleNext}>
              Next
            </button>
          </div>
        ) : (
          <div className="inputs">
            <input
              type="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="lastname"
              placeholder="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="phone"
              placeholder="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="registerButton" onClick={handleSubmit}>
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
