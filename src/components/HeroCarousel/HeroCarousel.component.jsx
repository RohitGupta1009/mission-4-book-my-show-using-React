import React from "react";

import HeroSlider from "react-slick";                            //In terminal install 1) react slick then 2) slick carousel from the site 'react slick npm'


//Component

import { NextArrow,PrevArrow } from "./Arrows.component";


//Import CSS Files:

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";         We have imported them globally in App.jsx so we don't need to write them again everywhere we use react slick

const HeroCarousel=()=>
{
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:< NextArrow/>,
        prevArrow:<PrevArrow/>,
    };
    const images=[
    "https://images.unsplash.com/photo-1626160201023-8d56992623d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1626128665085-483747621778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=610&q=80",
    "https://images.unsplash.com/photo-1622495894321-010d1e6db2a9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2775&q=80",
    "https://images.unsplash.com/photo-1626050954744-92bf034ce476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1626074961596-cab914d9392e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80",

];
  return (
  <> 
        <div className="lg:hidden">
        <HeroSlider {...settings}> 
         {images.map((image)=>
         (
             <div className="w-full h-44 md:h-64 py-3">
                 <img src={image} alt="testing" className="w-full h-full"/>
             </div>
         ))}
        </HeroSlider>
        </div>

        <div className="hidden lg:block">
        <HeroSlider {...settingsLG}> 
         {images.map((image)=>
         (
             <div className="w-full h-96 px-2 py-3">
                 <img src={image} alt="testing" className="w-full h-full"/>
             </div>
         ))}
        </HeroSlider>
        </div>
  </>
  );
};

export default HeroCarousel;