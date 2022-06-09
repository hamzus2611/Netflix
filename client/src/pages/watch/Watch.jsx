import React, { useEffect } from "react";
import "./watch.scss";
import { ArrowBackIosOutlined } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Watch() {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state.movie;
  useEffect(()=> {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  console.log(movie.video)
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIosOutlined />
          Home 
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.video}
        // src="https://www.youtube.com/embed/eatc50y785I"
      />
      {/* <iframe
        className="video"
        autoPlay
        src="https://www.youtube.com/embed/Iw5BiCxOR-c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
    </div>
  );
}
