import "./ListList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletelist, getlist } from "../../Redux/Action/List";
export default function ListList() {
  const dispatch = useDispatch();
  const { loading, List, error } = useSelector((state) => state.ListReducer);
  let [Lists, setLists] = useState(List);
  useEffect(() => {
    dispatch(getlist());
  }, []);
  // setMovies(movie);
  const handleDelete = (id) => {
    setLists(Lists.filter((item) => item._id !== id));
    dispatch(deletelist(id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="listListItem">
            <img className="listListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "type", headerName: "type", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link
              to={{ pathname: "/list/" + params.row._id }}
              state={{ List: params.row }}
            >
              <button className="listListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="listListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="listList">
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
          <div className="listTitleContainer">
            <h1 className="listTitle">List</h1>
            <Link to="/newlist">
              <button className="listAddButton">Create</button>
            </Link>
          </div>
          <DataGrid
            rows={Lists}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={(row) => row._id}
          />
        </>
      )}
    </div>
  );
}
