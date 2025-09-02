import React from "react";
import Services from "../components/Services";
import AppointmentSection from "../components/AppointmentSection";
import BackToTopButton from "../components/BackToTopButton";
const ServicesPage = () => {
  return (
    <div>
      <Services />
      <AppointmentSection />
      <BackToTopButton />
    </div>
  );
};

export default ServicesPage;
