import { useEffect, useRef, useState } from "react";
import { login } from "../../Redux/Action/Auth";
import "./login.scss";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const emailRef = useRef();
  // const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Loading, User, Error } = useSelector((state) => state.AuthReducer);

  // const handleStart = () => {
  //   setEmail(Email);
  // };
  // const handleFinish = () => {
  //   setPassword(Password);
  // };
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
    <div className="login">
      {Loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="top">
          <div className="wrapper">
            <img
              src="http://www.cuevasandalucia.es/es/images/logos/netflix-logo.png"
              alt="netflix"
              className="logo"
            />

            <button component={Link} to="/register" className="loginButton">
              Sign Up
            </button>
          </div>
          <div className="container">
            <form action="">
              <h1>Sign In</h1>
              <input
                type="email"
                placeholder="Email "
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {Error ? <h4 color="red">{Error} </h4> : <h6> </h6>}
              <button className="loginButton" onClick={handleLogin}>
                Sign In
              </button>
              <span>
                New to Netflix? <Link to="/register"> Sign up now.</Link>
              </span>
              <small>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <b>learn more...</b>
              </small>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
