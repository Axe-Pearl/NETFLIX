import React from 'react'
import "./Home.css";
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
function Home() {
  return (
    <div>
      <Navbar />
      <Featured type = "movie"/>
    </div>
  )
}

export default Home