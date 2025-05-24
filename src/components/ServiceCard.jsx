import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

const ServiceCard = ({
  productName,
  description,
  imgSrc,
  showButton = true,
}) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for scroll animations
  }, []);

  return (
    <div
      className="flex items-center space-x-8 mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mt-8"
      data-aos="fade-up" // Adding scroll animation to the card
    >
      <div className="flex-shrink-0">
        <img
          src={imgSrc}
          loading="lazy"
          className="w-full md:w-60 xl:max-w-xs rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between space-y-4 max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {productName}
        </h1>
        <p className="text-lg text-gray-600 leading-6">{description}</p>

        {/* Button section, will be hidden if showButton is false */}
        {showButton && (
          <button
            className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-orange-600"
            data-aos="zoom-in" // Button has its own animation on scroll
          >
            Book Now
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
