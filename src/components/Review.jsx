import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Review = () => {
  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Set the duration for animation speed
  }, []);

  return (
    <div className="my-20 bg-gray-50 md:p-20">
      <div
        className="flex items-center justify-center font-bold text-5xl lg:mt-15"
        data-aos="fade-up" // Animation effect for the title
      >
        <h1> What Our Happy Customers Think About Us</h1>
      </div>
      <div className="flex flex-wrap lg:mt-15 justify-center gap-6">
        <div data-aos="fade-up" data-aos-delay="200">
          {" "}
          {/* Delay for the first card */}
          <ReviewCard
            name="Ryan"
            profession="Real estate agent"
            testimonial="Chloe offers great value personal training. She has a wealth of knowledge and was a great help during my rehabilitation post-injury. I felt that I was in good hands as Chloe created an individual training program for me. She listened, understanding my injury and my goals. Over several weeks we were able to ramp up intensity, making me strong and able to return to the activities that I love."
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          {" "}
          {/* Delay for the second card */}
          <ReviewCard
            name="Jessica G"
            profession="Real estate agent"
            testimonial="I first started working with Chloe during the beginning of the pandemic back in 2020. She’s an absolutely fantastic trainer, with an unbelievable amount of knowledge when it comes to prep for sports (especially water and winter sports!), injury recovery/prevention and of course improving general body composition. She keeps the sessions fun, varied, and efficient… beyond all that, she listens and will work WITH you to achieve the best outcomes. Can’t recommend highly enough."
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
