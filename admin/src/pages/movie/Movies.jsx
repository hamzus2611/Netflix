import { Link, useLocation } from "react-router-dom";
import "./movie.css";
import Chart from "../../components/chart/Chart";
import { movieData } from "../../dummyData";
import { Publish } from "@mui/icons-material";
import { useState } from "react";

export default function Movies() {
  const location = useLocation();
  const movie = location.state.movie;
 console.log(location)
  return (
    <div className="movie">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">Movie</h1>
        <Link to="/newmovie">
          <button className="movieAddButton">Create</button>
        </Link>
      </div>
      <div className="movieTop">
        <div className="movieTopLeft">
          <Chart data={movieData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="movieTopRight">
          <div className="movieInfoTop">
            <img src={movie.img} alt="" className="movieInfoImg" />
            <span className="movieName">{movie.title}</span>
          </div>
          <div className="movieInfoBottom">
            <div className="movieInfoItem">
              <span className="movieInfoKey">id:</span>
              <span className="movieInfoValue">123</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">sales:</span>
              <span className="movieInfoValue">5123</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">active:</span>
              <span className="movieInfoValue">yes</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">in stock:</span>
              <span className="movieInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="movieBottom">
        <form className="movieForm">
          <div className="movieFormLeft">
            <label>Movie Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="movieFormRight">
            <div className="movieUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="movieUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="movieButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
