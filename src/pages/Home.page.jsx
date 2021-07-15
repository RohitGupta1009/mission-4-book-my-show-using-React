import React from "react";


//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../PosterSlider/PosterSlider.component";


//config
import TempPosters from "../config/TempPosters.config";

const  HomePage = () => {
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
              <PosterSlider images={TempPosters} title="Premieres" subtitle="Brand New Releases Every Friday" isDark={true}/>
            </div>

          </div>
     </div>

          </div>


      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="Online Streaming Events" isDark={false}/>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="Outdoor Events" isDark={false}/>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="Laughter Therapy" isDark={false}/>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="Popular Events" isDark={false}/>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="The Latest Plays" isDark={false}/>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="Top Games & Sport Events" isDark={false}/>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="Explore Fun Activities" isDark={false}/>
      </div>




        </>
    );

};

export default HomePage;

