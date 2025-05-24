import React, { useEffect } from "react";
import AOS from "aos"; // Make sure AOS is installed
import "aos/dist/aos.css"; // Import the AOS CSS

const AppointmentSection = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1500, // Set duration for the animations (1.5 seconds for slower effect)
      once: true, // Trigger animation only once when it appears
    });
  }, []);

  return (
    <div>
      <section className="bg-blue-200 py-12 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl font-semibold text-gray-800 mb-6"
            data-aos="fade-up" // Animation trigger on scroll
          >
            Not Sure Which Product to Choose?
          </h2>
          <p
            className="text-gray-600 mb-8"
            data-aos="fade-up"
            data-aos-delay="300" // Add slight delay for smoother transition
          >
            Book a free appointment with our expert coach to guide you in making
            the right decision.
          </p>
          <div className="relative inline-block">
            <a
              href="https://book.squareup.com/appointments/3csg9f23yp5m96/location/LJC267RMNQ0Z6/services/TR32X4CX7YQG5OKQ46LDX473?fbclid=IwY2xjawI3W41leHRuA2FlbQIxMQABHb_9SZu0nlSKYUQgbpbRN-6mRNk0USieav9SEvbHMeGZTFuy5RJCn7-siQ_aem_pIwinx6aS3TQ_dhanTAt1w"
              target="_blank"
              className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="500" // Slight delay for button animation
            >
              Book a Free Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Adding AOS script */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </div>
  );
};

export default AppointmentSection;
