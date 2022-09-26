import React from 'react'
import "./Footer.css"
import ReactPlayer from 'react-player';

function Footer() {
  return (
    <>
       <div className='TVshows'>
         <div className='promo'>
           <h1 style={{letterSpacing:"1px",width:"600px",lineHeight:"1px"}}>Enjoy on your TV.</h1>
           <p style={{width:"564px",fontSize:"25px",textAlign:"left"}}>Watch on smart TVs, PlayStation, Xbox,Chromecast, Apple TV, Blu-ray players and more.</p>
         </div>
         <div className='imageContainer'>
           <img alt="" className='TV' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'></img>
           <ReactPlayer className="storyContainer" width="500px" 
           url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
           type="video/mp4" playing = {true} loop = {true} />
         </div>
      </div>
      <div className='TVshows'>
         <div className='imageContainer'>
           <img alt="" className='android' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'></img>
         </div>
         <div className='promo'>
           <h1 style={{width:"800px"}}>Download your shows to watch offline.</h1>
           <p style={{width:"564px",fontSize:"25px",textAlign:"left"}}>Save your favourites easily and always have something to watch.</p>
         </div>
        <div class="animBox">
        <div class="aniImg">
           <img alt="" style = {{width:"50px",height:"60px",objectFit:"cover"}} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
        </div>
        <div class="sample">
         <div style={{color:"white"}}>Stranger Things</div>
         <div style={{color:"blue"}}>Downloading...</div>
        </div>
        <img alt="" style={{width:"50px",height:"50px",objectFit:"cover",marginLeft:"150px"}}src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif'></img>
        </div>
      </div>
      <div className='TVshows'>
         <div className='promo'>
           <h1 style={{letterSpacing:"1px",width:"600px",lineHeight:"1px"}}>Watch everywhere.</h1>
           <p style={{width:"564px",fontSize:"25px",textAlign:"left"}}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
         </div>
         <div className='imageContainer'>
           <img alt="" className='TV' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png'></img>
           <ReactPlayer className="storyContainer2" width="400px" 
           url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
           type="video/mp4" playing = {true} loop = {true} />
         </div>
      </div>
      <div className='TVshows'>
         <div className='imageContainer'>
           <img alt="" className='android' src='https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf'></img>
         </div>
         <div className='promo'>
           <h1 style={{width:"600px",lineHeight:"1",textAlign:"left"}}>Create profiles for children.</h1>
           <p style={{width:"564px",fontSize:"25px",textAlign:"left"}}>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
         </div>
      </div>
      <div className='footer'>
        <div>
        <span style={{position:"absolute",left:"250px",marginTop:"50px"}}>Questions? Call 000-800-040-1843</span>
        </div>
        <div className='footerContainer'>
         <div className='col col1'>
         <ul className="footerList">
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
            </ul>
         </div>
         <div className='col col2'>
            <ul className="footerList">
                <li>Help Centre</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
            </ul>
        </div>
        <div className='col col3'>
            <ul className="footerList">
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
            </ul>
        </div>
        <div className='col col4'>
            <ul className="footerList">
                <li>Media Centre</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
        <span style={{position:"absolute",left:"250px",marginTop:"250px"}}>Netflix India</span>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer