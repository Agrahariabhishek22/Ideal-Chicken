import React from "react";
import { ArrowUpRight } from "lucide-react"; // Make sure to install lucide-react

const QualityBanner = () => {
  return (
    <section className="w-full px-4 md:px-3 py-8">
      <div
        className="relative w-full max-w-[1440px] mx-auto rounded-3xl  overflow-hidden min-h-[180px] md:h-[184px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          // Yahan apni image ka path lagana (Image WITH badge & chicken, BUT WITHOUT text)
          backgroundImage: "url('/src/assets/About us (1).png')",
          backgroundSize: " 100% 100%",
          backgroundPosition: "center",
        }}
      >
        {/* Optional: Gradient Overlay for better text readability on left side */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#A71077]/90 via-[#A71077]/40 to-transparent pointer-events-none" /> */}

        {/* Content Container */}
        <div className="relative z-10 w-full px-6 md:px-16 py-8 flex flex-col md:flex-row items-between md:items-center justify-between gap-6">
          {/* Left Side: Text Content */}
          <div className="max-w-lg flex flex-col gap-3 ">
            <h2 className="text-2xl md:text-3xl mt-2 font-bold text-[#FEFEFE] leading-tight">
              Quality You Can Trust
            </h2>
            <p className="text-[#FEFEFE] hidden md:block text-sm md:text-base  font-medium leading-relaxed">
              Certified processes and stringent quality controls ensure every
              product meets the highest standards
            </p>
          </div>

          {/* Right Side: Partner Button */}
          {/* md:mt-0 ensures button stays right on desktop, centered/bottom on mobile if needed */}
          <div className="md:mr-30 w-50 h-30 flex items-center justify-center ">
            <img src="/src/assets/fresh-farm-logo.png" className="object-fit" alt="" />
          </div>
          <div className="mt-4 md:mt-0 flex items-center justify-center">
            <button className="group bg-[#262626] hover:bg-black text-[#FEFEFE] px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 flex items-center gap-2 shadow-lg w-[200px] ">
              Partner with us
              <span className="bg-[#FEFEFE] rounded-full p-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-[#262626]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityBanner;
