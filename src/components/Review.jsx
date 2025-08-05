import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import AOS from "aos";
import "aos/dist/aos.css";
import nathanm from "../assets/nathanm.jpg";
import lisa from "../assets/lisa.jpg";
import nathank from "../assets/nathank.jpg";
import mrs from "../assets/mrs.jpg";

const Review = () => {
  useEffect(() => {
  }, []);

  return (
    <section className="my-12 bg-gray-50 px-4 py-12 sm:px-6 md:px-12 lg:px-20">
      {/* Title */}
      <h1
        className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl max-w-4xl mx-auto"
      >
        Client&apos;s Trust and Experiences
      </h1>

      {/* Subtitle */}
      <p
        className="text-center text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mt-6 mb-12 font-semibold"
      >
        Stories from those who have trained with Chloe
      </p>

      {/* Review Cards Grid */}
      <div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
      >
        <ReviewCard
          name="Nathan McIntosh"
          image={nathanm}
          testimonial="“I CAN JUMP AGAIN!!!” Thank you so much, Chloe — you’ve helped change my life, and I’ll forever be thankful."
        />

        <ReviewCard
          name="Lisa"
          image={lisa}
          testimonial={
            <>
              🏅 -6 kg in 4 months.<br />
              In just four months, I shed 6 kg and trimmed down by 6 cm around the hips, 5.5 cm around the waist, and 5 cm around the chest.<br /> My consistency and hard work truly paid off — showing how staying committed leads to real results!
            </>
          }
        />

        <ReviewCard
          name="Mc R Song"
          image={mrs}
          testimonial={
            <>
              "Chloe offers great value personal training. She has a wealth of knowledge and was a great help during my rehabilitation post-injury.<br /> I felt I was in good hands, as Chloe created a personalised program for me. She listened, understood my injury and goals, and over several weeks, we were able to ramp up intensity — helping me get strong again and return to the activities I love.<br /> I would highly recommend Chloe."
            </>
          }
        />

        <ReviewCard
          name="Nathan Katterns"
          image={nathank}
          testimonial={
            <>
              "Chloe from Movement Performance Training knows her stuff and is a great fitness trainer. I’d recommend her to anyone who loves surfing, kitesurfing, or wants to improve their fitness.<br /> She built a program tailored to my injuries and goals, and after just 3 months, I made it to the semi-finals of state titles — I was stoked to be back competing again!<br /> Chloe’s also a great motivator (even though I’m not a huge fan of the gym), and I’ve already seen strength and core improvements." <br /> Thanks, Chloe!
            </>
          }
        />
      </div>
    </section>
  );
};

export default Review;
