'use client';
import React from "react";

function HeroSection() {
  return (
    <div className="bg-[#F9A500] h-screen relative flex items-center justify-center overflow-hidden">
      {/* Left Image */}
      <img
        src="https://chaikadai.vercel.app/static/media/juice.70e988510ab9e3739964.png"
        alt="Juice"
        className="absolute mt-52 left-48 md:left-[1070px] top-1/2 transform -translate-y-1/2 w-48 md:w-64 lg:w-[400px] object-cover"
      />

      {/* Right Image */}
      <img
        src="/hdbroast.png"
        alt="Chicken"
        className="absolute mt-56 md:right-[870px]  right-44 top-1/2 transform -translate-y-1/2 w-48 md:w-64 lg:w-[600px] object-cover"
      />

      {/* Hero Content */}
      <div className="relative mt-[-100px] md:mt-[-30px] z-10 text-center max-w-4xl">
        <p className="text-md  font-semibold text-black uppercase">
          Special for your best choice
        </p>
        <h1
            className="text-[37px] md:text-[96px] font-extrabold leading-tight text-transparent bg-clip-text  mt-4"
            style={{
            WebkitTextStroke: "2px black", // Thin stroke with the desired color
         }}
>
  DELICIOUS FOOD <br />
  NEAR YOUR TOWN
</h1>
        <div className="w-80 md:w-[500px] md:ml-48 ml-4">
        <p className="text-md  text-white mt-6">
          Welcome to our Chai Kadai, where every dish tells a story and every
          bite is an adventure at our food website.
        </p>
        </div>
        <button className="mt-6 bg-black text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300">
          Get Started
        </button>
      </div>


    

      
    </div>
  );
}

export default HeroSection;
