import React from "react";

//HOC 
import DefaultHOC from "./HOC/Default.HOC";

//Components
import HomePage from "./pages/Home.page";

//Import CSS Files:

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return(
    <> 
    <DefaultHOC path="/" exact component={HomePage}/>
    </>
  );
}

export default App;
