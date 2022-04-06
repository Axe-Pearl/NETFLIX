import React, {useRef, useState} from 'react';
import "./List.css";
import ListItem from '../listItem/ListItem';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function List() {
    const listRef =  useRef();
    const [slideNumber, setSlideNumber] = useState(0);

    const handleClick = (direction) =>{
        let distance = listRef.current.getBoundingClientRect().x - 50;
        console.log("slideNumber",slideNumber);
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            console.log(230+distance);
        }
        else if(direction === "right" && slideNumber < 4){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
        console.log(distance);
    }
  return (
    <div className='list'>
        <span className='listTitle'>Continue to Watch</span>
        <div className='wrapper'>
            <ArrowBackIosNewIcon style={{ width: "50px" , height: "72%"}}  className="sliderArrow lefta" onClick = {()=>handleClick("left")} />
            <div className='containera' ref = {listRef}>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </div>
            <ArrowForwardIosIcon style={{ width: "50px" , height: "72%"}}  className="sliderArrow righta" onClick = {()=>handleClick("right")} />
        </div>
    </div>
  )
}

export default List