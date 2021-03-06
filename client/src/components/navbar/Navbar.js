import React,{useState} from 'react'
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthAction';


function Navbar() {
  const {dispatch} = useContext(AuthContext);
  const [IsScrolled, setIsScrolled] = useState(false);
  window.onscroll = ()=>{
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
  }
  // console.log(IsScrolled);
  return (
    <div className = {IsScrolled ? "navbarscrolled" : "navbar"}>
        <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to = "/" className='links'>
          <span>Home</span>
          </Link>
          <Link to = "/series" className='links'>
          <span>Series</span>
          </Link>
          <Link to = "/movies" className='links'>
          <span>Movies</span>
          </Link>
          <Link to = "/newpopular" className='links'>
          <span>New & Popular</span>
          </Link>
          <span>My List</span>
        </div>
        <div className='right'>
            <SearchIcon className='icon'/>
            <span>CHILDREN</span>
            <NotificationsIcon className='icon'/>
            <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            />
            <div className='profile'>
            <ArrowDropDownIcon className='icon'/>
            <div className="options">
                <span>settings</span>
                <span onClick={()=>dispatch(logout())}>Logout</span>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar