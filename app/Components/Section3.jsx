import React from "react";
import Image from "next/image";
import chickenSteak from "../assets/chicken-steak-removebg-preview.png";
import chilly from "../assets/red chilly.png";
import tomato from "../assets/tomaato.png";
import pizza from "../assets/pizzaa.png";

function Section3() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-black p-10 overflow-hidden">
      
     
      {/* Pizza Image */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 max-w-[300px] hidden sm:block opacity-80">
        <Image src={pizza} alt="Pizza" />
      </div>


      
      {/* Deal Content */}
      <div className="relative z-10 text-left md:ml-60 text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <span className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl">
            Delicious
          </span>
          <br />
          SPECIAL DEAL OFFER FOR THIS WEEK
        </h2>
        <p className="mt-3 text-yellow-400 text-lg font-bold">
          GRILLED BEEF MEAT ONLY{" "}
          <span className="text-2xl text-yellow-400">$59</span>
        </p>
        <p className="mt-5 text-sm text-gray-400">
          Restaurant, where culinary excellence meets warm hospitality in every
          dish we serve nestled in the heart of the city.
        </p>
        <button className="mt-5 bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded transition">
          ORDER NOW
        </button>
      </div>

      {/* Deal Images */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-5">
        <div className="relative max-w-[150px]">
          <Image src={tomato} alt="Tomato" />
        </div>
        <div className="relative max-w-[300px]">
          <Image src={chickenSteak} alt="Chicken Steak" />
        </div>
        <div className="absolute lg:bottom-10 md:bottom-10 bottom-[-40px]  left-10 bg-yellow-400 text-black font-bold text-lg rounded-full py-2 px-4">
          ONLY $59
        </div>
      </div>

      {/* Floating Chilli Image */}
      <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 max-w-[50px] animate-bounce">
        <Image src={chilly} alt="Chilli" />
      </div>
    </div>
  );
}

export default Section3;
