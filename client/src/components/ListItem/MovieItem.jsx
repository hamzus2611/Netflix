import React from 'react'
import {
    Add,
    PlayArrow,
    ThumbDownAltOutlined,
    ThumbUpAltOutlined,
  } from "@mui/icons-material";
  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import "./listitem.scss";
  import { useDispatch, useSelector } from "react-redux";
  import { get_movie } from "../../Redux/Action/action_Movie";
  import axios from "axios";
  
function MovieItem({ index, movie }) {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
         <div
            className="listItem"
            style={{
              left: isHovered && index * 255 - 50 + index * 2.5,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={movie.img} alt="" />
            <div className="itemInfo">
            <div className="genre">{movie.title}</div>
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTOp">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </div>
    </div>
  )
}

export default MovieItem