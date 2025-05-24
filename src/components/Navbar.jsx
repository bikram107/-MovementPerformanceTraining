import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo_sign from "../assets/logo_sign.png";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  // Close drawer when route changes
  useEffect(() => {
    setIsMobile(false);
  }, [location]);

  // Handle scroll up/down show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top Navbar */}
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
            {["/", "/services", "/contact", "/aboutus"].map((path, index) => {
              const labels = ["Home", "Services", "Contact", "About Us"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `pb-1 transform ${
                      isActive
                        ? "border-b-4 border-orange-400 text-orange-500 -translate-y-1"
                        : "hover:text-gray-400"
                    } transition-transform transition-colors duration-300 ease-in-out`
                  }
                >
                  {labels[index]}
                </NavLink>
              );
            })}
          </div>

          <div className="md:hidden" onClick={toggleMenu}>
            {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>

      {/* Overlay: clicking it will close the drawer */}
      {isMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setIsMobile(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 backdrop-blur-md bg-white/70 z-50 shadow-lg transform transition-transform duration-300 ${
          isMobile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6 font-semibold text-lg relative h-full">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-700"
            onClick={() => setIsMobile(false)}
          >
            <FaTimes size={24} />
          </button>

          <div className="mt-10 flex flex-col space-y-6">
            <NavLink
              to="/"
              className="text-orange-500"
              onClick={() => setIsMobile(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className="text-orange-500"
              onClick={() => setIsMobile(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className="text-orange-500"
              onClick={() => setIsMobile(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="text-orange-500"
              onClick={() => setIsMobile(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
