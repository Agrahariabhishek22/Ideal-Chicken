import React from 'react';
import { motion } from 'framer-motion';

// Mock data for the features
const FEATURES = [
  {
    id: 1,
    iconSrc: "/v1.png",
    title: "Farm Fresh Quality",
    description: "Sourced directly from certified local organic farms."
  },
  {
    id: 2,
    iconSrc: "/v2.png",
    title: "Chilled, Not Frozen",
    description: "Freshness consistently maintained with a strict cold chain."
  },
  {
    id: 3,
    iconSrc: "/v3.png",
    title: "Clean & Hygienic",
    description: "Processed in certified facilities with high safety standards."
  },
  {
    id: 4,
    iconSrc: "/v4.png",
    title: "Complete Traceability",
    description: "Every pack can be easily traced back to its original source."
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const FeatureSection = () => {
  return (
    <section className="py-0 px-0 flex justify-center bg-white">
      <motion.div
        // Container setup: 
        // Mobile: grid-cols-2 (2 cards per row)
        // Desktop: flex-row (All in one line)
        // Note: No 'divide-x' or 'divide-y' here to prevent extra borders.
        className="bg-[#FDF1E9] border border-[#FBDEC9] rounded-[32px] w-full max-w-[1440px] grid grid-cols-2 md:flex md:flex-row justify-between items-center md:items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {FEATURES.map((feature, index) => {
          
          // --- STRICT BORDER LOGIC ---
          let borderClasses = "";

          if (index === 0) {
            // Card 1: Needs Right & Bottom on Mobile. Needs Right on Desktop.
            borderClasses = "border-r border-b md:border-b-0"; 
          } else if (index === 1) {
            // Card 2: Needs Bottom only on Mobile. Needs Right on Desktop.
            borderClasses = "border-b md:border-b-0 md:border-r";
          } else if (index === 2) {
            // Card 3: Needs Right only on Mobile. Needs Right on Desktop.
            borderClasses = "border-r";
          } else if (index === 3) {
            // Card 4: Last card, no borders needed.
            borderClasses = "";
          }

          return (
            <div 
              key={feature.id} 
              className={`
                flex-1 flex justify-center p-6 border-[#FBDEC9]
                ${borderClasses}
                ${index === 0 ? 'md:pl-0' : ''} 
                ${index === FEATURES.length - 1 ? 'md:pr-0' : ''}
              `}
            >
              <motion.div
                // w-full ensure karte hain ki mobile grid mein card center rahe
                className="w-full max-w-[248px] flex flex-col items-center text-center gap-3"
                variants={itemVariants}
              >
                <motion.div
                  className="w-20 h-20 bg-[#A71077] rounded-2xl flex items-center justify-center shadow-sm shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={feature.iconSrc} 
                    alt={feature.title} 
                    className="w-10 h-10 object-contain" 
                  />
                </motion.div>
                
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#5F0944] font-bold text-xl leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#595959] text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FeatureSection;