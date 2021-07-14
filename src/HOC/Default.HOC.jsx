import React from "react";
import {Route} from "react-router-dom";

//import Layout

import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC =({component:Component,...rest})=> 
//spread operator used : props(here replaced by name 'rest' to avoid naming clashing on Line 16) will give componet , exact and path ,we are destructuring (separating) only the component property for the usage/modification purpose and we are sprading the path and exact. But react says that first letter should be capital for the componet so we have assigned everything of component to Component using component:Component
{
   
      return( 
   <>
     <Route{...rest} component={(props)=> 
     (
         <DefaultLayout>
             <Component {...props}/>
         </DefaultLayout>
     )}/>
   </>
   );                                      // Hence we are returning our whole route ie whole component by using HOC
  
};

export default DefaultHOC;     