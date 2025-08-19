import React from "react";

const Banner = ({ text, backgroundImage, link }) => {
  // Split text into main and subtext using comma
  const [mainText, subText] = text.split(",");

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="relative w-full h-20 sm:h-24 md:h-32 lg:h-40 cursor-pointer border-2 border-transparent hover:border-orange-500 hover:shadow-lg hover:scale-105 transform transition-all duration-300 overflow-hidden rounded-xl">
        
        {/* Banner Image */}
        <img
          src={backgroundImage}
          alt={text}
          className="w-full h-full object-cover"
        />

        {/* Dark overlay with text */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-xl px-4 text-center">
          
          {/* Main Text */}
          <h2 className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
            {mainText}
          </h2>

          {/* Sub Text */}
          {subText && (
            <h3 className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-400 drop-shadow-md mt-2">
              {subText}
            </h3>
          )}

        </div>
      </div>
    </a>
  );
};

export default Banner;
