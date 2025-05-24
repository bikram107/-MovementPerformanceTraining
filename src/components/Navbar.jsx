import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo_sign from "../assets/logo_sign.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`z-50 bg-white shadow-md transition-transform duration-300 fixed top-0 w-full ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img src={logo_sign} className="w-9" alt="Logo" />
          <div className="font-semibold text-3xl">MPT</div>
        </div>

        <div className="md:flex md:mr-40 items-center space-x-10 font-semibold hidden">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `pb-1 transform ${
                isActive
                  ? "border-b-4 border-orange-400 text-orange-500 -translate-y-1"
                  : "hover:text-gray-400"
              } transition-transform transition-colors duration-300 ease-in-out`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/services"}
            className={({ isActive }) =>
              `pb-1 transform ${
                isActive
                  ? "border-b-4 border-orange-400 text-orange-500 -translate-y-1"
                  : "hover:text-gray-400"
              } transition-transform transition-colors duration-300 ease-in-out`
            }
          >
            Services
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `pb-1 transform ${
                isActive
                  ? "border-b-4 border-orange-400 text-orange-500 -translate-y-1"
                  : "hover:text-gray-400"
              } transition-transform transition-colors duration-300 ease-in-out`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to={"/aboutus"}
            className={({ isActive }) =>
              `pb-1 transform ${
                isActive
                  ? "border-b-4 border-orange-400 text-orange-500 -translate-y-1"
                  : "hover:text-gray-400"
              } transition-transform transition-colors duration-300 ease-in-out`
            }
          >
            About Us
          </NavLink>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {isMobile && (
        <div className="md:hidden bg-gray-700 p-4 space-y-4">
          <NavLink to="/" className="block text-white">
            Home
          </NavLink>
          <NavLink to="/about" className="block text-white">
            About
          </NavLink>
          <NavLink to="/services" className="block text-white">
            Services
          </NavLink>
          <NavLink to="/contact" className="block text-white">
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
