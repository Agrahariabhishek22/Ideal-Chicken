import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// --- MOCK DATA ---
const VERTICALS_DATA = {
  breeders: {
    id: "breeders",
    title: "Breeders",
    icon: "/src/assets/Rectangle 2.png",
    overview:
      "Our breeding program is the foundation of our integrated operations, ensuring superior genetic quality and healthy offspring that meet the highest industry standards.",
    highlights: [
      "Top-quality parent stock from renowned genetic lines.",
      "State-of-the-art breeding facilities with climate control.",
      "Thorough health monitoring and biosecurity measures.",
      "Breeding programs for optimal performance.",
    ],
    images: [
      "/src/assets/Rectangle 16.png",
      "/src/assets/Rectangle 18.png",
      "/src/assets/Rectangle 19.png",
      "/src/assets/Rectangle 20.png",
    ],
  },
  hatchery: {
    id: "hatchery",
    title: "Hatchery",
    icon: "/src/assets/Rectangle 2 (1).png",
    overview:
      "Our hatchery operations are equipped with the latest incubation technology to ensure high hatchability rates and healthy day-old chicks.",
    highlights: [
      "Advanced single-stage incubation systems.",
      "Strict hygiene and sanitation protocols.",
      "Automated vaccination and grading.",
    ],
    images: [
      "/src/assets/Rectangle 19.png",
      "/src/assets/Rectangle 20.png",
    ],
  },
  feedmill: {
    id: "feedmill",
    title: "Feedmill",
    icon: "/src/assets/Rectangle 2 (2).png", // Feed icon
    overview:
      "We produce high-quality, nutritionally balanced feed to support the growth and health of our poultry at every stage.",
    highlights: [
      "Computerized batching systems.",
      "Quality control lab testing.",
    ],
    images: [
      "https://images.unsplash.com/photo-1605000797499-95a05f52bb86?auto=format&fit=crop&q=80&w=800",
    ],
  },
  breeder: {
    id: "breeder",
    title: "Breeders",
    icon: "/src/assets/Rectangle 2.png",
    overview:
      "Our breeding program is the foundation of our integrated operations, ensuring superior genetic quality and healthy offspring that meet the highest industry standards.",
    highlights: [
      "Top-quality parent stock from renowned genetic lines.",
      "State-of-the-art breeding facilities with climate control.",
      "Thorough health monitoring and biosecurity measures.",
      "Breeding programs for optimal performance.",
    ],
    images: [
      "/src/assets/Rectangle 16.png",
      "/src/assets/Rectangle 18.png",
      "/src/assets/Rectangle 19.png",
      "/src/assets/Rectangle 20.png",
    ],
  },
};

const VerticalSection = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [activeData, setActiveData] = useState(null);
  const [activeArrow, setActiveArrow] = useState("right");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    // API Call logic yaha aayega
    const data = VERTICALS_DATA[category];
    if (data) {
      setActiveData(data);
      setCurrentImgIndex(0);
    } else {
      navigate("/verticals/breeders", { replace: true });
    }
  }, [category, navigate]);

  const nextImage = () => {
    if (!activeData) return;
    setCurrentImgIndex((prev) =>
      prev === activeData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!activeData) return;
    setCurrentImgIndex((prev) =>
      prev === 0 ? activeData.images.length - 1 : prev - 1
    );
  };

  if (!activeData) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="bg-[#FEFEFC] min-h-screen py-2 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- NAV TABS (Revised UI) --- */}
        <div className="flex flex-wrap justify-center gap-10 border-b border-[#EBEDF0] mb-7">
          {Object.keys(VERTICALS_DATA).map((key) => {
            const item = VERTICALS_DATA[key];
            const isActive = key === category;

            return (
              <div
                key={key}
                onClick={() => navigate(`/verticals/${key}`)}
                className={`relative flex flex-col items-center cursor-pointer group px-4 pb-4 transition-all duration-300 ${
                  // Is line se Active tab ke niche Pink Bar aayega
                  isActive
                    ? "border-b-2 border-[#8E0E65]"
                    : "border-b-2 border-transparent hover:border-gray-200"
                } -mb-[2px]`}
              >
                {/* Icon Box: Rounded Square (Squarcle) */}
                <div
                  className={`relative w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-300 mb-3 overflow-visible
                    ${
                      isActive
                        ? "bg-white border-2 border-[#A71077] shadow-lg scale-105"
                        : "bg-white/80 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:bg-white"
                    }`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-cover overflow-hidden rounded-3xl"
                  />

                  {/* Active Checkmark Badge (Top Right Corner) */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 bg-[#A71077] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold  shadow-md z-10">
                      ✓
                    </div>
                  )}
                </div>

                {/* Text Label */}
                <span
                  className={`text-base font-semibold tracking-wide ${
                    isActive
                      ? "text-[#141414]"
                      : "text-[#595959] group-hover:text-gray-700"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Info */}
          <div className="space-y-4">
            <div>
              <h4 className="text-[#A71077] font-semibold text-base tracking-wider mb-3">
                Overview
              </h4>
              <p className="text-[#262626] text-xl leading-relaxed font-medium">
                {activeData.overview}
              </p>
            </div>
            <div className="w-full h-px bg-[#EBEDF0]"></div>{" "}
            {/* Thin divider line */}
            <div>
              <h4 className="text-[#A71077] font-semibold text-base tracking-wider mb-5">
                Key Highlights
              </h4>
              <ul className="space-y-4">
                {activeData.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    {/* Pink Checkbox Icon */}
                    <span className="flex-shrink-0 w-6 h-6 bg-[#8E0E65] text-white rounded-[6px] flex items-center justify-center mt-0.5 shadow-sm">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-[#1F1F1F] font-medium text-[16px]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-4 bg-[#262626] text-base hover:bg-black text-[#FEFEFE] px-4 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-3 group">
              Get in Touch
              <div className="bg-white text-black w-6.5 h-6.5 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg
                  className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </button>
          </div>

          {/* Right Column: Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative w-full h-[400px] rounded-[30px] overflow-hidden shadow-2xl group">
              <img
                src={activeData.images[currentImgIndex]}
                alt="Main View"
                className="w-full h-full object-cover"
              />

              {/* Floating Navigation Arrows */}
              {activeData.images.length > 1 && (
                <>
                  {/* Left Arrow */}
                  <button
                    onClick={() => {
                      prevImage();
                      setActiveArrow("left"); // Click karne par Left ko active karo
                    }}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-md backdrop-blur-sm
        ${
          activeArrow === "left"
            ? "bg-[#A71077] scale-110" // Agar Active hai to Violet + Thoda Bada
            : "bg-[#000000]/40 hover:bg-[#A71077] hover:scale-105" // Inactive hai to Black
        }`}
                  >
                    ❮
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={() => {
                      nextImage();
                      setActiveArrow("right"); // Click karne par Right ko active karo
                    }}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-md backdrop-blur-sm
        ${
          activeArrow === "right"
            ? "bg-[#A71077] scale-110" // Agar Active hai to Violet + Thoda Bada
            : "bg-[#000000]/40 hover:bg-[#A71077] hover:scale-105" // Inactive hai to Black
        }`}
                  >
                    ❯
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="pl-2 flex gap-4 overflow-x-auto py-2">
              {activeData.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentImgIndex(idx)}
                  className={`relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    idx === currentImgIndex
                      ? "ring-2 ring-[#A71077] ring-offset-2 scale-95"
                      : "opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalSection;
