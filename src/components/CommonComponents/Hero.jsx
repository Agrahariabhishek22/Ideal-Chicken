// Hero.jsx
import React from "react";

export default function Hero({ title, subtitle, badge, img }) {
  return (
    <section
      aria-label="Hero"
      className="relative w-full rounded-2xl overflow-hidden h-full"
      style={{
        // local uploaded image path
        backgroundImage: `url('/src/assets/${img}')`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* centered content (text is separate from the image) */}
      <div className="relative flex flex-col item-center justify-center z-10 max-w-5xl mx-auto px-6 py-10 sm:py-20 lg:py-20 text-center h-full">
        {badge && (
          <span className="mx-auto bg-[#FEFEFE] text-[#770B54] px-4 py-1.5 rounded-full text-sm font-bold mb-2 ">
            {badge}
          </span>
        )}

        <div>
          <h1
            className={`relative text-3xl sm:text-4xl font-semibold ${
              badge == "About us" ? "text-[#A71077]" : "text-[#FEFEFE]"
            } leading-tight  mb-4 w-[60%] mx-auto`}
          >
            {<>{title}</>}
          </h1>
        </div>

        <p
          className={`" max-w-2xl mx-auto ${
            badge == "About us" ? "text-[#5F0944]" : "text-[#FEFEFE]"
          } text-md sm:text-base text-[#5F0944] font-medium w-[5%]"`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
