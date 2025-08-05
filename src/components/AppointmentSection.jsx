import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Thinking from "../assets/Thinking.png";
import Point from "../assets/Point.png";

const AppointmentSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div>
      <section className="bg-blue-200 py-8 px-6 md:px-12">  {/* Reduced from py-12 to py-8 */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          
          {/* Left Side Image - Confused Person */}
          <div className="w-48 md:w-64" data-aos="fade-right">
            <img
              src={Thinking}
              alt="Confused person thinking"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text and Button Section */}
          <div className="text-center max-w-xl" data-aos="fade-up">
            {/* Match OnlineServiceSection heading size */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
              Wondering Which Package Is Right for You?
            </h2>

            {/* Match OnlineServiceSection paragraph size */}
            <p
              className="text-lg text-gray-600 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Book a free appointment with our expert coach to guide you in
              making the right decision.
            </p>

            <div
              className="relative inline-block"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <a
                href="https://book.squareup.com/appointments/3csg9f23yp5m96/location/LJC267RMNQ0Z6/services/TR32X4CX7YQG5OKQ46LDX473"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                Book a Free Appointment
              </a>
            </div>
          </div>

          {/* Right Side Image - Coach or Help Figure */}
          <div className="w-48 md:w-64" data-aos="fade-left">
            <img
              src={Point}
              alt="Helpful coach giving answer"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentSection;
