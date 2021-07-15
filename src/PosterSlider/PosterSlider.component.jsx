import React from "react";
import Slider from "react-slick";


//components
import Poster from "../components/Poster/poster.component";

//configs
import PosterCarouselSettings from "../config/PosterCarousel.config";


const PosterSlider= (props) => {
    return (
        <>
        <div className="flex flex-col jutify-start px-3 py-3">
          <h3 className={` text-2xl font-bold ${props.isDark ? "text-white" :"text-gray-700"}`}>{props.title}</h3>
          <p className={` text-sm ${props.isDark ? "text-white" :"text-gray-700"}`}> {props.subtitle}</p>
        </div>
        <Slider{...PosterCarouselSettings}>
        
          {props.images.map((image)=>
          (
              <Poster {...image} isDark={props.isDark}/>
          ))}
        </Slider>
        </>
    );
};
export default PosterSlider;
