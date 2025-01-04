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
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10 md:py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Top Section */}
        <div className="grid gap-12 md:gap-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Newsletter Subscription */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-400">
              Stay Connected
            </h3>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Subscribe to our newsletter and stay updated with the latest
              trends, offers, and news directly in your inbox.
            </p>
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col sm:flex-row items-center max-w-lg mx-auto md:mx-0 space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="flex-grow w-full py-3 px-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            {isSubmitted && (
              <p className="text-lg text-green-500 font-medium animate-bounce mt-4 text-center md:text-left">
                Thank you for subscribing!
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-400">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-base sm:text-lg text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-400">
              Contact Us
            </h3>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Plot No. 19, Gyan Khand II, Indirapuram, Ghaziabad, Uttar Pradesh
              201014
            </p>
            <p className="text-lg font-bold text-yellow-400">+91-9310002081</p>
            <div className="flex space-x-4 sm:space-x-6">
              {[
                { href: "https://facebook.com", icon: "facebook-f" },
                { href: "https://youtube.com", icon: "youtube" },
                { href: "https://instagram.com", icon: "instagram" },
                { href: "https://linkedin.com", icon: "linkedin-in" },
              ].map(({ href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl text-gray-400 hover:text-yellow-500 transition-transform duration-300 transform hover:scale-125"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 उत्तराखंडी रस्याण. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            {["Privacy Policy", "Terms of Service"].map((text, index) => (
              <a
                key={index}
                href={`#${text.toLowerCase().replace(" ", "")}`}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
