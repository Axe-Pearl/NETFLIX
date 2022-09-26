import React,{ useState, useEffect} from 'react'
import "./ListItem.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom"
import ReactPlayer from "react-player"
import axios from "axios";

function ListItem({index,item}) {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
     const getMovies = async()=>{
       try{
            const res = await axios.get(`api/movies/find/${item}`,
            {
              headers: {
                token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ4M2ZhYzE4Njc1N2IyOGM1NGJlZTYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDk0MzEwMTR9.gegAjS2Xf65FXAeP0mZqvVqy_Ep3sctWBcIJGVO0Agc"
              },
            });
            setMovie(res.data);
            // console.log("Ye Dil Maange More...",res.data);
       }
       catch(err){
         console.log(err);
       }
     }
     getMovies();
  },[item]);
  const [isHovered, setisHovered] = useState(false);
  const trailer = movie.trailer;

  const toWatch=()=>{
    navigate('/watch',{state:{movie}});
  }

  return (
    <div className='listItem'
    style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    onMouseEnter={() => setisHovered(true)}
    onMouseLeave={() => setisHovered(false)}
    >
     <img src={movie.img} style = {{objectFit:"cover",objectPosition:"50% 50%"}} alt="" />
     { isHovered && (
        <>
        <ReactPlayer url = {trailer} playing={true} loop={true} height="140px" width="100%"
         style = {{objectFit:"cover",position:"absolute",top:"0",left:"0"}}
        />
        <div className='itemInfo'>
           <div className='icons'>
           <PlayArrowIcon className='iconlist' onClick = {()=>{toWatch()}} />
           <AddIcon className='iconlist' />
           <ThumbUpOutlinedIcon className='iconlist' />
           <ThumbDownOutlinedIcon className='iconlist' />
           </div>
           <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.title}<br/>
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div></>
          )}
    </div>
  )
}

export default ListItem