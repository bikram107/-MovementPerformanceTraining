import React from "react";
import HomeServiceCard from "./HomeServiceCard";
import kite_surfing from "../assets/kite_surfing.jpg";
import lookingAtKite from "../assets/MPT Resources/lookingAtKite.jpg";
import ManyKites from "../assets/MPT Resources/ManyKites.jpg";
import week from "../assets/week.jpg";
import fullbody from "../assets/fullbody.jpg";
import nutrition from "../assets/nutrition.jpg";
import one_on_one from "../assets/one_on_one.jpg";
import elite from "../assets/elite.jpg";


const exploreMoreUrl = "https://pro.everfit.io/Chloe-Barret-1748488826";

const OnlineServiceSection = () => {
  return (
    <section className="bg-gradient-to-b from-white my-20 to-orange-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Discover Our Online Packages
        </h2>
        <p className="text-lg text-gray-600">
          Train anytime, anywhere — find your perfect package and start your
          journey today!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <HomeServiceCard
          title="Boardrider Foundations – Gym Edition"
          description="A beginner-friendly full-body strength and mobility program for boardriders who are new to the gym. Build a strong base with fundamental movement patterns, injury-preventative mobility work, and basic resistance exercises that support better performance on the water."
          image={one_on_one}
          slideDirection="left"
          buttonText="Explore More"
          buttonLink="https://package.everfit.io/TL990649"
          subtitle="Push Past Your Limits"
        />

        <HomeServiceCard
          title="Boardrider Foundations – Home Edition"
          description="A home-based strength and mobility training plan using body weight, resistance bands, and dumbbells. Designed for those starting out who want to improve their movement quality, strength, and confidence—all without a gym membership."
          image={one_on_one}
          slideDirection="left"
          buttonText="Explore More"
          buttonLink="https://package.everfit.io/CD282183"
          subtitle="Lets start today"
        />

        <HomeServiceCard
          title="Boardrider Engine – Gym Edition"
          description="A progressive 3-day gym program for intermediate boardriders ready to take their performance up a notch. This hybrid strength and conditioning plan blends compound lifting, stability drills, and energy system work to build real-world athleticism."
          image={nutrition}
          slideDirection="left"
          buttonText="Explore More"
          buttonLink="https://package.everfit.io/BI862404"
          subtitle="Join our forces"
        />

        <HomeServiceCard
          title="Boardrider Elite – High Performance Program"
          description="This is the signature Movement Performance Training elite athlete program, built and tested on the training blueprint of a National Freestyle Kitesurfing Champion. Designed for advanced boardriders who want to train like a pro, with a full performance system that evolves every 6 weeks."
          image={elite}
          slideDirection="left"
          buttonText="Explore More"
          buttonLink="https://package.everfit.io/DH769033"
          subtitle="Join our forces"
          />
        {/* <HomeServiceCard
          title="Custom Nutrition Coaching"
          description="Get personalized meal plans, expert tips, and ongoing guidance to fuel your goals with our online coaching package."
          image={kite_surfing}
          slideDirection="left"
          buttonText="Explore"
          subtitle="We will help you till end"
        /> */}
      </div>
    </section>
  );
};

export default OnlineServiceSection;
