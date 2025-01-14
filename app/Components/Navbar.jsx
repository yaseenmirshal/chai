'use client';
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo2 from '../assets/logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-2 px-5 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-black py-2 px-5 rounded-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo2}
            alt="Chai Kadai Logo"
            className="h-12"
          />
        </div>

        {/* Hamburger Menu Button (Mobile) */}  
       
        <div className="sm:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white p-2 rounded-full shadow-md focus:outline-none"
      >
        {isMenuOpen ? (
          <AiOutlineClose className="h-6 w-6 text-white" />
        ) : (
          <AiOutlineMenu className="h-6 w-6 text-white" />
        )}
      </button>
    </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden sm:flex gap-8 w-full sm:w-auto">
          <a
            href="#home"
            className="text-white text-sm font-medium hover:text-orange-400 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-sm font-medium hover:text-orange-400 transition"
          >
            About us
          </a>
          <a
            href="#menu"
            className="text-white text-sm font-medium hover:text-orange-400 transition"
          >
            Our Menu
          </a>
          <a
            href="#booking"
            className="text-white text-sm font-medium hover:text-orange-400 transition"
          >
            Party Booking
          </a>
          <a
            href="#gallery"
            className="text-white text-sm font-medium hover:text-orange-400 transition"
          >
            Gallery
          </a>
          <a
            href="#testimonials"
            className="text-white text-sm font-medium hover:text-orange-400 transition"
          >
            Testimonials
          </a>
        </nav>

        {/* Contact and Button (Desktop) */}
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-white text-sm flex items-center">
            <i className="fa fa-phone text-orange-400 mr-2" aria-hidden="true"></i>
            Call: +99 9999 999
          </span>
          <button className="bg-[#F9A500] text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition">
            Party Booking
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white text-black p-5 rounded-lg shadow-lg">
          <nav className="flex flex-col gap-4">
            <a
              href="#home"
              className="text-sm font-medium hover:text-orange-400 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-orange-400 transition"
            >
              About us
            </a>
            <a
              href="#menu"
              className="text-sm font-medium hover:text-orange-400 transition"
            >
              Our Menu
            </a>
            <a
              href="#booking"
              className="text-sm font-medium hover:text-orange-400 transition"
            >
              Party Booking
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium hover:text-orange-400 transition"
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-orange-400 transition"
            >
              Testimonials
            </a>
          </nav>
          <div className="mt-4">
            <span className="text-sm flex items-center">
              <i className="fa fa-phone text-orange-400 mr-2" aria-hidden="true"></i>
              Call: +99 9999 999
            </span>
            <button className="bg-[#F9A500] text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition mt-4 w-full">
              Party Booking
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
