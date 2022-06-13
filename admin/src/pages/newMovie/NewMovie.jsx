import "./newMovie.css";
import { useState } from "react";
import storage from "../../firebase";
import { addmovie } from "../../Redux/Action/Movies";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function NewMovie() {
  const [Movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [imgTiltle, setImgTitle] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...Movie, [e.target.name]: value });
  };
  const upload = (items) => {
    items.forEach((element) => {
      const fileName = new Date().getTime() + element.label + element.file.name;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, element.file);
      uploadTask.on(
        "state_changes",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return { ...prev, [element.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };
  console.log(Movie);
  const dispatch = useDispatch();
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(addmovie(Movie));
    navigate("/movies");
  };
  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTiltle, label: "imgTiltle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };
  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">New Movie</h1>
      <form className="addMovieForm">
        <div className="addMovieItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addMovieItem">
          <label>Title Image</label>
          <input
            type="file"
            id="imgTiltle"
            name="imgTiltle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addMovieItem">
          <label>Thumbnail Image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addMovieItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Discription</label>
          <input
            type="text"
            placeholder="discription"
            name="desc"
            onChange={handleChange}
          />
        </div>{" "}
        <div className="addMovieItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>{" "}
        <div className="addMovieItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>{" "}
        <div className="addMovieItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="Duration"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="Limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>IS series</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addMovieItem">
          <label>Trailer</label>
          <input
            type="file"
            name="Trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>{" "}
        <div className="addMovieItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 5 ? (
          <button className="addMovieButton" onClick={handleCreate}>
            Create
          </button>
        ) : (
          <button className="addMovieButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
