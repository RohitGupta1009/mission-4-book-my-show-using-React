import React from "react";

//components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";


const DefaultLayout =(props)=>                         //starting letter should be capital for component
{
    return(
        <>        
        <Navbar/> 
        <HeroCarousel/>                                   
        {props.children}
        </>
    );
};
export default DefaultLayout;