import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movies from "./pages/movie/Movies";
import NewMovie from "./pages/newMovie/NewMovie";
import ListList from './pages/ListList/ListList';
import List from './pages/List/List';
import NewList from "./pages/newList/NewList";
import Login from './pages/login/Login';
import { useEffect, useState } from "react";


function App() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
  }, [])
  return (
    <BrowserRouter>
      {showNav &&
        <Topbar />
      }
      <div className="container">
        {showNav &&
          <Sidebar />}
        <Routes>
          <Route exact path="/login"
            element={<Login funcNav={setShowNav} />}
          />
          <Route exact path="/"
            element={<Home />}
          />

          <Route path="/users"
            element={<UserList />} />
          <Route path="/user/:userId"
            element={<User />} />
          <Route path="/newUser"
            element={<NewUser />} />
          <Route path="/Movies"
            element={<MovieList />}
          />
          <Route path="/movies/:movie"
            element={<Movies />}

          />
          <Route path="/List"
            element={<ListList />}
          />
          <Route path="/newList"
            element={<NewList />} />
          <Route path="/List/:list"
            element={<List />}

          />
          <Route path="/newmovie"
            element={<NewMovie />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
