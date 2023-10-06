import React,{useState} from "react";
import sliderItems from "../../data";
import "./slider.scss";

export default function Slider() {
  const [slide, setSlide] = useState(0);
  const handelClick = (distance) => {
   if(distance==='right'){
    setSlide(slide===2?0:slide+1)
   }if(distance==='left'){
    setSlide(slide===0?0:slide-1)
   }
   console.log(distance)
  };
  return (
    <div className="slider">
      <div className="arrow left" onClick={() => handelClick("left")}>
        <i class="fa-sharp fa-solid left fa-arrow-left-long" ></i>
      </div>
      <div className="wrapper" >
        {sliderItems.map((val)=>{
        
        return(
          <div className="slide" key={val.id} style={{backgroundColor:val.bg,transform:`translateX(${slide*-100}vw)`}} >
          <div className="image-container">

            <img
              src={val.img}
              alt=""
            />
          </div>
          <div className="infocontainer">
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
            <button>SHOW NOW</button>
          </div>
        </div>
)})}
      </div>
    
      <div className="arrow right" onClick={() => handelClick("right")}>
        <i class="fa-sharp fa-solid right fa-arrow-right-long"></i>
      </div>
    </div>
  );
}
