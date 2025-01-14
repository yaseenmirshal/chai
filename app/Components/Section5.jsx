'use client'
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import foods from "../assets/foods.jpg";
import yellowbckground from "../assets/yellowbckground.png";

const Section6 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-black text-white p-12 lg:p-16 space-y-8 lg:space-y-0">
      {/* Left Section */}
      <div
        className="relative bg-orange-600 text-center lg:text-left p-8 lg:p-16 rounded-lg max-w-lg"
        data-aos="fade-right"
      >
        <p className="text-yellow-400 text-lg font-bold uppercase mb-4">
          Need Any Food?
        </p>
        <h1 className="text-4xl font-bold leading-snug mb-6">
          Looking for Best Quality Food for Party?
        </h1>
        <button className="bg-yellow-400 text-black py-3 px-6 rounded font-bold transition duration-300 hover:bg-yellow-500">
          Get a Quote →
        </button>
      </div>

      {/* Right Section */}
      <div className="relative flex justify-center items-center w-full lg:w-1/2" data-aos="fade-right">
        <Image
          src={yellowbckground}
          alt="Quality Badge"
          className="absolute -left-4 top-1/2 transform -translate-y-1/2"
          width={100}
          height={100}
        />
        <Image
          src={foods}
          alt="Food Spread"
          className="rounded-lg"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default Section6;