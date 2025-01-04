// components/Platforms.jsx
import React from "react";

const Platforms = () => {
  return (
    <section id="platforms" className="py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 text-yellow-300">Coming Soon</h2>
        <p className="text-2xl mb-12 sm:text-lg">
          Exciting news! We'll soon be available on your favorite platforms. Stay tuned for updates.
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          {/* Zomato */}
          <div className="relative transform transition duration-300 hover:scale-105 hover:shadow-xl p-8 rounded-xl border-2 border-gray-200 shadow-md bg-yellow-100 w-64 sm:w-72 md:w-80 lg:w-96">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIoIr2Y33v0IdprP2CEPnEU07j1IPUUyjnw&s"
              alt="Zomato"
              className="w-32 h-32 object-contain mx-auto"
            />
            <p className="text-xl font-semibold text-gray-700 mt-4">Zomato</p>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
              <span className="text-white text-2xl font-bold">Coming Soon</span>
            </div>
          </div>

          {/* Swiggy */}
          <div className="relative transform transition duration-300 hover:scale-105 hover:shadow-xl p-8 rounded-xl border-2 border-gray-200 shadow-md bg-orange-100 w-64 sm:w-72 md:w-80 lg:w-96">
            <img
              src="https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ"
              alt="Swiggy"
              className="w-32 h-32 object-contain mx-auto"
            />
            <p className="text-xl font-semibold text-gray-700 mt-4">Swiggy</p>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
              <span className="text-white text-2xl font-bold">Coming Soon</span>
            </div>
          </div>
        </div>
        <p className="mt-16 text-lg text-yellow-300 font-medium animate-bounce">
          Stay tuned for more exciting updates!
        </p>
      </div>
    </section>
  );
};

export default Platforms;
