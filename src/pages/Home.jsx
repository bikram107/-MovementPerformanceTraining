import React from "react";
import HeroSection from "../components/HeroSection";
import OnlineServiceSection from "../components/OnlineServiceSection";
import Review from "../components/Review";
import AppointmentSection from "../components/AppointmentSection";
import PersonalServiceSection from "../components/PersonalServiceSection";
import IntroVideo from "../components/IntroVideo";
import PdfDownloadForm from "../components/PdfDownloadForm";
import Banner from "../components/Banner";
import bannertop from "../assets/bannertop.jpg";
import bannerbottom from "../assets/bannerbottom.jpg"; 

const Home = () => {
  return (
    <div className="pt-18">
      {/* First banner */}
      <Banner
        text="Want to get started?, Get your free 3-days trial today"
        backgroundImage={bannertop}
        link="https://pro.everfit.io/Chloe-Barret-1748488826"
      />

      <HeroSection />

      {/* Second banner */}
      <Banner
        text="Ready to conquer the waves?, Get your free appointment today"
        backgroundImage={bannerbottom}
        link="https://book.squareup.com/appointments/3csg9f23yp5m96/location/LJC267RMNQ0Z6/services/TR32X4CX7YQG5OKQ46LDX473"
      />

      <IntroVideo />
      <OnlineServiceSection />
      <PersonalServiceSection />
      <AppointmentSection />
      <Review />
    </div>
  );
};

export default Home;
