import './App.css';
import Home from "./Pages/home/Home";
import Register from './Pages/register/Register';
import Watch from './Pages/watch/Watch';
import Login from "./Pages/login/Login";
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
     <Routes>
       <Route exact path='/' element = { user ? <Home />: <Navigate to = "/register" />} />
       <Route path='/register' element = {!user ? <Register /> : <Navigate to  = "/" />}  />
       <Route path='/login' element = {!user ? <Login /> :<Navigate to  = "/" />} />
       {user && (
        <>
        <Route path = "/movies" element = {<Home type = "movies"/>} />
        <Route path = "/series" element = {<Home type = "series" />} />
        <Route path="/watch" element = {<Watch />}/>
        </>
       )}
     </Routes>
    </div>
  );
}

export default App;
