import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const ServiceCard = ({
  productName,
  description,
  imgSrc,
  showButton = true,
  buttonText = "Book Now",
  buttonLink = "#",
}) => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  if (!showButton) return null;

  return (
    <div
      className="flex flex-col md:flex-row items-center md:space-x-15 space-y-6 md:space-y-0 mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mt-8"
      data-aos="fade-up"
    >
      <div className="flex-shrink-0">
        <img
          src={imgSrc}
          loading="lazy"
          className="w-100% md:w-100 h-60 xl:max-w-xs rounded-lg"
          alt={productName}
        />
      </div>
      <div className="flex flex-col justify-between space-y-4 max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {productName}
        </h1>
        <p className="text-lg text-gray-600 leading-6">{description}</p>

        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-orange-600 text-center"
          data-aos="zoom-in"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
