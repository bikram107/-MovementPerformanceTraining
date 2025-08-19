import React from "react";
import ServiceCard from "./ServiceCard";
import one_on_one from "../assets/one_on_one.jpg";
import trainer from "../assets/trainer.jpg";
import progress from "../assets/progress.jpg";
import strength from "../assets/strength.jpg";
import Personalised from "../assets/Personalised.jpg";
import nutrition from "../assets/nutrition.jpg";
import elite from "../assets/elite.jpg";

const everfitLink = "https://pro.everfit.io/Chloe-Barret-1748488826";
const squareLink = "https://book.squareup.com/appointments/3csg9f23yp5m96/location/LJC267RMNQ0Z6/services/TR32X4CX7YQG5OKQ46LDX473";

const ServicesSection = () => {
  return (
    <div className="px-6 mt-10 lg:px-20 py-16 bg-gray-50 max-w-[90%] mx-auto">
      {/* Title Section */}
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 tracking-wide mb-6">
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
            productName="Boardrider Foundations – Gym Edition"
            description="A beginner-friendly full-body strength and mobility program for boardriders who are new to the gym."
            imgSrc={one_on_one}
            buttonText="Purchase Package"
            buttonLink="https://package.everfit.io/TL990649"
          />
          <ServiceCard
            productName="Boardrider Foundations – Home Edition"
            description="A home-based strength and mobility training plan using body weight, resistance bands, and dumbbells."
            imgSrc={one_on_one}
            buttonText="Purchase Package"
            buttonLink="https://package.everfit.io/CD282183"
          />
          <ServiceCard
            productName="Boardrider Engine – Gym Edition"
            description="A progressive 3-day gym program for intermediate boardriders ready to take their performance up a notch."
            imgSrc={nutrition}
            buttonText="Purchase Package"
            buttonLink="https://package.everfit.io/BI862404"
          />
          <ServiceCard
            productName="Boardrider Elite – High Performance Program"
            description="This is the signature Movement Performance Training elite athlete program, built and tested on the training blueprint of a National Freestyle Kitesurfing Champion."
            imgSrc={elite}
            buttonText="Purchase Package"
            buttonLink="https://package.everfit.io/DH769033"
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
            imgSrc={Personalised}
            buttonText="Book Now"
            buttonLink={squareLink}
          />
          <ServiceCard
            productName="Strength & Conditioning"
            description="Boost your athletic performance with personalized strength and conditioning programs designed by expert coaches."
            imgSrc={strength}
            buttonText="Book Now"
            buttonLink={squareLink}
          />
          <ServiceCard
            productName="Weight Loss Program"
            description="Lose weight sustainably with our personalized weight loss program. Get expert guidance on workouts and nutrition."
            imgSrc={progress}
            buttonText="Book Now"
            buttonLink={squareLink}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
