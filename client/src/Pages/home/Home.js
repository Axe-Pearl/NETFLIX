import React,{ useState, useEffect  } from 'react'
import "./Home.css";
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import Footer from "../../components/footer/Footer";
import List from '../../components/lists/List';
import axios from "axios";
// import { useLocation } from 'react-router-dom';

function Home({type}) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(()=>{
    console.log(type);
    console.log("type change",genre);
    const getRandomLists = async()=>{
      if(genre === "genre"){
        // console.log("yes");
        setGenre(null);
      }
      try{
        const res = await axios.get(
        `api/lists/${type ? "?type="+type : ""}${
         genre ? "&genre="+genre :""
        }`,
        {
          headers: {
            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ4M2ZhYzE4Njc1N2IyOGM1NGJlZTYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDk0MzEwMTR9.gegAjS2Xf65FXAeP0mZqvVqy_Ep3sctWBcIJGVO0Agc"
          },
        }
        );
        setLists(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getRandomLists();
  },[type, genre]);
  return (
    <div className='home'>
      <Navbar />
      <Featured type = {type} setGenre={setGenre} genre = {genre} />
      {lists.map((list)=>(
            <List list = {list} />
      ))}
     <Footer />
    </div>
  )
}

export default Home