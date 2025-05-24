import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading with Animate.css */}
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6 animate__animated animate__fadeInUp">
          Our Mission
        </h2>

        {/* Optional small underline */}
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-8 animate__animated animate__fadeInUp animate__delay-1s"></div>

        {/* Paragraph with Animate.css */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-0.5s">
          At Movement Performance Training, our mission is simple — to inspire,
          empower, and guide individuals toward a stronger, healthier, and more
          adventurous life. We believe in creating lasting change through
          education, support, and a passion for movement, both on land and in
          the sea.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
