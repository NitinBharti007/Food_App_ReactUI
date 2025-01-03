import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUtensils,
  FaPhoneAlt,
  FaSearch,
  FaInfoCircle,
} from "react-icons/fa";
import logo from "../assets/logoUttara.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-20 h-auto" />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-800 px-4 py-2 rounded-md">
          <FaSearch className="text-white mr-2" />
          <input
            type="text"
            placeholder="Search for dishes..."
            className="bg-transparent outline-none text-white placeholder-gray-400"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white font-semibold text-lg">
          <Link to="/" className="flex items-center hover:text-yellow-400 transition">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/menu" className="flex items-center hover:text-yellow-400 transition">
            <FaUtensils className="mr-2" /> Menu
          </Link>
          <Link to="/about" className="flex items-center hover:text-yellow-400 transition">
            <FaInfoCircle className="mr-2" /> About
          </Link>
          <Link to="/contact" className="flex items-center hover:text-yellow-400 transition">
            <FaPhoneAlt className="mr-2" /> Contact
          </Link>
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
          className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-gray-800 shadow-lg p-6 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the drawer
        >
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <img src={logo} alt="Logo" className="w-20 h-auto" />
            <FaTimes className="text-3xl cursor-pointer text-white" onClick={toggleDrawer} />
          </div>

          {/* Mobile Menu Items */}
          <ul className="space-y-6">
            <li>
              <Link
                to="/"
                className="flex items-center text-white text-lg hover:text-yellow-400 transition"
                onClick={toggleDrawer}
              >
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="flex items-center text-white text-lg hover:text-yellow-400 transition"
                onClick={toggleDrawer}
              >
                <FaUtensils className="mr-2" /> Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center text-white text-lg hover:text-yellow-400 transition"
                onClick={toggleDrawer}
              >
                <FaInfoCircle className="mr-2" /> About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center text-white text-lg hover:text-yellow-400 transition"
                onClick={toggleDrawer}
              >
                <FaPhoneAlt className="mr-2" /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
