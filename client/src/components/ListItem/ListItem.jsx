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
import MovieItem from "./MovieItem";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState(null);
  // const { movie, Loading,randommovie } = useSelector((state) => state.MovieReducer);
  // useEffect(() => {
  //   const getRundomList = async () => {
  //     try {
  //       dispatch(get_movie( item ));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getRundomList();
  // }, [item]);
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(`/movie/get/${item}`);
        console.log(res.data)
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [item]);
  console.log(item);
  console.log(movie);
  return (
    <div>
      {!movie ? (
        <h1>loading</h1>
      ) : (
         <MovieItem movie={movie} index={index} />
      )}
    </div>
  );
}
