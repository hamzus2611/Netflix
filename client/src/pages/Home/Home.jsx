import "./home.scss";
import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import Listes from "../../components/List/Listes";
import Navbar from "../../components/navbar/Navbar";
import { getlist } from "../../Redux/Action/action_List";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Home({ Types }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [Lists, setLists] = useState([]);
  const { List, Loading } = useSelector((state) => state.ListReducer);
  const [genre, setGenre] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    // dispatch(getlist(Types, genre));

    const getRundomList = async () => {
      try {
        dispatch(getlist(Types, genre));
      } catch (error) {
        console.log(error);
      }
    };
    !token ? navigate("/login") : getRundomList();
  }, [Types, genre, token]);
  return (
    <div className="home">
      {!Loading ? (
        <h1> Loading</h1>
      ) : (
        <div>
          <Navbar />
          <Featured type={Types} setGenre={setGenre} />
          {List.map((el, index) => (
            <Listes list={el} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
