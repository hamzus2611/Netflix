import "./MovieList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { movieRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { deletemovie, getmovie } from "../../Redux/Action/Movies";
import { useSelector, useDispatch } from "react-redux";
export default function ProductList() {
  const [data, setData] = useState(movieRows);
  const dispatch = useDispatch();
  const { loading, movies, error } = useSelector((state) => state.MovieReducer);
  let [Movies, setMovies] = useState(movies);
  useEffect(() => {
    dispatch(getmovie());
  }, []);
  // setMovies(movie);
  const handleDelete = (id) => {
    setMovies(movies.filter((item) => item._id !== id));
    dispatch(deletemovie(id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="movieListItem">
            <img className="movieListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "year", width: 120 },
    { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link
              to={{pathname: "/movies/"+params.row._id}}
                state = {{movie: (params.row) }}
              
            >
              <button className="movieListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="movieListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="movieList">
      {loading ? (
        <h1>loading</h1>
      ) : (
        <DataGrid
          rows={Movies}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
          getRowId={(row) => row._id}
        />
      )}
    </div>
  );
}
