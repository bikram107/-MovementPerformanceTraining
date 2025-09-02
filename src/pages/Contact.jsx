import React from "react";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import BackToTopButton from "../components/BackToTopButton";


const Contact = () => {
  return (
    <div>
      <ContactForm />
      <FAQ />
      <BackToTopButton />
    </div>
  );
};

export default Contact;
