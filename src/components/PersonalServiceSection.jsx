import React from "react";
import HomeServiceCard from "./HomeServiceCard";
import kite_surfing from "../assets/kite_surfing.jpg";

const PersonalServiceSection = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Work With Us One-on-One
        </h2>
        <p className="text-lg text-gray-600">
          Get the full attention you deserve with tailored personal training
          packages designed just for you.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <HomeServiceCard
          title="1-on-1 Coaching Session"
          description="Get direct access to a personal trainer who tailors each session to your unique fitness level and goals."
          image={kite_surfing}
          slideDirection="left"
          buttonText="Book Now"
        />

        <HomeServiceCard
          title="Personalized Fitness Plan"
          description="Receive a custom workout routine based on your body type, schedule, and preferences — crafted by experts."
          image={kite_surfing}
          slideDirection="left"
          buttonText="Book Now"
        />

        <HomeServiceCard
          title="Exclusive Progress Tracking"
          description="We track your progress weekly, adjust your plan, and keep you motivated to ensure long-term results."
          image={kite_surfing}
          slideDirection="left"
          buttonText="Book Now"
        />
      </div>
    </section>
  );
};

export default PersonalServiceSection;
