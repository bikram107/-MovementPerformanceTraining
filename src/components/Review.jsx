// Review.jsx
import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <section className="my-12 bg-gray-50 px-4 py-12 sm:px-6 md:px-12 lg:px-20">
      {/* Title */}
      <h1
        className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl mb-12 max-w-4xl mx-auto"
        data-aos="fade-up"
      >
        What Our Happy Customers Think About Us
      </h1>

      {/* Review Cards Grid */}
      <div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <ReviewCard
          name="Ryan"
          profession="Real estate agent"
          testimonial="Chloe offers great value personal training. She has a wealth of knowledge and was a great help during my rehabilitation post-injury. I felt that I was in good hands as Chloe created an individual training program for me. She listened, understanding my injury and my goals. Over several weeks we were able to ramp up intensity, making me strong and able to return to the activities that I love."
        />

        <ReviewCard
          name="Jessica G"
          profession="Real estate agent"
          testimonial="I first started working with Chloe during the beginning of the pandemic back in 2020. She’s an absolutely fantastic trainer, with an unbelievable amount of knowledge when it comes to prep for sports (especially water and winter sports!), injury recovery/prevention and of course improving general body composition. She keeps the sessions fun, varied, and efficient… beyond all that, she listens and will work WITH you to achieve the best outcomes. Can’t recommend highly enough."
        />

        {/* Add more ReviewCards here if needed */}
      </div>
    </section>
  );
};

export default Review;
