import React from 'react'
import "./Home.css";
import Navbar from '../../components/navbar/Navbar';
function Home() {
  return (
    <div>
      <Navbar />
      <img className="homeImage" src='https://assets.nflxext.com/ffe/siteui/vlv3/0bd3a69d-6790-4edc-9818-1c8c558946c2/e1a8a32a-a07a-4bae-965a-9b218881763e/IN-en-20220329-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
    </div>
  )
}

export default Home