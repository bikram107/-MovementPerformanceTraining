import React from "react";
import BioSection from "../components/BioSection";
import MissionSection from "../components/MissionSection";
import ValuesSection from "../components/ValuesSection";
import CallToAction from "../components/CallToAction";
import BackToTopButton from "../components/BackToTopButton";

const AboutUs = () => {
  return (
    <div className="mt-20">
      <MissionSection />
      <BioSection />
      <ValuesSection />
      <CallToAction />
      <BackToTopButton />
    </div>
  );
};

export default AboutUs;
