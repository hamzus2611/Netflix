import './App.scss';
import Home from './pages/Home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Watch from './pages/watch/Watch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter className="App" >

      <Routes >

        
      
        <Route path="/login" exact element={<Login />} />
        <Route path="/Register" exact element={<Register />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/Series" exact element={<Home Types="series" />} />
        <Route path="/Movies" exact element={<Home Types="movie" />} />
        <Route path="/watch" exact element={<Watch />} />
        


   
      </Routes>
    </BrowserRouter>

  );
}

export default App;
