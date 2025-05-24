import React from "react";
import hitByWave from "../assets/MPT Resources/hitByWave.jpg";
import smallKiteSurfing from "../assets/MPT Resources/smallKiteSurfing.JPG";

const ValuesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Core Values */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-20">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate__animated animate__fadeInRight">
            <img
              src={smallKiteSurfing}
              alt="Core Values"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-10 animate__animated animate__fadeInLeft">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">
              Our Core Values
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-3">
              <li>Passion for movement and life</li>
              <li>Empowering through education and support</li>
              <li>Commitment to health, safety, and wellbeing</li>
              <li>Respect for nature and the environment</li>
              <li>Continuous growth, learning, and innovation</li>
            </ul>
          </div>
        </div>

        {/* Business Value */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate__animated animate__fadeInLeft">
            <img
              src={hitByWave}
              alt="Business Value"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 animate__animated animate__fadeInRight">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">
              Our Business Value
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are committed to excellence, innovation, and integrity. Our
              services aim to bridge fitness and adventure, offering
              transformational experiences for every individual we work with. We
              value strong client relationships, continuous learning, and
              setting new industry standards in personal training and sports
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
