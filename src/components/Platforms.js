// components/Platforms.jsx
import React from "react";

const Platforms = () => {
  return (
    <section id="platforms" className="py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Available on Your Favorite Platforms</h2>
        <p className="text-xl mb-12">
          Enjoy a seamless experience! Order from any of your preferred platforms and indulge in our delicious meals.
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          {/* Zomato Logo and Text */}
          <div className="platform-logo-container transform transition duration-300 hover:scale-105 hover:shadow-xl p-8 rounded-xl border-2 border-gray-200 shadow-md hover:bg-yellow-100 w-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIoIr2Y33v0IdprP2CEPnEU07j1IPUUyjnw&s"
              alt="Zomato"
              className="w-32 h-32 object-contain mx-auto"
            />
            <p className="text-xl font-semibold text-gray-700 mt-4">Zomato</p>
          </div>

          {/* Swiggy Logo and Text */}
          <div className="platform-logo-container transform transition duration-300 hover:scale-105 hover:shadow-xl p-8 rounded-xl border-2 border-gray-200 shadow-md hover:bg-orange-100 w-64">
            <img
              src="https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ"
              alt="Swiggy"
              className="w-32 h-32 object-contain mx-auto"
            />
            <p className="text-xl font-semibold text-gray-700 mt-4">Swiggy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
