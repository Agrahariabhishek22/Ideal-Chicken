import React from 'react';
import { Phone, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants for a smooth entry
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Mock data based on the design
const SHOP_DATA = {
  badge: "Shop Online",
  title: "Fresh Chicken at Your Fingertips",
  features: [
    "Premium Quality Chicken",
    "Delivered Super Fresh",
  ],
  ctaTitle: "Your trusted poultry brand, now closer than ever.",
  ctaDesc: "Find fresh chicken, eggs, and more at our outlets or order via the Ideal Chicken app.",
  playStoreLink: "#",
  phoneNumber: "(0824) 2230507",
  // Replace these with your actual image paths
  phoneImage: "/down1.png",
  deliveryImage: "/boy.png",
  playStoreBtn: "/googleplay.png",
};

// Color constants from Figma selection
const COLORS = {
  violet1: '#FCE7F3', // Light pink background
  violet6: '#A01E65', // Check icon background, CTA line
  black10: '#2D1B28', // Dark text
  black11: '#1F2937', // Slightly lighter dark text
  badgeBg: '#FFE4B5', // Badge background
};

const ShopOnlineSection = () => {
  return (
    // Section padding and background color based on design
    <section className="w-full bg-white py-16 px-4 md:px-8 flex justify-center">
      <motion.div
        className="w-full max-w-[1440px] bg-violet-50 rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 shadow-sm"
        style={{ backgroundColor: COLORS.violet1 }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* --- COL 1: LEFT TEXT CONTENT --- */}
        <motion.div
          className="flex-1 flex flex-col items-start gap-8 max-w-md"
          variants={itemVariants}
        >
          {/* Badge */}
          <span
            className="px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm"
            style={{ backgroundColor: COLORS.badgeBg, color: COLORS.black10 }}
          >
            {SHOP_DATA.badge}
          </span>

          {/* Title */}
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight"
            style={{ color: COLORS.black10 }}
          >
            {SHOP_DATA.title}
          </h2>

          {/* Feature List */}
          <div className="flex flex-col gap-5">
            {SHOP_DATA.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
                  style={{ backgroundColor: COLORS.violet6 }}
                >
                  <Check className="text-white" size={18} strokeWidth={3} />
                </div>
                <span
                  className="font-medium text-base md:text-lg"
                  style={{ color: COLORS.black10 }}
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- COL 2: PHONE MOCKUP --- */}
        <motion.div
          className="flex-1 max-w-sm lg:max-w-none"
          variants={itemVariants}
        >
          <div className="rounded-[2rem] overflow-hidden shadow-lg">
            <img
              src={SHOP_DATA.phoneImage}
              alt="Ideal Chicken App on Phone"
              className="w-full h-auto lg:w-[315px] lg:h-[440px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* --- COL 3: DELIVERY PARTNER IMAGE --- */}
        <motion.div
          className="flex-1 max-w-sm lg:max-w-none"
          variants={itemVariants}
        >
          <div className="rounded-[1rem] lg:mr-4.5 overflow-hidden    bg-[#f8af7b]">
            <img
              src={SHOP_DATA.deliveryImage}
              alt="Delivery Partner"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 mix-blend-multiply"
            />
          </div>
        </motion.div>

        {/* --- COL 4: RIGHT CTA CONTENT --- */}
        <motion.div
          className="flex-1 flex flex-col items-start gap-8 max-w-md lg:pl-4"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-4">
            <h3
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: COLORS.black10 }}
            >
              {SHOP_DATA.ctaTitle}
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: COLORS.black11 }}
            >
              {SHOP_DATA.ctaDesc}
            </p>
          </div>

          {/* Play Store Button */}
          <motion.a
            href={SHOP_DATA.playStoreLink}
            className="inline-block hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={SHOP_DATA.playStoreBtn}
              alt="Get it on Google Play"
              className="h-14 w-auto"
            />
          </motion.a>

          {/* Call CTA */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-4">
              <div
                className="h-0.5 w-12"
                style={{ backgroundColor: COLORS.violet6 }}
              ></div>
              <span
                className="font-bold text-sm tracking-widest uppercase"
                style={{ color: COLORS.black10 }}
              >
                OR GIVE US A CALL
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={24} style={{ color: COLORS.violet6 }} />
              <span
                className="text-xl font-bold"
                style={{ color: COLORS.black10 }}
              >
                {SHOP_DATA.phoneNumber}
              </span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ShopOnlineSection;