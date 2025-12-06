import React from 'react';

// --- MOCK DATA (6 Items) ---
const CHANNELS = [
  {
    id: 1,
    title: "Farm Gate Sales",
    desc: "Live bird lifting directly from farms by traders.",
    image: "/img1.png" 
  },
  {
    id: 2,
    title: "Wholesale Supply",
    desc: "Supplying live birds to retail outlets and markets.",
    image: "/img2.png" 
  },
  {
    id: 3,
    title: "HoReCa Sales",
    desc: "Tailored processed meat supply for hotels.",
    image: "/img3.png" 
  },
  {
    id: 4,
    title: "Bulk Processed Meat",
    desc: "Supply of processed products for distributors.",
    image: "/img2.png" 
  },
  {
    id: 5,
    title: "Retail Sales",
    desc: "Serving consumers via retail stores and online.",
    image: "/img3.png" 
  },
  {
    id: 6,
    title: "Feed Distribution",
    desc: "Providing quality poultry feed to farmers.",
    image: "/img1.png" 
  }
];

const DistributionSection = () => {
  return (
    <section className="w-full bg-white py-10 lg:py-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 mb-8 lg:mb-16 text-center">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center gap-4">
          <span className="bg-[#FFE4B5] border border-[#FDD48A] text-[#2D1B28] px-6 py-2 rounded-full text-sm font-bold tracking-wide">
            Our Distribution Network
          </span>
          <h2 className="text-[#4A0E34] text-3xl md:text-5xl font-semibold tracking-tight">
            Comprehensive Sales Channels
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed in viverra mauris enim. Arcu sed iaculis nibh molestie.
          </p>
        </div>
      </div>

      {/* --- CARDS CONTAINER --- */}
      <div className="w-full px-4 lg:px-0">
        <div className="max-w-[1440px] mx-auto">
          
          {/* LOGIC:
             1. Mobile: 'grid grid-cols-2' -> 2 cards per row.
             2. Desktop (lg): 'lg:flex lg:flex-nowrap' -> Single row, no breaking.
             3. Alignment: 'lg:justify-center' -> Center the row.
          */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:flex lg:flex-nowrap lg:justify-center lg:gap-8">
            
            {CHANNELS.map((item) => (
              <ChannelCard key={item.id} item={item} />
            ))}

          </div>
        </div>
      </div>

    </section>
  );
};

// --- SINGLE CARD COMPONENT ---
const ChannelCard = ({ item }) => {
  return (
    // Mobile: w-full (fits grid cell)
    // Desktop: w-[203px] (fixed width) + shrink-0 (taaki squeeze na ho)
    <div className="w-full lg:w-[203px] lg:shrink-0 flex flex-col gap-3 lg:gap-4 select-none group">
      
      {/* Image Container */}
      {/* Mobile: aspect-square (keeps it square). Desktop: h-[203px] (fixed height) */}
      <div className="w-full aspect-square lg:aspect-auto lg:h-[203px] rounded-[16px] overflow-hidden relative shadow-sm group/image">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 group-hover/image:bg-transparent transition-colors"></div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1 lg:gap-2 text-left">
        <h3 className="text-[#1F2937] font-bold text-sm lg:text-lg leading-tight">
          {item.title}
        </h3>
        <p className="text-gray-500 font-medium text-[10px] lg:text-xs leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default DistributionSection;