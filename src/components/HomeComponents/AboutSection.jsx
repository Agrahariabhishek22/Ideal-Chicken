import React from 'react';
import { 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Warehouse, 
  MapPin, 
  Handshake 
} from 'lucide-react';

// --- MOCK DATA: UPDATED WITH 7 LOGOS FROM IMAGE ---
// Note: You need to save the individual logo images in your public folder
const PARTNER_LOGOS = [
  { id: 1, src: "ideal-chicken-logo.png", alt: "Logoipsum Blue" },
  { id: 2, src: "/partners/logo-red.png", alt: "Logoipsum Red" },
  { id: 3, src: "/partners/logo-green.png", alt: "Logoipsum Green" },
  { id: 4, src: "/partners/logo-orange.png", alt: "Logoipsum Orange" },
  { id: 5, src: "/partners/logo-purple.png", alt: "Logoipsum Purple" },
  { id: 6, src: "/partners/logo-grey.png", alt: "Logoipsum Grey" },
  { id: 7, src: "/partners/logo-dark.png", alt: "Logoipsum Dark" },
];

const ABOUT_DATA = {
  badge: "About us",
  title: "Ideal Chicken supplies healthy, fresh chicken trusted by families in Coastal Karnataka.",
  description: "Lorem ipsum dolor sit amet consectetur. Massa vitae interdum ut pulvinar eget. Nulla elit laoreet cursus tristique aliquet orci pellentesque.",
  features: [
    "Safe, fresh, consistent supply",
    "Hygienic farms & plants"
  ],
  cta: {
    text: "Learn More",
    link: "#"
  },
  mainImage: "/Rectangle_5.png", 
  stats: [
    {
      id: 1,
      icon: <ShieldCheck size={20} />,
      title: "5+ Years",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      icon: <Warehouse size={20} />,
      title: "5 Verticals",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      icon: <MapPin size={20} />,
      title: "20+ States",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 4,
      icon: <Handshake size={20} />,
      title: "1,000+ Partners",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
};

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* === INFINITE SCROLLING LOGO BAR === */}
        <div className="w-full mb-20 border-b border-gray-300/50 pb-12 relative">
          
          {/* Gradient Edges for smooth fade */}
          <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-[#eceff2] to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-[#eceff2] to-transparent pointer-events-none"></div>

          <div className="flex w-full overflow-hidden group">
            {/* ANIMATION TRACK */}
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center">
              
              {/* We render the list 3 times to ensure seamless looping on wide screens */}
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-16 pr-16 shrink-0">
                  {PARTNER_LOGOS.map((logo) => (
                    <div 
                      key={`${setIndex}-${logo.id}`} 
                      className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer flex items-center"
                    >
                      {/* REPLACE THIS IMG TAG WITH YOUR ACTUAL IMAGE PATHS 
                         If you don't have images yet, this will show broken image icons.
                      */}
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="h-full w-auto object-contain"
                        // Fallback for demo purposes if image not found
                        onError={(e) => {
                          e.target.style.display='none';
                          e.target.nextSibling.style.display='flex';
                        }}
                      />
                      {/* Fallback Placeholder Text if Image Fails */}
                      <span className="hidden text-lg font-bold text-gray-400 whitespace-nowrap">
                        {logo.alt}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* === EXISTING CONTENT: ABOUT US GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* === COLUMN 1: TEXT CONTENT (Span 4) === */}
          <div className="lg:col-span-4 flex flex-col lg:h-[492px] lg:w-[437px] items-start gap-6">
            
            <span className="bg-[#FFE4B5] text-[#8B4513] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
              {ABOUT_DATA.badge}
            </span>

            <h2 className="text-[#4A0E34] text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight">
              {ABOUT_DATA.title}
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              {ABOUT_DATA.description}
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {ABOUT_DATA.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="bg-[#A01E65] text-white p-1 rounded-md flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-[#2D1B28] font-medium text-sm md:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-4 bg-[#1F2937] text-white pl-6 pr-2 py-2 rounded-full font-semibold flex items-center gap-4 transition-transform hover:scale-105 active:scale-95 group">
              {ABOUT_DATA.cta.text}
              <span className="bg-white text-black rounded-full p-2 transition-transform group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </button>
          </div>

          {/* === COLUMN 2: HERO IMAGE (Span 4) === */}
          <div className="lg:col-span-4 h-full">
            <div className="relative w-full h-[400px] lg:h-[492px] lg:w-[437px] min-h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={ABOUT_DATA.mainImage} 
                alt="Fresh Chicken Bowl" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </div>

          {/* === COLUMN 3: STATS GRID (Span 4) === */}
          <div className="lg:col-span-4 lg:h-[492px] lg:w-[437px] px-3" >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {ABOUT_DATA.stats.map((stat) => (
                <div 
                  key={stat.id} 
                  className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-[#A01E65] text-white rounded-lg flex items-center justify-center mb-1">
                    {stat.icon}
                  </div>
                  <h3 className="text-[#2D1B28] font-bold text-lg">
                    {stat.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- CSS FOR ANIMATION --- */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Moves 1/3rd (one full set) */
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite; 
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;