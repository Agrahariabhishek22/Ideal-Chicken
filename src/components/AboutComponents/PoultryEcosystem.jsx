// PoultryEcosystem.jsx
import React from "react";

export default function PoultryEcosystem() {
  const items = [
    {
      id: "breeders",
      title: "Breeders",
      text: "Expert breeding ensures strong genetic potential and health foundations.",
      img: "/src/assets/Rectangle 2.png",
    },
    {
      id: "hatchery",
      title: "Hatchery",
      text: "State-of-the-art incubation creates the perfect environment for hatching.",
      img: "/src/assets/Rectangle 2 (1).png",
    },
    {
      id: "feedmill",
      title: "Feedmill",
      text: "Nutrient-rich, custom-formulated feed for optimal bird growth.",
      img: "/src/assets/Rectangle 2 (2).png",
    },
    {
      id: "broiler",
      title: "Broiler Farming",
      text: "Raised in biosecure, stress-free environments for premium quality.",
      img: "/src/assets/Rectangle 2 (3).png",
    },
    {
      id: "meat",
      title: "Meat Processing",
      text: "Hygienic processing ensuring freshness from farm to fork.",
      img: "/src/assets/Rectangle 2 (4).png",
    },
  ];

  // Infinite loop ke liye items ko duplicate kiya
  const duplicatedItems = [...items, ...items];

  function handleNavigate(item) {
    console.log("navigate:", item.id);
  }

  return (
    <section className="w-full py-12 overflow-hidden bg-white">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite; /* Speed thodi slow ki taaki 5 cards aaram se dikhein */
        }
        .pause-on-hover:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block bg-[#FEE2AF] border border-[#FDD48A] text-[#262626] px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default">
              Business Verticals
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#4B0736]">
              Our Poultry Ecosystem
            </h2>
          </div>
          
          <p className="hidden md:block font-medium text-sm text-[#595959] max-w-md text-right">
            From breeding to processing, we ensure quality at every single step of the journey.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="w-full pause-on-hover overflow-hidden">
        {/* Sliding Track */}
        <div className="flex gap-6 w-max animate-scroll px-6">
          {duplicatedItems.map((it, index) => (
            <div
              key={`${it.id}-${index}`}
              // WIDTH FIX: w-[230px] set kiya hai taaki desktop (1280px) par ~5 cards fit ho jayein (230*5 = 1150 + gaps)
              className="group relative flex-shrink-0 w-[230px] flex flex-col gap-4 cursor-default"
            >
              {/* Image Card */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-xl bg-white"
                style={{
                  border: "8px solid #F6E7F1",
                }}
              >
                {/* Height thodi kam ki taaki 5 card wale layout me balanced lage */}
                <div className="overflow-hidden rounded-xl h-40">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                {/* Overlay removed per request for cleaner look, or keep transparent one */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none rounded-xl" />
              </div>

              {/* Text Content */}
              <div className="px-1 flex flex-col gap-1">
                <h3 className="text-lg font-bold text-[#770B54] group-hover:text-[#A71077] transition-colors leading-tight">
                  {it.title}
                </h3>
                <p className="text-xs text-[#595959] leading-relaxed line-clamp-3">
                  {it.text}
                </p>
              </div>

              {/* CTA Button */}
              <div className="px-1 mt-auto pt-1">
                <button
                  type="button"
                  aria-label={`Explore ${it.title}`}
                  onClick={() => handleNavigate(it)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F6E7F1] border border-pink-100 text-[#262626] shadow-sm transition-all duration-1000 group-hover:bg-[#770B54] group-hover:text-white group-hover:scale-100"
                >
                  <svg
                    className="w-4 h-4 -rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}