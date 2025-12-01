import React from "react";
import Navbar from "../components/CommonComponents/Navbar";
import Footer from "../components/CommonComponents/Footer";
import VerticalSection from "../components/BusinessVerticals/VerticalSection";
import Hero from "../components/CommonComponents/Hero";

const BusinessVertical = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex justify-between px-6 mb-5 h-[245px] gap-4">
        <div className="w-[70%] h-full">
          <Hero
            badge="Business Verticals"
            title="Our Poultry Ecosystem"
            subtitle="A connected network of verticals shaping the future of poultry, sustainability, and innovation."
            img="/Block 1 (2).png"
          />
        </div>
        <div className="h-full hiiden md:visible w-[30%]">
          <img src="/src/assets/Block 1 (1).png" alt="" className="h-full" />
        </div>
      </div>
      <VerticalSection />
      <Footer />
    </div>
  );
};

export default BusinessVertical;
