'use client';

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Importing images
import food1 from "../assets/mandihd.png";
import food2 from "../assets/shawarma.png";
import food3 from "../assets/burgerhd.png";
import food4 from "../assets/frenchhd.png";
import food5 from "../assets/pizzahd.jpg";
import food6 from "../assets/broasthd.jpg";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Image array using imported image variables
  const images = [food1, food2, food3, food4, food5, food6];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-10 mb-12">
        {/* Text Section */}
        <div className="lg:max-w-[50%]" data-aos="fade-right">
          <h4 className="text-orange-500 text-sm mb-4 uppercase tracking-wide">
            Our Gallery
          </h4>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            We Offer Quality Foods & <br /> Excellent Customer Service
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-300">
            Welcome to our restaurant, where culinary excellence meets warm
            hospitality in every dish we serve. Nestled in the heart of City
            Name, our eatery invites you on a journey filled with flavors and
            memories.
          </p>
        </div>
        {/* Image Section */}
        <div className="mt-8 lg:mt-0 lg:max-w-[50%]" data-aos="fade-right">
          <Image
            src={food1}
            alt="Featured Dish"
            className="rounded-lg shadow-lg"
            width={500}
            height={400}
          />
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            data-aos="zoom-in"
          >
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="rounded-lg object-cover transform transition-transform duration-300 hover:scale-105"
              width={500}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
