import React from 'react';
import { motion } from 'framer-motion';

// Mock data for the features
// Maine assume kiya hai ki aapke icons ke naam v1.png se v4.png tak hain sequence mein.
const FEATURES = [
  {
    id: 1,
    iconSrc: "/v1.png", // Icon from public folder
    title: "Farm Fresh Quality",
    description: "Sourced directly from certified local organic farms."
  },
  {
    id: 2,
    iconSrc: "/v2.png", // Icon from public folder
    title: "Chilled, Not Frozen",
    description: "Freshness consistently maintained with a strict cold chain."
  },
  {
    id: 3,
    iconSrc: "/v3.png", // Icon from public folder
    title: "Clean & Hygienic",
    description: "Processed in certified facilities with high safety standards."
  },
  {
    id: 4,
    iconSrc: "/v4.png", // Icon from public folder
    title: "Complete Traceability",
    description: "Every pack can be easily traced back to its original source."
  }
];

// Animation variants
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
    <section className="py-0 px-0 flex   justify-center bg-white">
      <motion.div
        className="bg-[#FDF1E9] border border-[#FBDEC9] rounded-[32px]   w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-start divide-y md:divide-y-0 md:divide-x divide-[#FBDEC9]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {FEATURES.map((feature, index) => (
          // Container for centering the card within the divider area
          <div 
            key={feature.id} 
            className={`flex-1 flex justify-center p-6 ${
              index === 0 ? 'md:pl-0' : ''
            } ${index === FEATURES.length - 1 ? 'md:pr-0' : ''}`}
          >
            {/* --- EXACT CARD DIMENSIONS ---
              Width: 248px
              Gap: 12px (gap-3)
            */}
            <motion.div
              className="w-[248px] flex flex-col items-center text-center gap-3"
              variants={itemVariants}
            >
              <motion.div
                className="w-20 h-20 bg-[#A71077] rounded-2xl flex items-center justify-center shadow-sm shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* REPLACED LUCIDE ICON WITH IMAGE TAG */}
                <img 
                  src={feature.iconSrc} 
                  alt={feature.title} 
                  className="w-10 h-10 object-contain" // Size adjust kiya hai icon ke liye
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
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureSection;