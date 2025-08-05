import React, { useState } from "react";
import fitness_girl from "../assets/fitness_girl.png";
import sixweek from "../assets/sixweek.jpg";
import DownloadButton from "./DownloadButton";
import PdfDownloadForm from "./PdfDownloadForm";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleDownload = () => {
    // const link = document.createElement("a");
    // link.href = "/Fitness_Guide.pdf";
    // link.download = "MovementFitness-Guide.pdf";
    // link.click();
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  return (
    <section className="w-full bg-gray-50 py-50  ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12  ">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Unlock Your Power < br/> On and Off the Water
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Strength & mobility coaching for kitesurfers, foilers & boardriders
          </p>
          <div className="mt-8 flex items-center ">
            <a
              href="https://pro.everfit.io/Chloe-Barret-1748488826"
              target="_blank"
              rel="noopener norefferrer"
              className="inline-block px-6 py-3 text-white font-semibold bg-gray-900 rounded-md hover:bg-gray-700 transition duration-200 mx-2"
            >
              Browse Programs
            </a>

            <DownloadButton downloadFunction={handleDownload} />
            <PdfDownloadForm
              isOpen={isOpen}
              handleClose={handleClose}
              submitted={submitted}
              setSubmitted={setSubmitted}
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full  lg:w-1/2 ">
          <img
            src={sixweek}
            alt="Fitness Woman"
            className="w-[100%] h-auto rounded-xl"
            loading="lazy"
          />
        </div>
        {/* <div className="w-140  lg:w-1/2 ">
          <img
            src={fitness_girl}
            alt="Fitness Woman"
            className="w-[80%] h-auto rounded-xl"
            loading="lazy"
          />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
