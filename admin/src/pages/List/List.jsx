import { Link, useLocation } from "react-router-dom";
import "./list.css";
import { Publish } from "@mui/icons-material";
import { useState } from "react";

export default function Movies() {
  const location = useLocation();
  const list = location.state.List;
  console.log(location);
  return (
    <div className="list">
      <div className="listTitleContainer">
        <h1 className="listTitle">List</h1>
        <Link to="/newlist">
          <button className="listAddButton">Create</button>
        </Link>
      </div>
      <div className="listTop">
        <div className="listTopRight">
          <div className="listInfoTop">
            {/* <img src={movie.img} alt="" className="listInfoImg" /> */}
            <span className="listName">{list.title}</span>
          </div>
          <div className="listInfoBottom">
            <div className="listInfoItem">
              <span className="listInfoKey">id:</span>
              <span className="listInfoValue">{list._id}</span>
            </div>
            <div className="listInfoItem">
              <span className="listInfoKey">type:</span>
              <span className="listInfoValue">{list.type}</span>
            </div>
            <div className="listInfoItem">
              <span className="listInfoKey">genre:</span>
              <span className="listInfoValue">{list.genre}</span>
            </div>
            <div className="listInfoItem">
              <span className="listInfoKey">in stock:</span>
              <span className="listInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="listBottom">
        <form className="listForm">
          <div className="listFormRight">
            <div className="listUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="listUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="listButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
