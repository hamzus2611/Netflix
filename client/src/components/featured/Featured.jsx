import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { get_movie_random } from "../../Redux/Action/action_Movie";
import "./featured.scss";

export default function Featured({ type, setGenre }) {
  const dispatch = useDispatch();
  const { Loading, randommovie } = useSelector((state) => state.MovieReducer);
  useEffect(() => {
    dispatch(get_movie_random(type));
  }, [type]);
  return (
    <div>
      {!Loading ? (
        <h1> Loading</h1>
      ) : (
        <div className="featured">
          {type && (
            <div className="category">
              <span>{type === "movie" ? "movie" : "serie"}</span>
              <select
                name="genre"
                id="genre"
                onChange={(e) => setGenre(e.target.value)}
              >
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantsay">Fantsay</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
              </select>
            </div>
          )}
          <img src={randommovie.img} alt="" />
          <div className="info">
            <img className="imgtitle" src={randommovie.imgTiltle} alt="" />
            <span className="desc">{randommovie.desc}</span>
            <div className="buttons">
              <Link to={{ pathname: "/watch" }} state={{ movie: randommovie }}>
                <button className="play">
                  <PlayArrow />
                  <span>play</span>
                </button>
              </Link>
              <button className="more">
                <InfoOutlined />
                <span>Info</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
