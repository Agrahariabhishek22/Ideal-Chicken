// AboutSection.jsx
import React from "react";

export default function AboutSection({
  badge = "Our Legacy",
  title = "Legacy of Ideal Chicken",
  desc = "Founded over two decades ago in Coastal Karnataka, Ideal Chicken has grown from a local initiative into one of South India's most trusted poultry brands — built on quality, freshness, and farm-to-fork transparency.",
  bullets = [
    { label: "20+ Years of Legacy", icon: "/src/assets/Tick Icon.png" },
    { label: "Farm-to-Fork Supply Chain", icon: "/src/assets/cart icon.png" },
    { label: "Ethically Sourced", icon: "/src/assets/thumb.png" },
  ],
  stats = [
    {
      img: "/src/assets/handshake.png",
      title: "1000+",
      subtitle: "Partners across India",
    },
    {
      img: "/src/assets/meatHand.png",
      subtitle: "20+ States",
      title: "Delivering across",
    },
  ],
  mission = {
    title: "Our Mission",
    text: "To offer hygienic poultry products through ethical farming, ensuring transparency.",
    image: "/src/assets/Vector.png",
  },
  vision = {
    title: "Our Vision",
    text: "To become India's trusted poultry brand, transforming the industry through technology.",
    image: "/src/assets/flag icon.png",
  },
  imageUrl = "/src/assets/AboutCenter.png",
}) {
  return (
    <section className="relative w-full px-6 py-8">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
        {/* LEFT: Text column */}
        <div className="lg:col-span-1">
          <span className="border-[#FDD48A] border inline-block bg-[#FEE2AF] text-[#262626] px-3 py-1 rounded-full text-xs font-bold">
            {badge}
          </span>

          <h2 className="mt-6 text-2xl md:text-4xl font-semibold text-[#4B0736] leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-[#595959] font-medium max-w-xl">{desc}</p>

          <ul className="mt-8 space-y-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-4">
                <img src={b.icon} alt={b.label} className="w-6 h-6" />
                <span className="text-[#1F1F1F] font-semibold">{b.label}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="font-bold mt-8 inline-flex items-center gap-3 bg-[#262626] text-[#FEFEFE] px-3 py-2 rounded-full shadow hover:opacity-95"
          >
            Learn More
            <span className="inline-flex items-center justify-center w-6 h-6 bg-[#FEFEFE] text-[#262626] rounded-full">
              <svg
                className="-rotate-45" // <--- Ye line add kar di hai
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* CENTER: Image */}
        <div className="relative   lg:col-span-1 flex items-start justify-center h-[460px] ">
          <div className="absolute   w-full max-w-md h-full mx-auto rounded-2xl overflow-hidden">
            <img
              src={imageUrl}
              alt="ideal chicken plate"
              className="w-full rounded-2xl object-cover h-full"
              style={{ aspectRatio: "4/3" }}
            />

            {/* small green badge overlay bottom-left */}
            <div className="absolute left-4 bottom-4 bg-[#535353]/60  text-[#FEFEFE] text-sm px-3 py-2 rounded-md flex items-center gap-2">
              <span className="w-2 h-2 bg-[#95FF00] rounded-full block" />
              <span>Raised with care, delivered with trust.</span>
            </div>
          </div>
        </div>

        {/* RIGHT: stats + cards */}
         <div className="relative  lg:col-span-1 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="relative rounded-xl  overflow-hidden  h-[216px] md:h-[210px]"
                style={{
                  backgroundImage: `url(${s.img})`,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                aria-hidden={false}
              >
                <div className="absolute bottom-6 left-4 z-10  ">
                  <div className="text-sm font-bold text-[#A71077]">
                    {s.title}
                  </div>
                  <div className="mt-1 text-xs text-[#1F1F1F] font-bold">
                    {s.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Card
              title={mission.title}
              text={mission.text}
              image={mission.image}
            />
            <Card
              title={vision.title}
              text={vision.text}
              image={vision.image}
            />
          </div>
        </div> 
      </div>
    </section>
  );
}

function Card({ title, text, image }) {
  return (
    <div className={`rounded-xl bg-white/95 p-4  border-[#F0F0F0] border`}>
      <div className="space-y-2">
        <div className="flex space-x-1">
          <img src={image} alt={image} />
          <div className="text-sm font-semibold text-[#1F1F1F]">{title}</div>
        </div>
        <div className="mt-1 text-xs text-[#595959]">{text}</div>
      </div>
    </div>
  );
}
