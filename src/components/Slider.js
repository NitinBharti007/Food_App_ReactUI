// components/Banner.jsx
import React from 'react';

const Banner = () => {
  return (
    <div className="mt-16 relative w-full h-[70vh] sm:h-[80vh] bg-cover bg-center" 
         style={{ backgroundImage: "url('https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Traditional_Kumaoni_Thaali.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center text-white p-4">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Authentic Uttarakhandi Foods</h2>
          <p className="text-xl sm:text-2xl font-light">Experience the Taste of Tradition</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
