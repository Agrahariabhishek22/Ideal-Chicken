import React from 'react';

// --- MOCK DATA ---
const CHANNELS = [
  {
    id: 1,
    title: "Farm Gate Sales",
    desc: "Live bird lifting directly from farms by traders.",
    image: "/img1.png" 
  },
  {
    id: 2,
    title: "Wholesale Live Bird Supply",
    desc: "Supplying live birds to retail outlets and markets.",
    image: "/img2.png" 
  },
  {
    id: 3,
    title: "HoReCa & Institutional Distribution",
    desc: "Tailored processed meat supply for hotels and restaurants.",
    image: "/img3.png" 
  },
  {
    id: 4,
    title: "Bulk Processed Meat Sales",
    desc: "Supply of processed products for distributors.",
    image: "/img2.png" 
  },
  {
    id: 5,
    title: "Retail & E-commerce Sales",
    desc: "Serving consumers via retail stores and online.",
    image: "/img3.png" 
  },
  {
    id: 6,
    title: "Feed Sales & Distribution",
    desc: "Providing quality poultry feed to farmers and distributors.",
    image: "/img1.png" 
  }
];

 
 
 
const DistributionSection = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 mb-12 text-center">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center gap-4">
          <span className="bg-[#FFE4B5] text-[#2D1B28] px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm">
            Our Distribution Network
          </span>
          <h2 className="text-[#4A0E34] text-3xl md:text-5xl font-bold tracking-tight">
            Comprehensive Sales Channels
          </h2>
          <p className="text-gray-500 max-w-2xl text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed in viverra mauris enim. Arcu sed iaculis nibh molestie.
          </p>
        </div>
      </div>

      {/* --- INFINITE MARQUEE WRAPPER --- */}
      <div className="relative w-full">
        
        {/* Gradient Fades (Edges smooth karne ke liye) */}
        <div className="absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-[#DFE2E6] to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-[#DFE2E6] to-transparent pointer-events-none"></div>

        {/* TRACK CONTAINER */}
        <div className="flex w-full group">
          
          {/* LOGIC CHANGE:
             Duplicate sets ko ek single container me rakha hai.
             Animation sirf -50% tak jayegi (jo ki exactly 1 set ki width hai).
             Jaise hi -50% pe pahuchega, wo wapas 0 pe jump karega, 
             par user ko pata nahi chalega kyunki Set 2 same dikhta hai Set 1 jaisa.
          */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-4 px-4 w-max">
            
            {/* Set 1 */}
            {CHANNELS.map((item) => (
              <ChannelCard key={item.id} item={item} />
            ))}

            {/* Set 2 (Duplicate for Loop) */}
            {CHANNELS.map((item) => (
              <ChannelCard key={`dup-${item.id}`} item={item} />
            ))}

          </div>
        </div>
      </div>

      {/* --- CSS FOR ANIMATION --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          /* CHANGED from -100% to -50% */
          /* -50% means it moves exactly half the total width (which equals one full set of cards) */
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee {
          display: flex;
          /* Duration thoda badhaya hai taaki smooth lage */
          animation: marquee 30s linear infinite; 
          /* width: max-content ensure karega ki cards wrap na ho */
          width: max-content;
        }
      `}</style>
    </section>
  );
};

// --- SINGLE CARD COMPONENT ---
const ChannelCard = ({ item }) => {
  return (
    <div className="w-[203px] shrink-0 flex flex-col gap-4 select-none">
      
      {/* Image Container */}
      <div className="h-[203px] w-full rounded-[16px] overflow-hidden relative shadow-sm group/image">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover/image:bg-transparent transition-colors"></div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[#1F2937] font-bold text-lg leading-tight">
          {item.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default DistributionSection;