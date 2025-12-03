import React from "react";
import Navbar from "../components/CommonComponents/Navbar";
import Footer from "../components/CommonComponents/Footer";
import VerticalSection from "../components/BusinessVerticals/VerticalSection";
import Hero from "../components/CommonComponents/Hero";
import PartnerSection from "../components/CommonComponents/PartnerSection";

const BusinessVertical = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 mb-5 md:h-[245px] gap-4">
        <div className="md:w-[70%] w-full h-[245px]">
          <Hero
            badge="Business Verticals"
            title="Our Poultry Ecosystem"
            subtitle="A connected network of verticals shaping the future of poultry, sustainability, and innovation."
            img="/Block 1 (2).png"
          />
        </div>
        <div className="w-full flex justify-center md:w-[30%]">
          <img src="/src/assets/Block 1 (1).png" alt="" className="h-[245px] object-fill w-full" />
        </div>
      </div>
      <VerticalSection />
      <PartnerSection/>
      <Footer />
    </div>
  );
};

export default BusinessVertical;
