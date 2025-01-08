"use client"

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Svg3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Animation triggers only once
    });
  }, []);

  return (
    <div
     
      className="bg-black mt-[-55px] overflow-hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full h-auto"
      >
        <path
          fill="#F9A500"
          fillOpacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,229.3C672,235,768,181,864,186.7C960,192,1056,256,1152,266.7C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Svg3;
