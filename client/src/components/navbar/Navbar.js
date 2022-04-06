import React,{useState} from 'react'
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
  const [IsScrolled, setIsScrolled] = useState(false);
  window.onscroll = ()=>{
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
  }
  console.log(IsScrolled);
  return (
    <div className = {IsScrolled ? "navbarscrolled" : "navbar"}>
        <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New & Popular</span>
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
                <span>Logout</span>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar