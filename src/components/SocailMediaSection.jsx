import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SocialMediaSection = () => {
  return (
    <div className="w-full px-6 py-10 bg-orange-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Connect With Us
        </h2>
        <p className="text-gray-600 mb-6">
          Follow us on social media for updates and tips
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/movementperformancetraining/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/movementperformancetraining/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-400 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-700 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-red-600 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
