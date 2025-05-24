import React from "react";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import MapSection from "../components/MapSection";
import SocialMediaSection from "../components/SocailMediaSection";

const Contact = () => {
  return (
    <div>
      <ContactForm />
      <FAQ />
      <SocialMediaSection />
      <MapSection />
    </div>
  );
};

export default Contact;
