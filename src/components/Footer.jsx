import React from "react";
import logo_sign from "../assets/logo_sign.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-300  py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-4 ">
              <img src={logo_sign} className="w-9 " />
              <div
                style={{ fontFamily: "Dancing Script" }}
                className=" text-3xl font-extrabold "
              >
                MPT
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/movementperformancetraining/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/movementperformancetraining/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Movement Performance Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
