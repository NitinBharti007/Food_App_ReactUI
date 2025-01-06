import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Menu from "./components/Menu";
import Platforms from "./components/Platforms";
import Footer from "./components/Footer";
import './App.css'

const App = () => {
  return (
    <div className="font-sans bg-gray-50 relative">
      <Navbar />
      <Slider />
      <Menu />
      <Platforms />
      <Footer />

      {/* WhatsApp Button */}
      <a
  href="https://wa.me/9310002081"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-button fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-110"
  aria-label="Chat on WhatsApp"
>
  <i className="fab fa-whatsapp text-3xl"></i>
</a>
    </div>
  );
};

export default App;
