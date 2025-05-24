import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-orange-500/30 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 animate__animated animate__fadeIn text-gray-800">
          Ready to Take Your Fitness Journey to the Next Level?
        </h2>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s text-gray-700">
          Whether you're looking to start your fitness journey or push your
          limits, we're here to help. Join our community of athletes,
          adventurers, and fitness enthusiasts today!
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="/contact"
            className="bg-white text-orange-600 py-3 px-8 rounded-lg font-bold text-lg hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-300 animate__animated animate__fadeIn animate__delay-2s"
          >
            Book a free appointment
          </a>
          <a
            href="/services"
            className="bg-slate-900 border-2 border-slate-900 py-3 px-8 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-all ease-in-out duration-300 animate__animated animate__fadeIn animate__delay-2s"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
