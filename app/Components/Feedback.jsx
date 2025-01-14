'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import Customer from "../assets/img_testi_five_left_png.png";
import OrangeDecor from "../assets/orange-decor.png";
import CustomerDecor from "../assets/costomer-decor.png";
import Profile1 from "../assets/girl1.jpeg";
import Profile2 from "../assets/girl2.jpeg";
import Profile3 from "../assets/girl3.jpeg";
import Juice from "../assets/img_testi_five_right.png";
import StrawberryDecor from "../assets/strawberryy.png";

const FeedbackSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-black text-white text-center py-10 font-sans">
      <div className="mb-10">
        <h5 className="text-lg text-yellow-500" data-aos="fade-up" data-aos-duration="800">
          CUSTOMER FEEDBACK
        </h5>
        <h2
          className="text-3xl font-bold mb-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          WE'VE LOT'S OF HAPPY CUSTOMERS <br /> EXPLORE OUR FEEDBACK
        </h2>
      </div>

      <div className="flex flex-wrap justify-between items-center px-6 space-y-6 md:space-y-0">
        {/* Left Section */}
        <div
          className="relative w-full md:w-1/3 flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image
            src={Customer}
            alt="Customer"
            width={400}
            height={400}
            className="rounded-none"
          />
          <div className="absolute bottom-0 left-10 w-16 h-16">
            <Image
              src={OrangeDecor}
              alt="Orange Decor"
              width={64}
              height={64}
            />
          </div>
          <div className="absolute top-0 left-10 w-24 h-24">
            <Image
              src={CustomerDecor}
              alt="Customer Decor"
              width={96}
              height={96}
            />
          </div>
        </div>

        {/* Middle Section */}
        <div
          className="w-full md:w-1/3 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex justify-center space-x-4 mb-6">
            <Image
              src={Profile1}
              alt="Profile 1"
              width={60}
              height={60}
              className="rounded-full"
            />
            <Image
              src={Profile2}
              alt="Profile 2"
              width={60}
              height={60}
              className="rounded-full"
            />
            <Image
              src={Profile3}
              alt="Profile 3"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg">
              Renowned for its versatility in the kitchen. Red can be prepared
              in various ways from simple steaming and boiling to elaborate
              preparations.
            </p>
            <span className="block font-bold mt-4">SALVADOR I. BURTON</span>
            <span className="text-sm text-gray-500">Customer</span>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="relative w-full md:w-1/3 flex justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Image
            src={Juice}
            alt="Juice"
            width={400}
            height={400}
            className="rounded-none"
          />
          <div className="absolute top-0 right-0 w-16 h-16">
            <Image
              src={StrawberryDecor}
              alt="Strawberry Decor"
              width={64}
              height={64}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
