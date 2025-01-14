'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Import images
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/curry.jpg";
import food6 from "../assets/fishitems.jpg";
import food7 from "../assets/meals.jpg";
import food8 from "../assets/prouns.jpg";

const Carostop = () => {
  const perfumes = [
    {
      id: 1,
      name: "Prawns",
      price: "$50",
      category: "Category 1",
      image: food8, // Directly use imported image
    },
    {
      id: 2,
      name: "Meals",
      price: "$30",
      category: "Category 2",
      image: food7,
    },
    {
      id: 3,
      name: "Fish",
      price: "$23",
      category: "Category 2",
      image: food6,
    },
    {
      id: 4,
      name: "Kondattam Fish",
      price: "$60",
      category: "Category 2",
      image: food5,
    },
    {
      id: 5,
      name: "Meal",
      price: "$99",
      category: "Category 2",
      image: food4,
    },
    {
      id: 6,
      name: "Shawayi",
      price: "$99",
      category: "Category 2",
      image: food3,
    },
    {
      id: 7,
      name: "Burger",
      price: "$19",
      category: "Category 2",
      image: food2,
    },
    {
      id: 8,
      name: "Fresh Strawberry Juice",
      price: "$99",
      category: "Category 2",
      image: food1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full bg-black pt-10">
        <h2 className="text-3xl text-center text-orange-500 font-bold mb-8">
          ARE YOU HUNGRY?
        </h2>
        <div className="container mx-auto py-0 w-full">
          <Slider {...settings}>
            {perfumes.map((perfume) => (
              <div key={perfume.id} className="p-4 pb-10">
                <div className="bg-[#1e1e1e] rounded-xl overflow-hidden">
                  <div
                    style={{ backgroundImage: `url(${perfume.image.src})` }} // Use image.src for imported images
                    className="bg-cover bg-center h-72"
                  ></div>
                  <div className="p-6">
                    <h5 className="text-xl font-semibold text-[#DAA520]">{perfume.name}</h5>
                    <p className="text-lg text-[#F7F3E9]">{perfume.price}</p>
                    <div className='flex float-left w-32 h-5'>
                      <p className="text-[#f0e8d9]">{perfume.category}</p>
                    </div>
                    <div className="-mt-5 flex justify-end">
                      <a href="./Store">
                        <button className="bg-gray-700 text-[#F7F3E9] py-2 px-4 rounded-full hover:bg-[#DAA520] hover:text-[#3e2723] transition duration-300">
                          Order Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carostop;
