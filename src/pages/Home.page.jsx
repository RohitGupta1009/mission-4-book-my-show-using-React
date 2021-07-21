import React,{useState,useEffect} from "react";
import axios from "axios";



//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../PosterSlider/PosterSlider.component";




const  HomePage = () => {
   const [popularMovies,setPopularMovies]=useState([]);
   const [topRatedMovies,setTopRatedMovies]=useState([]);
   const [upcomingMovies,setUpcomingMovies]=useState([]);
   const [latestMovies,setLatestMovies]=useState([]);
   const [famousMovies,setFamousMovies]=useState([]);

   useEffect(()=>
   {
        const requestPopularMovies=async()=>
        {
          const getPopularMovies=await axios.get("/movie/popular");
          setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
   },[]);



   useEffect(()=>
   {
        const requestTopRatedMovies=async()=>
        {
          const getTopRatedMovies=await axios.get("/movie/top_rated");
          setTopRatedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
   },[]);



   useEffect(()=>
   {
        const requestUpcomingMovies=async()=>
        {
          const getUpcomingMovies=await axios.get("/movie/upcoming");
          setUpcomingMovies(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
   },[]);


   useEffect(()=>
   {
        const requestLatestMovies=async()=>
        {
          const getLatestMovies=await axios.get("/movie/popular");
          console.log(getLatestMovies);
          setLatestMovies(getLatestMovies.data.results);
        };
        requestLatestMovies();
   },[]);


   useEffect(()=>
   {
        const requestFamousMovies=async()=>
        {
          const getFamousMovies=await axios.get("/movie/top_rated");
          console.log(getFamousMovies);
          setFamousMovies(getFamousMovies.data.results);
        };
        requestFamousMovies();
   },[]);





    return (
        <>
          <div className="flex flex-col gap-16">

          <div className="container mx-auto px-4">
              <h1 className="text-2xl font-bold text-gray-800 my-3"> The Best of Entertainment</h1>
            <EntertainmentCardSlider/>
          </div>

      <div className="bg-bms-800 py-12">

          <div className="container mx-auto px-4">
            <div className="hidden items-center justify-between md:flex">
              <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
               alt="Premier"
               className="w-full h-full"/>
            </div>

            <div className="md:py-12">
              <PosterSlider images={popularMovies} title="Premieres" subtitle="Brand New Releases Every Friday" isDark={true}/>
            </div>

          </div>
     </div>

          </div>


      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={topRatedMovies} title="Online Streaming Events" isDark={false}/>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={upcomingMovies} title="Outdoor Events" isDark={false}/>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={latestMovies} title="Laughter Therapy" isDark={false}/>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={famousMovies} title="Popular Events" isDark={false}/>
      </div>



        </>
    );

};

export default HomePage;

