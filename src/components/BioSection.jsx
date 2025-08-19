import React from "react";
import ChloeKiteSurfing from "../assets/MPT_Resources/ChloeKiteSurfing.jpg";

const BioSection = () => {
  return (
    <div>
      {" "}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={ChloeKiteSurfing}
              alt="Chloe at the beach"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Bio Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              Meet Chloe
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              With 14 years of experience in the sports and fitness industry,
              Chloe paused her personal training journey in 2021 to dedicate her
              time to educating the next generation of trainers on the Sunshine
              Coast and advancing her expertise through a Bachelor of Clinical
              Exercise Physiology.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              An extreme sports enthusiast and adrenaline seeker, Chloe's
              passion for fitness extends beyond the gym. When she’s not
              coaching or training, you'll likely find her at the beach,
              mastering the waves through kitesurfing, wing foiling, or
              preparing for her next triathlon when the winds and swells calm
              down.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Before stepping into the world of personal training, Chloe honed
              her skills as a scuba diving and kitesurfing instructor. Today,
              she channels her diverse experience into helping clients achieve
              their fitness goals, with an overarching mission to create a
              healthier, happier world. If you’re up for it, she might just
              convince you to try flying a kite or exploring the underwater
              world!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BioSection;
