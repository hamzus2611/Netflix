import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Action/Auth";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScolled, setIsScolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const dispatch = useDispatch();
  const handelLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");

  };
  return (
    <div className={isScolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="http://www.cuevasandalucia.es/es/images/logos/netflix-logo.png"
            alt="netflix"
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/Series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUR_o351MDDeZeHB_8wTc617eAhQmVAHVMevkS2ucYwkKezx6tVgHq9XsTHQjqTgQk71c&usqp=CAU"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={handelLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
