import React from 'react'
import "./Watch.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Watch() {
  return (
    <div className='watch'>
        <div className="back">
        <ArrowBackIcon />
          Home
        </div>
        <video className = "videoFull" autoPlay progress controls  src="http://media.w3.org/2010/05/sintel/trailer.mp4"  />
    </div>
  )
}

export default Watch