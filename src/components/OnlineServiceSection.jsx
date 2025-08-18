import HomeServiceCard from "./HomeServiceCard";

import week from "../assets/week.jpg";
import fullbody from "../assets/fullbody.jpg";
import nutrition from "../assets/nutrition.jpg";

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
          title="6-Week Kitesurfing Performance Program "
          description="Build the strength, mobility, and balance needed to boost your board sports performance, especially for kitesurfing. This 6-week beta program is designed to prep your body with targeted workouts that improve control, reduce injury risk, and help you move better on and off the water. Limited early bird spots available, get in early and level up your ride."
          image={week}
          slideDirection="left"
          buttonText="Explore More"
          buttonLink={exploreMoreUrl}
          subtitle="Push Past Your Limits"
        />

        <HomeServiceCard
          title="Full Body Workout Plan"
          description="A structured and progressive fitness program designed to build strength and improve endurance from the comfort of your home."
          image={fullbody}
          slideDirection="left"
          buttonText="Explore More"
          buttonLink={exploreMoreUrl}
          subtitle="Lets start today"
        />

        <HomeServiceCard
          title="Custom Nutrition Coaching"
          description="Get personalized meal plans, expert tips, and ongoing guidance to fuel your goals with our online coaching package."
          image={nutrition}
          slideDirection="left"
          buttonText="Explore More"
          buttonLink={exploreMoreUrl}
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
