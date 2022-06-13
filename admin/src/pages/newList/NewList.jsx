import "./newList.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getmovie } from "./../../Redux/Action/Movies";
import { CreateList } from "./../../Redux/Action/List";
import { useNavigate } from "react-router-dom";

export default function NewList() {
  const [list, setList] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, movies, error } = useSelector((state) => state.MovieReducer);
  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };
  useEffect(() => {
    dispatch(getmovie());
  }, []);
  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(CreateList(list));
    navigate("/list");
  };
  return (
    <div className="newList">
      <h1 className="newListTitle">New List</h1>
      <form className="newListForm">
        <div className="newListItem">
          <label>title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="newListItem">
          <label>type</label>
          <select name="type" onChange={handleChange}>
            <option>Type</option>
            <option value="movie"> Movie</option>
            <option value="series"> Series</option>
          </select>
        </div>
        <div className="newListItem">
          <label>genre</label>
          <input
            type="email"
            placeholder="genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addListItem">
          <label>Content</label>

          <select
            name="content"
            onChange={handleSelect}
            multiple
            style={{ height: "280px" }}
          >
            {movies.map((movie, index) => (
              <option key={index} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>

        <button className="newListButton" onClick={handleCreate}>
          Create
        </button>
      </form>
    </div>
  );
}
