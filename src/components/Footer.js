// components/Footer.jsx
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Top Section: Newsletter and Quick Links */}
        <div className="grid lg:grid-cols-3 gap-12 text-center lg:text-left">
          {/* Left Column: Newsletter Subscription */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold mb-4 text-yellow-400">Stay in Touch</h3>
            <p className="text-lg text-gray-300">
              Join our newsletter for exciting updates, news, and exclusive offers directly to your inbox.
            </p>

            {/* Newsletter Form without gap */}
            <form onSubmit={handleFormSubmit} className="flex justify-center items-center mb-6 space-x-0">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="w-full sm:w-80 py-3 px-6 rounded-l-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-800 py-3 px-8 rounded-r-full hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <p className="text-lg text-green-500 font-semibold animate__animated animate__fadeIn">
                Thank you for subscribing! We're excited to keep you updated.
              </p>
            )}
          </div>

          {/* Center Column: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#home" className="hover:text-yellow-500 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-500 transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Right Column: Social Media Icons */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold mb-4 text-yellow-400">Follow Us</h3>
            <div className="flex justify-center lg:justify-start gap-8">
              {/* Social Media Icons */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 transform hover:scale-110"
              >
                <i className="fab fa-facebook-f text-4xl hover:text-yellow-500"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 transform hover:scale-110"
              >
                <i className="fab fa-twitter text-4xl hover:text-yellow-500"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 transform hover:scale-110"
              >
                <i className="fab fa-instagram text-4xl hover:text-yellow-500"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal Links */}
        <div className="text-center mt-12 text-sm text-gray-400">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#privacy" className="hover:text-yellow-500 mx-3 transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-yellow-500 mx-3 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
