import React from "react";
import { NavLink } from "react-router-dom";
import main_logo from "../assets/main_logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-4">
              <img
                src={main_logo}
                className="cursor-pointer"
                alt="MPT Logo"
                style={{ height: "60px", width: "auto" }}
              />
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0 flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <NavLink to="/" className="hover:text-gray-400">
                Home
              </NavLink>
              <NavLink to="/services" className="hover:text-gray-400">
                Services
              </NavLink>
              <NavLink to="/contact" className="hover:text-gray-400">
                Contact
              </NavLink>
              <NavLink to="/aboutus" className="hover:text-gray-400">
                About Us
              </NavLink>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mb-6 md:mb-0 flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4 justify-center">
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
