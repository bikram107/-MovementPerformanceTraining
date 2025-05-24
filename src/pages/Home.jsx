import React from "react";
import HeroSection from "../components/HeroSection";
import OnlineServiceSection from "../components/OnlineServiceSection";

import Review from "../components/Review";
import AppointmentSection from "../components/AppointmentSection";
import PersonalServiceSection from "../components/PersonalServiceSection";
import IntroVideo from "../components/IntroVideo";
import PdfDownloadForm from "../components/PdfDownloadForm";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <IntroVideo />
      <OnlineServiceSection />
      <PersonalServiceSection />
      <AppointmentSection />
      <Review />
    </div>
  );
};

export default Home;
