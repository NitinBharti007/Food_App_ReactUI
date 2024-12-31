// components/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUtensils, FaPhoneAlt } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-10 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="Logo.png" // Replace with your logo URL
            alt="Logo"
            className="w-16 h-14"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white font-semibold">
          <a href="#home" className="flex items-center hover:text-yellow-400 transition">
            <FaHome className="mr-2" /> Home
          </a>
          <a href="#menu" className="flex items-center hover:text-yellow-400 transition">
            <FaUtensils className="mr-2" /> Menu
          </a>
          <a href="#contact" className="flex items-center hover:text-yellow-400 transition">
            <FaPhoneAlt className="mr-2" /> Contact
          </a>
        </div>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <div className="md:hidden text-white" onClick={toggleDrawer}>
          <FaBars className="text-3xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleDrawer}
      >
        <div
          className={`fixed top-0 right-0 w-2/5 sm:w-1/3 h-full bg-gray-800 shadow-lg p-6 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the drawer
        >
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <img
              src="Logo.png" // Replace with your logo URL
              alt="Logo"
              className="w-13 h-12"
            />
            <FaTimes
              className="text-3xl cursor-pointer text-white"
              onClick={toggleDrawer}
            />
          </div>

          {/* Mobile Menu Items */}
          <ul className="mt-8 space-y-6">
            <li>
              <a
                href="#home"
                className="flex items-center text-white text-lg hover:text-yellow-400 transition"
                onClick={toggleDrawer}
              >
                <FaHome className="mr-2" /> Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="flex items-center text-white text-lg hover:text-yellow-400 transition"
                onClick={toggleDrawer}
              >
                <FaUtensils className="mr-2" /> Menu
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center text-white text-lg hover:text-yellow-400 transition"
                onClick={toggleDrawer}
              >
                <FaPhoneAlt className="mr-2" /> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
