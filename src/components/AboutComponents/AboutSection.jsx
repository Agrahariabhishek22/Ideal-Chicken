// AboutSection.jsx
import React from "react";

export default function AboutSection({
  badge = "Our Legacy",
  title = "Legacy of Ideal Chicken",
  desc = "Founded over two decades ago in Coastal Karnataka, Ideal Chicken has grown from a local initiative into one of South India's most trusted poultry brands — built on quality, freshness, and farm-to-fork transparency.",
  bullets = [
    { label: "20+ Years of Legacy", icon: "/Tick Icon.png" },
    { label: "Farm-to-Fork Supply Chain", icon: "/cart icon.png" },
    { label: "Ethically Sourced", icon: "/thumb.png" },
  ],
  stats = [
    {
      img: "/handshake.png",
      title: "1000+",
      subtitle: "Partners across India",
    },
    {
      img: "/meatHand.png",
      subtitle: "20+ States",
      title: "Delivering across",
    },
  ],
  mission = {
    title: "Our Mission",
    text: "To offer hygienic poultry products through ethical farming, ensuring transparency.",
    image: "/Vector (14).png",
  },
  vision = {
    title: "Our Vision",
    text: "To become India's trusted poultry brand, transforming the industry through technology.",
    image: "/flag icon.png",
  },
  imageUrl = "/AboutCenter.png",
}) {
  return (
    <section className="relative w-full px-6 py-9">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
        {/* LEFT: Text column */}
        <div className="lg:col-span-1">
          {/* Badge: Added hover scale */}
          <span className="border-[#FDD48A] border inline-block bg-[#FEE2AF] text-[#262626] px-3 py-1 rounded-full text-xs font-bold transition-transform duration-300 hover:scale-105 cursor-default">
            {badge}
          </span>

          <h2 className="mt-6 text-2xl md:text-4xl font-semibold text-[#4B0736] leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-[#595959] font-medium max-w-xl">{desc}</p>

          <ul className="mt-8 space-y-4">
            {bullets.map((b, i) => (
              // List Item: Added group and translate-x on hover
              <li
                key={i}
                className="flex items-center gap-4 group cursor-default transition-transform duration-300 hover:translate-x-2"
              >
                {/* Icon: Added scale on group hover */}
                <img
                  src={b.icon}
                  alt={b.label}
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-[#1F1F1F] font-semibold">{b.label}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            // Button: Added group, scale, and shadow effects
            className="group font-bold mt-8 inline-flex items-center gap-3 bg-[#262626] text-[#FEFEFE] px-3 py-2 rounded-full shadow transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Learn More
            <span className="inline-flex items-center justify-center w-6 h-6 bg-[#FEFEFE] text-[#262626] rounded-full transition-transform duration-300 group-hover:bg-gray-100">
              <svg
                // Icon: rotates to straight arrow on hover
                className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
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
        <div className="relative lg:col-span-1 flex items-start justify-center h-[460px]">
          {/* Added group to container for image zoom effect */}
          <div className="group absolute w-full max-w-md h-full mx-auto rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
            <img
              src={imageUrl}
              alt="ideal chicken plate"
              // Image: Slow zoom effect
              className="w-full rounded-2xl object-cover h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
              style={{ aspectRatio: "4/3" }}
            />

            {/* small green badge overlay: slight lift on hover */}
            <div className="absolute left-4 bottom-4 bg-[#535353]/60 text-[#FEFEFE] text-sm px-3 py-2 rounded-md flex items-center gap-2 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
              <span className="w-2 h-2 bg-[#95FF00] rounded-full block animate-pulse" />
              <span>Raised with care, delivered with trust.</span>
            </div>
          </div>
        </div>

        {/* RIGHT: stats + cards */}
        <div className="relative lg:col-span-1 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                // Stats Card: Added hover lift and shadow
                className="relative group rounded-xl overflow-hidden h-[216px] md:h-[210px] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-default"
                style={{
                  backgroundImage: `url(${s.img})`,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                aria-hidden={false}
              >
                <div className="absolute bottom-6 left-4 z-10 transition-transform duration-300 group-hover:translate-x-1">
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
    // Card: Added hover border color change, lift, and group for icon animation
    <div className={`group rounded-xl bg-white/95 p-4 border-[#F0F0F0] border transition-all duration-300 hover:border-[#FDD48A] hover:shadow-md hover:-translate-y-1 cursor-default`}>
      <div className="space-y-2">
        <div className="flex space-x-1 items-center">
          {/* Icon: Tults slightly on hover */}
          <img 
            src={image} 
            alt={title} 
            className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />
          <div className="text-sm font-semibold text-[#1F1F1F]">{title}</div>
        </div>
        <div className="mt-1 text-xs text-[#595959]">{text}</div>
      </div>
    </div>
  );
}