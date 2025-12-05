import React from "react";
import { TrendingUp } from "lucide-react";

const PressHero = () => {
  return (
    <section className="w-full bg-white px-6  border-t-2 border-[#F5F5F5] py-5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          {/* --- LEFT SIDE: Badge + Title --- */}
          <div className="flex flex-col items-start gap-4 animate-fade-in-left">
            {/* Badge */}
            <span className="inline-block px-4 py-1 rounded-full border border-[#F6E7F1] bg-[#FEFEFE] text-[#770B54] text-sm font-bold tracking-wider hover:scale-105 transition-transform duration-300 cursor-default shadow-sm">
              Press & Media
            </span>

            {/* Title Block */}
            <div className="flex items-center gap-4 group">
              {/* Icon Box */}
              <div className="w-10 h-10  bg-[#A71077] rounded-xl flex items-center justify-center shadow-md transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <TrendingUp className="w-6 h-6 md:w-6 md:h-6 text-[#FEFEFE] stroke-1.5" />
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-[40px] font-semibold text-[#1F1F1F] tracking-tight group-hover:text-[#A71077] transition-colors duration-300">
                In the News
              </h1>
            </div>
          </div>

          {/* --- RIGHT SIDE: Description --- */}
          <span className="text-[#4B0736] text-base md:max-w-lg md:text-right font-semibold leading-relaxed">
            Explore our media coverage and visual journey through our
            facilities, events, and operations.
          </span>
        </div>

        {/* Optional Divider Line at bottom */}
        <hr className="mt-8 border-[#F5F5F5] border" />
      </div>
    </section>
  );
};

export default PressHero;
