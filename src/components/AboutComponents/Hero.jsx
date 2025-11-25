// Hero.jsx
import React from "react";

export default function Hero({ title, subtitle, badge }) {
  return (
    <section
      aria-label="Hero"
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        // local uploaded image path
        backgroundImage: "url('/src/assets/Left Block.png')",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* centered content (text is separate from the image) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-28 lg:py-36 text-center">
        {badge && (
          <span className="inline-block bg-white/90 text-[#770B54] px-4 py-1 rounded-full text-sm font-bold mb-6">
            {badge}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#A71077] leading-tight mb-4">
          {
            <>
              A Legacy of Freshness, <br />
              <span className="text-[#A71077]">Trust, and Quality</span>
            </>
          }
        </h1>

        <p className="max-w-2xl mx-auto text-md sm:text-base text-[#5F0944]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
