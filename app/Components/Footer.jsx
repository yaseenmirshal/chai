import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";

import pizza from "../assets/quarterpizz.png";
import tomato from "../assets/tomaato.png";
import chilli from "../assets/chilly.png";
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      {/* Decorative Images */}
      <div className="relative">
        <Image
          src={pizza}
          alt="Pizza"
          className="absolute top-6 left-6 w-[200px] sm:w-[300px]"
        />
        <Image
          src={tomato}
          alt="Tomato"
          className="absolute top-24 right-24 w-[100px] sm:w-[150px]"
        />
        <Image
          src={chilli}
          alt="Chili"
          className="absolute bottom-[-50px] left-20 w-[50px]"
        />
      </div>

      {/* Newsletter */}
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-6">Subscribe, follow our newsletter to get more updates</p>
        <div className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {/* Logo Section */}
        <div>
          <Image src={logo} alt="Chai Kadai Logo" className="mb-4 mx-auto" width={150} height={150} />
          <p>
            Temporibus autem quibusdam officiis aut rerum necessitatibus eveniet
            voluta repudiandae.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500">
              <RiFacebookFill className="text-white text-lg" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500">
              <IoLogoTwitter className="text-white text-lg" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500">
              <GrLinkedinOption className="text-white text-lg" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500">
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Popular Food */}
        <div>
          <h3 className="text-lg font-bold mb-4">Popular Food</h3>
          <ul className="space-y-2">
            <li>Hamburger</li>
            <li>Chicken Pizza</li>
            <li>Vegetable Roll</li>
            <li>Sea Fish</li>
            <li>Fried Chicken</li>
            <li>French Fries</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p>Place Your Address Here</p>
          <p>info@chaikadai.com</p>
          <p>+91 999 999 9999</p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-bold mb-4">Opening Hour</h3>
          <p>Monday - Friday: 8am - 4pm</p>
          <p>Saturday: 8am - 12am</p>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm">
        <p>&copy; 2024 Chai Kadai. All Rights Reserved.</p>
        <p>
          <a href="#" className="text-orange-500">Privacy Policy</a> |{" "}
          <a href="#" className="text-orange-500">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
