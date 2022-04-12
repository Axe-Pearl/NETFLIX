import React from 'react'
import "./Watch.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import ReactPlayer from "react-player"

function Watch() {
  const location = useLocation();
  console.log(location.state.movie.video);
  const movie = location.state.movie.video;
  return (
    <div className='watch'>
        <div className="back">
       <Link to = "/" className = "links"><ArrowBackIcon  /></Link> 
          Home
        </div>
        <div className='player-wrapper'>
        <ReactPlayer  className='react-player' height="100%" width="100%" playing={true}
        url= {movie} controls 
        />
        </div>
        {/* <video className = "videoFull" autoPlay progress controls  src={movie}  /> */}
    </div>
  )
}

export default Watch