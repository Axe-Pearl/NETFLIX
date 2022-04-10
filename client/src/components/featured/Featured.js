import React,{ useState,useEffect } from 'react'
import "./Featured.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from "axios";

function Featured({type}) {
  const [content,setContent] = useState([]);
  useEffect(()=>{
     const getRandomContent = async()=>{
       try{
          const res = await axios.get(
          `api/movies/random/?type=${type}`,
          {headers:{
              token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ4M2ZhYzE4Njc1N2IyOGM1NGJlZTYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDk1ODAxNzd9.Jl6T_ArzHffHD-3SJ_5mQ1LH2nWKjdu70IormgzUn9A"
            }
          });
          console.log(res.data[0]);
          setContent(res.data[0]);
       }
       catch(err){
         console.log(err);
       }
     }
     getRandomContent();
  },[type])
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name='genre' id="genre">
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
                   <option value="western">Western</option>
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
        <h1 className='movieTitle'>{content.title}</h1>
        {/* <img
          src={content.imgTitle}
          alt=""
        /> */}
        <span className="desc">
          {content.desc}
        </span>
        <div className='buttons'>
             <button className='play'>
             <PlayArrowIcon />
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