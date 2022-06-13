import React from "react";
import "./Login.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../../Redux/Action/auth";
function Login(props) {
  props.funcNav(false);
  const { Loading, User, Error } = useSelector((state) => state.AuthReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div className="Login">
      {Loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h1>dashbord Admin</h1>
          <div className="containerlogin">
            <div className="title">Login</div>
            <div className="Input-holder">
              <label>Email</label>
              <input
                className="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="loginButton" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
