import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Menu from "./components/Menu";
import Platforms from "./components/Platforms";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <Slider />
      <Menu />
      <Platforms />
      <Footer />
    </div>
  );
};

export default App;
