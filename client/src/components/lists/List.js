import React, {useRef, useState} from 'react';
import "./List.css";
import ListItem from '../listItem/ListItem';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function List({list}) {
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
        <span className='listTitle'>{list.title}</span>
        <div className='wrapperX'>
            <ArrowBackIosNewIcon style={{ width: "50px" , height: "72%"}}  className="sliderArrow lefta" onClick = {()=>handleClick("left")} />
            <div className='containera' ref = {listRef}>
              {list.content.map((item,i)=>(
                <ListItem index = {i} item = {item} />
              ))}
            </div>
            <ArrowForwardIosIcon style={{ width: "50px" , height: "72%"}}  className="sliderArrow righta" onClick = {()=>handleClick("right")} />
        </div>
    </div>
  )
}

export default List