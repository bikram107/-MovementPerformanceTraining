import React, { useState, useEffect } from "react";

const HomeServiceCard = ({
  title,
  description,
  image,
  scale = 1,
  slideDirection = "right",
  buttonText = "Learn More",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleFlip = () => {
    if (isMobile) setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={toggleFlip}
      className="relative group min-w-[250px] max-w-[400px] sm:min-w-[300px] mx-3 flex-shrink-0"
      style={{
        transform: `scale(${scale})`,
        opacity: scale === 1 ? 1 : 0.7,
        perspective: "1000px",
        height: "420px",
        cursor: isMobile ? "pointer" : "default",
      }}
    >
      <div
        className={`w-full h-full rounded-3xl shadow-xl transition-transform duration-700 ${
          !isMobile ? "group-hover:rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          // Inline transform only for mobile toggle
          transform: isMobile
            ? isFlipped
              ? "rotateY(180deg)"
              : "rotateY(0deg)"
            : undefined,
        }}
      >
        {/* Front Side */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl bg-white z-10"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <img
            src={image}
            alt={title}
            className="h-80 w-full object-cover rounded-t-3xl"
          />
          <div className="p-5 h-[calc(100%-20rem)] flex items-center justify-center">
            <h3 className="text-center text-lg font-semibold text-orange-500">
              {title}
            </h3>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100 via-white to-orange-50 p-6 rounded-3xl flex flex-col justify-between z-20"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div>
            <h4 className="text-slate-900 text-md font-bold mb-2 uppercase text-center">
              Description
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed text-center">
              {description}
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <button className="text-sm bg-orange-500 text-white px-8 py-2 rounded-full hover:bg-orange-600 transition-colors">
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .group-hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default HomeServiceCard;
