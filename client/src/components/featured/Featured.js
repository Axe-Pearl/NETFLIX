import React,{ useState,useEffect } from 'react'
import "./Featured.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Featured({type, setGenre, genre}) {
  const navigate = useNavigate();
  const [content,setContent] = useState([]);
  
  const fonts = {
      "Horror" : "cursive",
      "Action":"Libre Baskerville, serif",
      "Action,Drama":"Libre Baskerville, serif",
      "Drama,Comedy":"'Bebas Neue', cursive;",
      "Adventure,Action":"verdana",
      "Horror,Action":"Creepster,cursive",
      "Horror, Mystery, suspense, Thriller":"Creepster,cursive"
    };
  useEffect(()=>{
     const getRandomContent = async()=>{
       try{
          const res = await axios.get(
          `api/movies/random/?type=${type}`,
          {headers:{
              token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ4M2ZhYzE4Njc1N2IyOGM1NGJlZTYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDk1ODAxNzd9.Jl6T_ArzHffHD-3SJ_5mQ1LH2nWKjdu70IormgzUn9A"
            }
          });
          setContent(res.data[0]);
       }
       catch(err){
         console.log(err);
       }
     }
     getRandomContent();
  },[type,genre]);
  const toWatch=(c)=>{
    const movie = c.content;
    navigate('/watch',{state:{movie}});
  }
  let Genre = content.genre;
  let font = fonts[`${Genre}`];
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name='genre' id="genre" onChange={(e)=>setGenre(e.target.value)}>
                  <option value="genre">Genre</option>
                   <option value="adventure">Adventure</option>
                   <option value="comedy">Comedy</option>
                   <option value="crime">Crime</option>
                   <option value="fantasy">Fantasy</option>
                   <option value="historical">Historical</option>
                   <option value="horror">Horror</option>
                   <option value="romance">Romance</option>
                   <option value="sci-fi">Sci-fi</option>
                   <option value="thriller">Thriller</option>
                   <option value="Action">Action</option>
                   <option value="animation">Animation</option>
                   <option value="drama">Drama</option>
                   <option value="documentary">Documentary</option>
                </select>
            </div>
        )
        }
      <img className='mainImg'
        src={content.img}
        alt=""
      />
      <div className="info">
        <h1 className='movieTitle' >{content.title}</h1>
        <span className="desc">
          {content.desc}
        </span>
        <div className='buttons'>
             <button className='play'>
             <PlayArrowIcon onClick = {()=>toWatch({content})}/>
             <span>Play</span>
             </button>
             <button className='more'>
               <InfoOutlinedIcon /> 
               <span>Info</span>
             </button>
        </div>
        </div>
    </div>
  )
}

export default Featured