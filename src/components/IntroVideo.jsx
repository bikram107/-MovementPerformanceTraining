import React from "react";
import introVideo from "../assets/MPT_Resources/introVideo.mov";
import surfingInWhite from "../assets/MPT_Resources/surfingInWhite.jpg";

const IntroVideo = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 group gap-30 items-center">
        {/* Local Video */}
        <div className="w-full">
          <video
            src={introVideo}
            controls
            className="w-full rounded-2xl shadow-lg"
            poster={surfingInWhite} // optional: thumbnail before play
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition ease-in duration-250 mb-4 group-hover:text-orange-500">
            Know More From Your Trainer
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Discover the energy and experience behind our kitesurfing fitness
            journey. Our trainer shares their story, methods, and motivation to
            help you reach peak performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
