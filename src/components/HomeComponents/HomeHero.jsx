import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// --- BACKEND SIMULATION ---
const HERO_DATA_MOCK = {
  heroBanner: {
    tag: "Supplying Across 20+ States",
    title: "One of the Best Bred Chicken in Coastal Karnataka",
    subtitle: "Supplying farmers, retailers, and families with healthier, hygienic poultry.",
    ctaText: "Explore Products",
    ctaLink: "/products",
    vectorImage: "Block1.png" 
  },
  cards: {
    farmImage: {
      src: "/Rectangle1.png",
      badge: "Raised with care, delivered with trust."
    },
    customers: {
      count: "5K+",
      label: "Happy Customers",
      avatars: [
        "/profile.png",
        "/profile.png",
        "/profile.png",
        "/profile.png"
      ],
      previewImage: "Vector1.png", 
      tagline: ["Trusted Farms.", "Fresh Chicken.", "Real Goodness."]
    },
    featureDish: {
      src: "Rectangle1.png",
      alt: "Fresh Chicken Lollipops"
    },
    rating: {
      score: 4.8,
      text: "Customer Rating"
    }
  }
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const HeroSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(HERO_DATA_MOCK);
  }, []);

  if (!data) return <div className="h-screen bg-white animate-pulse"></div>;

  return (
    <section className="w-full bg-white py-6 px-4 font-sans flex justify-center">
      <div className="w-full max-w-[1440px]">

        {/* MAIN LAYOUT */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-4 items-start justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            
            {/* Hero Banner */}
            <motion.div 
              variants={cardVariants}
              className="w-full lg:w-[700px] h-[500px] lg:h-[415px] relative overflow-hidden rounded-[1.5rem] bg-[#FFF5F9] flex flex-col items-center text-center shadow-xl group z-0"
            >
              <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-6 py-8">
                <span className="inline-block bg-white text-[#A01E65] px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-wider mb-4 shadow-sm border border-pink-100">
                  {data.heroBanner.tag}
                </span>

                <h1 className="text-[#A01E65] text-3xl lg:text-[2.8rem] font-bold leading-[1.2] mb-4 max-w-2xl">
                  {data.heroBanner.title}
                </h1>

                <p className="text-gray-600 text-xs md:text-[18px] font-medium mb-8 max-w-md leading-relaxed">
                  {data.heroBanner.subtitle}
                </p>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#A01E65] pl-6 pr-1.5 py-1.5 rounded-full font-extrabold text-sm md:text-base flex items-center gap-3 shadow-lg border border-pink-50 group/btn z-30"
                >
                  {data.heroBanner.ctaText}
                  <span className="bg-[#B52A63] rounded-full p-2 text-white transition-transform duration-300 group-hover/btn:rotate-45">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </span> 
                </motion.button>
              </div>

              <div className="absolute bottom-0 left-0 w-full z-10 select-none pointer-events-none">
                <img 
                  src={data.heroBanner.vectorImage} 
                  className="w-full h-auto object-cover object-bottom opacity-90" 
                  alt="Farm landscape"
                />
              </div>
            </motion.div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row gap-4">
              
              {/* Farm Card */}
              <motion.div 
                variants={cardVariants}
                className="w-full lg:w-[389px] h-[250px] lg:h-[298px] relative rounded-[1.5rem] overflow-hidden group shadow-md cursor-pointer"
              >
                <img
                  src={data.cards.farmImage.src}
                  alt="Farm"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 bg-[#333]/80 backdrop-blur-md text-white px-3 py-2 rounded-full text-[10px] font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#84CC16] rounded-full animate-pulse"></div>
                  {data.cards.farmImage.badge}
                </div>
              </motion.div>

              {/* Customers Card */}
              <motion.div 
                variants={cardVariants}
                className="w-full lg:w-[298px] h-[250px] lg:h-[298px] bg-[#FFF0F0] rounded-[1.5rem] p-4 flex flex-col shadow-sm relative overflow-hidden border border-red-50/50"
              >
                <div className="flex flex-col gap-1 z-10">
                   <div className="flex items-center -space-x-3">
                      {data.cards.customers.avatars.map((av, i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#FFF0F0] overflow-hidden">
                          <img src={av} alt="user" className="w-full h-full object-cover" />
                        </div>
                      ))}
                      <div className="w-12 h-12 rounded-full bg-[#ec64a8] border-[3px] border-[#FFF0F0] flex items-center justify-center text-[10px] font-bold text-white z-10">
                          {data.cards.customers.count}
                      </div>
                   </div>
                   <h3 className="text-[#9F2B6B] font-bold text-sm ml-1 leading-none mt-1">
                       {data.cards.customers.label}
                   </h3>
                </div>

                <div className="relative w-full flex-1 rounded-2xl overflow-hidden mt-1 group">
                   <img 
                       src={data.cards.customers.previewImage} 
                       alt="Raw Chicken" 
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                   />
                   <div className="absolute bottom-0 right-0 bg-[#FFF0F0] pl-4 pt-3 pr-2 pb-2 rounded-tl-[1.5rem]">
                      <div className="flex flex-col text-[#9F2B6B] font-extrabold text-[14px] leading-[1.15]">
                          {data.cards.customers.tagline.map((line, i) => (
                              <span key={i}>{line}</span>
                          ))}
                      </div>
                   </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* RIGHT CARD */}
          <motion.div 
            variants={cardVariants}
            className="w-full lg:w-[680px] h-[500px] lg:h-[737px] relative rounded-[2.5rem] overflow-hidden shadow-2xl group"
          >
            <img
              src={data.cards.featureDish.src}
              alt={data.cards.featureDish.alt}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

            <img src="/Frame 10.png" alt="" className='absolute bottom-2 left-2 ' />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
