import React from "react";
import ServiceCard from "./ServiceCard";
import kite_surfing from "../assets/kite_surfing.jpg";
import trainer from "../assets/trainer.jpg";
import slim_girl from "../assets/slim_girl.jpg";

const ServicesSection = () => {
  return (
    <div className="px-6 mt-10 lg:px-20 py-16 bg-gray-50 max-w-7xl mx-auto">
      {/* Title Section */}
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-4">
          Our Premium Services
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-4xl">
          Whether you're looking for personalized one-on-one services or online
          packages to enhance your experience, we've got you covered. Our expert
          team is here to help you achieve your goals in fitness, wellness, and
          more!
        </p>
      </div>

      {/* Online Services Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-semibold text-center text-orange-600 mb-10">
          Online Packages
        </h2>
        <div className="flex flex-col justify-center gap-10">
          <ServiceCard
            productName="Kite Surfing"
            description="Learn the exciting sport of kite surfing with our online courses. Get started with easy-to-follow tutorials and expert tips."
            imgSrc={kite_surfing}
          />
          <ServiceCard
            productName="Online Fitness"
            description="Stay fit from the comfort of your home with our virtual fitness classes. Train with expert coaches and stay motivated."
            imgSrc={trainer}
          />
          <ServiceCard
            productName="Nutrition Coaching"
            description="Get personalized nutrition advice to meet your health goals. Our online nutritionists will guide you on your journey."
            imgSrc={slim_girl}
          />
        </div>
      </div>

      {/* Personal Services Section */}
      <div>
        <h2 className="text-3xl font-semibold text-center text-orange-600 mb-10">
          Personal Services
        </h2>
        <div className="flex flex-col justify-center gap-10">
          <ServiceCard
            productName="Personal Training"
            description="Work one-on-one with our certified trainers to achieve your fitness goals. Tailored workouts and expert guidance await."
            imgSrc={trainer}
          />
          <ServiceCard
            productName="Strength & Conditioning"
            description="Boost your athletic performance with personalized strength and conditioning programs designed by expert coaches."
            imgSrc={kite_surfing}
          />
          <ServiceCard
            productName="Weight Loss Program"
            description="Lose weight sustainably with our personalized weight loss program. Get expert guidance on workouts and nutrition."
            imgSrc={slim_girl}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
