import React from "react";
import {BiChevronRight,BiSearchAlt2,BiMenu,BiChevronDown} from "react-icons/bi";

const NavSm=()=>
{
   return(
       <>
       <div className="text-white flex items-center justify-between">
           <div>
               <h3 className="text-xl font-bold"> It All Starts Here!</h3>
               <span className="text-gray-200 text-xs flex items-center"> Udaipur < BiChevronRight/></span>
           </div>
           <div className=" w-8 h-8">
               <BiSearchAlt2 className="w-full h-full"/>
           </div>
       </div>
       </>
   );
};

const NavMd=()=>
{
      return (
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
              <BiSearchAlt2/>
              <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies,Events,Plays,Sports and Activities"/>
          </div>
      );
};

const NavLg=()=>
{
   return (
    <>
    <div class="container mx-auto px-4 flex items-center justify-between">
        
       <div className="flex items-center w-1/2 gap-4">
          <div className="w-12 h-12">
              <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
              />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
              <BiSearchAlt2/>
              <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies,Events,Plays,Sports and Activities"/>
          </div>
       </div>
              
       <div className="flex items-center gap-4">
              <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer"> Udaipur < BiChevronDown/></span>
              <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign in</button>

              <div className="h-8 w-8 text-white">
              <BiMenu className="w-full h-full cursor-pointer"/>
              </div>
       </div>

     </div>

    </>
   );


};



const Navbar = ()=>
{
    return (
    <>
    <nav className="bg-bms-700 p-4">
        <div className="md:hidden">                        {/*md:hidden automatically hide from lg and xl  hence this code is for mobile screen*/}
        <NavSm/>
        </div>

        <div className="hidden md:flex lg:hidden">         {/* For medium devices(Tabs) */} 
         <NavMd/>
        </div>
        
        <div className="hidden lg:flex">                   {/* For large devices */}    
         <NavLg/>
        </div>
    </nav>
    </>
    );

};
export default Navbar;