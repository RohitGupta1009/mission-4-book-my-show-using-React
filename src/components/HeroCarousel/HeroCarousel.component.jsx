import React,{useState,useEffect} from "react";
import HeroSlider from "react-slick";                            //In terminal install 1) react slick then 2) slick carousel from the site 'react slick npm'
import axios from "axios";


//Component

import { NextArrow,PrevArrow } from "./Arrows.component";


//Import CSS Files:

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";         We have imported them globally in App.jsx so we don't need to write them again everywhere we use react slick

const HeroCarousel=()=>
{

    const[images,setImages]=useState([]);
    useEffect(()=>                                         //Hook should always be above all logics of that function
    {
       const requestNowPlayingMovies=async()=>
       {
           const getImages=await axios.get("/movie/now_playing");
           setImages(getImages.data.results);
       };
       requestNowPlayingMovies();
    },[]);

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow:< NextArrow/>,
        prevArrow:<PrevArrow/>
      };

   const settings = 
    {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:< NextArrow/>,
        prevArrow:<PrevArrow/>,
    };
    
  return (
  <> 
        <div className="lg:hidden">
        <HeroSlider {...settings}> 
         {images.map((image)=>
         (
             <div className="w-full h-44 md:h-64 py-3">
                 <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full"/>
             </div>
         ))}
        </HeroSlider>
        </div>

        <div className="hidden lg:block">
        <HeroSlider {...settingsLG}> 
         {images.map((image)=>
         (
             <div className="w-full h-96 px-2 py-3">
                 <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full"/>
             </div>
         ))}
        </HeroSlider>
        </div>
  </>
  );
};

export default HeroCarousel;