import React from "react";

//HOC 
import DefaultHOC from "./HOC/Default.HOC";

//Components
import Temp from "./components/Temp";


function App() {
  return(
    <> 
    <DefaultHOC path="/" exact component={Temp}/>
    </>
  );
}

export default App;
