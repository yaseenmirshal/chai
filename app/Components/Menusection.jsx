'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductMenu() {
  const items = [
    { id: 1, image: "/chicken-steak-removebg-preview.png", name: "Steak", price: "$50", discount: "$25", rating: "5k" },
    { id: 2, image: "/burger.jpg", name: "Burger", price: "$50", discount: "$25", rating: "5k" },
    { id: 3, image: "/piza1-removebg-preview.png", name: "Pizza", price: "$50", rating: "5k" },
    { id: 4, image: "/black-burger.jpg", name: "Black Burger", price: "$50", discount: "$25", rating: "5k" },
    { id: 5, image: "/burger.jpg", name: "Special Burger", price: "$50", discount: "$25", rating: "5k" },
    { id: 6, image: "/club-burger.png", name: "Pasta", price: "$50", discount: "$25", rating: "5k" },
    { id: 7, image: "/shaway.png", name: "Combo Meal", price: "$50", discount: "$25", rating: "5k" },
    { id: 8, image: "/thai_spicy_salad-removebg-preview.png", name: "Roast Chicken", price: "$50", discount: "$25", rating: "5k" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  return (
    <div className="bg-[#F9A500] py-16 px-4 text-white text-center">
      <h2 className="text-lg font-bold text-black" data-aos="fade-down">PRODUCT MENU</h2>
      <h3 className="text-3xl mb-6 font-semibold" data-aos="fade-up">EXPLORE LATEST FOOD ITEMS</h3>

      <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up">
        {["Show All", "Fresh Juices", "Chicken Items", "Coffee", "Pizza"].map((filter, index) => (
          <button
            key={index}
            className="border border-white text-black bg-white px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300"
          >
            {filter}
          </button>
        ))}
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-lg p-4 text-center transition-transform transform hover:-translate-y-2"
            data-aos="zoom-in"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="rounded-lg mx-auto"
            />
            <div className="mt-4">
              <h4 className="text-xl font-bold text-white">{item.name}</h4>
              <div className="text-yellow-400 text-sm my-2">⭐️⭐️⭐️⭐️⭐️ ({item.rating})</div>
              <div className="flex justify-center gap-2 text-sm">
                <span className="line-through text-gray-400">{item.price}</span>
                <span className="text-red-500 font-semibold">{item.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-10 bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
        data-aos="fade-up"
      >
        VIEW ALL
      </button>
    </div>
  );
}

export default ProductMenu;
