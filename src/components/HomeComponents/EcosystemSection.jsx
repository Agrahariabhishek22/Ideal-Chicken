import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// --- MOCK DATA ---
const ECOSYSTEM_DATA = [
  {
    id: 1,
    title: "Breeders",
    desc: "Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed in viverra.",
    image: "/Rectangle_2'1.png", // Replace with actual image
  },
  {
    id: 2,
    title: "Hatchery",
    desc: "Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed in viverra.",
    image: "/Rectangle_2'2.png", 
  },
  {
    id: 3,
    title: "Feedmill",
    desc: "Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed in viverra.",
    image: "/Rectangle_2'3.png", 
  },
  {
    id: 4,
    title: "Broiler Farming",
    desc: "Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed in viverra.",
    image: "Rectangle_2'4.png", 
  },
  {
    id: 5,
    title: "Meat Processing",
    desc: "Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed in viverra.",
    image: "/Rectangle_2.png", 
  },
];

const EcosystemSection = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden font-sans">
      <div className="max-w-[1480px] mx-auto px-4 mb-12 text-center">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center gap-4">
          <span className="bg-[#FFE4B5] text-[#2D1B28] px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm">
            Business Verticals
          </span>
          <h2 className="text-[#4A0E34] text-3xl md:text-5xl font-bold tracking-tight">
            Our Poultry Ecosystem
          </h2>
          <p className="text-gray-500 max-w-2xl text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed in viverra mauris enim. Arcu sed iaculis nibh molestie.
          </p>
        </div>
      </div>

      {/* --- ANIMATED CAROUSEL WRAPPER --- */}
      <div className="relative w-full">
        
        {/* Gradient Overlays for smooth fade effect on edges */}
        <div className="absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-[#DFE2E6] to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-[#DFE2E6] to-transparent pointer-events-none"></div>

        {/* TRACK CONTAINER */}
        <div className="flex w-full group">
          
          {/* ANIMATION TRACK */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-8 px-4 w-max">
            
            {/* FIRST SET OF CARDS */}
            {ECOSYSTEM_DATA.map((item) => (
              <Card key={item.id} item={item} />
            ))}

            {/* SECOND SET OF CARDS (Duplicate for Loop) */}
            {ECOSYSTEM_DATA.map((item) => (
              <Card key={`dup-${item.id}`} item={item} />
            ))}

          </div>
        </div>
      </div>

      {/* --- CUSTOM CSS FOR ANIMATION --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          /* UPDATED: -50% ensures it loops exactly after one full set passes */
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite; 
          width: max-content; 
        }
      `}</style>
    </section>
  );
};

// --- INDIVIDUAL CARD COMPONENT ---
const Card = ({ item }) => {
  return (
    // UPDATED WIDTH: w-[256px] fixed based on Figma
    // UPDATED GAP: gap-6 (24px) based on Figma
    <div className="w-[280px] shrink-0 flex flex-col gap-6 select-none">
      
      {/* Image with Pink Border Frame */}
      {/* Assuming visual style stays same, just dimensions changed */}
      <div className="bg-[#FCE7F3] p-2 rounded-[1.5rem] overflow-hidden">
        <div className="h-[220px] w-[260px] rounded-[1.5rem] overflow-hidden relative">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full  object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="px-2">
        <h3 className="text-[#8B1E45] font-bold text-2xl mb-2">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {item.desc}
        </p>
        
        {/* Arrow Button */}
        <button className="w-12 h-12 bg-[#FCE7F3] rounded-full flex items-center justify-center hover:bg-[#F9A8D4] transition-colors group/btn cursor-pointer">
          <ArrowUpRight className="text-[#8B1E45] transition-transform duration-300 group-hover/btn:rotate-45" size={24} />
        </button>
      </div>
    </div>
  );
};

export default EcosystemSection;