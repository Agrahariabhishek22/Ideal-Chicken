import React from "react";
import { motion } from "framer-motion";

/**
 * Footer with micro-animations (Framer Motion)
 * - Uses the exact colors you provided in the Figma snippet.
 * - Mount reveal animations with subtle stagger for columns.
 * - Hover micro-animations for CTA, links and social icons.
 *
 * NOTE: replace image paths with your actual assets.
 */

const pink = "#A71077";
const dark = "#262626";
const lightBorder = "#F5F5F5";

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
      duration: 0.45,
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#F5F5F5] text-gray-300">
      <div className="w-full mx-auto px-6 lg:px-8 py-12 max-w-7xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-1 space-x-2"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {/* LEFT: logo + description + CTA */}
          <motion.div
            variants={itemFadeUp}
            className="mt-6 border-r-2 md:pr-6 border-[#F5F5F5] md:col-span-3"
          >
            <div className="flex items-start gap-4">
              <div className="w-28 h-20 flex items-center">
                <img
                  src="/ideal-chicken-logo.png"
                  alt="Ideal Chicken Logo"
                  className="w-full h-auto select-none"
                />
              </div>
            </div>

            <p className="mt-6 text-sm font-medium leading-7 text-[#262626]">
              Anupama Feeds and Farms is a poultry production and supply chain
              that specializes in distribution of quality poultry products,
              headquartered at Mangalore. Today, this fast growing small scale
              industry is widely known by the name{" "}
              <span className="text-[#A71077] font-semibold">
                Ideal Chicken
              </span>
              .
            </p>

            <motion.button
              variants={itemFadeUp}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 6px 20px rgba(167,16,119,0.12)",
              }}
              whileTap={{ scale: 0.99 }}
              className="mt-8 h-[50px] inline-flex items-center gap-3 bg-[#262626] hover:bg-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-pink-600 rounded-full px-6 py-3 text-[#FEFEFE] font-bold text-[16px] shadow-sm"
              aria-label="Explore our products"
            >
              <span>Explore Our Products</span>
              <img src="/src/assets/arrow.png" alt="" className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* MIDDLE: links columns */}
          <motion.div
            variants={itemFadeUp}
            className="mt-6 border-r-2 md:ml-5 border-[#F5F5F5] md:col-span-6 grid grid-cols-4 gap-10"
          >
            {/* each column will also animate slightly in */}
            {[
              {
                title: "Products",
                items: [
                  "Whole Birds",
                  "Fresh Chicken Cuts",
                  "Chicken Special Cuts",
                  "Chicken Giblets",
                ],
              },
              {
                title: "Verticals",
                items: [
                  "Breeders",
                  "Hatchery",
                  "Feedmill",
                  "Broiler Farming",
                  "Meat Processing",
                ],
              },
              {
                title: "About",
                items: ["Company", "Store Locations", "Contact"],
              },
              {
                title: "Resources",
                items: ["Press & Media", "Blogs", "Gallery"],
              },
            ].map((col) => (
              <motion.div key={col.title} variants={itemFadeUp}>
                <h3 className="text-[#A71077] font-bold tracking-wide uppercase text-sm">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm font-medium text-[#6E6E6E]">
                  {col.items.map((it) => (
                    <motion.li
                      key={it}
                      whileHover={{ x: 4 }}
                      className="overflow-hidden"
                    >
                      <a
                        className="relative inline-block hover:text-gray-950 transition-colors duration-180"
                        href="#"
                        aria-label={it}
                        style={{ color: undefined }} // keep Tailwind control
                      >
                        {/* subtle underline reveal on hover */}
                        <span className="relative z-10">{it}</span>
                        <span
                          aria-hidden
                          className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#A71077] transition-all duration-250"
                          style={{
                            transitionTimingFunction:
                              "cubic-bezier(.2,.9,.3,1)",
                          }}
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: contact info */}
          <motion.div variants={itemFadeUp} className="mt-6 md:col-span-3 md:ml-5">
            <h3 className="text-[15px] uppercase tracking-wider font-bold text-[#262626]">
              Get in touch
            </h3>
            <div>
              <div className="mt-2 w-12 h-0.5 bg-[#A71077] rounded-full"></div>
            </div>

            <div className="mt-4 space-y-8 text-[16px] font-medium text-[#262626]">
              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 4 }}
              >
                <img
                  src="/src/assets/phone.png"
                  alt="phone"
                  className=""
                />
                <div className="">
                  <div className="">(0824) 2230507</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 4 }}
              >
                <img
                  src="/src/assets/mail.png"
                  alt="mail"
                  className=""
                />
                <div className="">anupamafeeds@idealchicken.in</div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 4 }}
              >
                <img
                  src="/src/assets/location.png"
                  alt="location"
                  className=""
                />
                <div className="">
                  Anupama Feeds and Farms
                  <br />
                  Kalpane, Kulshekar, Mangalore, Karnataka, India
                </div>
              </motion.div>

              <motion.div className="mt-20" variants={itemFadeUp}>
                <a href="#">
                  <img
                    src="googleplay.png"
                    alt="Get it on Google Play"
                    className="h-10 transform transition-transform duration-200 hover:scale-105"
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="mt-10 border-t border-[#F5F5F5] pt-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm font-medium text-[#454545]">
              Copyright © 2015 Ideal Chicken.
            </div>

            <div className="flex items-center gap-4">
              <nav
                className="flex items-center gap-4"
                aria-label="social links"
              >
                {[
                  { alt: "Instagram", src: "/src/assets/insta.png" },
                  { alt: "Facebook", src: "/src/assets/facebook.png" },
                  { alt: "LinkedIn", src: "/src/assets/linkedin.png" },
                ].map((s) => (
                  <motion.a
                    key={s.alt}
                    href="#"
                    className="p-2 rounded-full"
                    aria-label={s.alt}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    <img src={s.src} alt={s.alt} className="w-6 h-6" />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="flex items-center font-medium text-sm text-[#454545] gap-4">
              {/* Link 1 */}
              <a
                href="#"
                className="relative group hover:text-[#A71077] transition-colors duration-300"
              >
                Privacy Policy
                {/* Underline Magic */}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#A71077] transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Dot with subtle pulse */}
              <span className="text-[#A71077] text-lg animate-pulse">•</span>

              {/* Link 2 */}
              <a
                href="#"
                className="relative group hover:text-[#A71077] transition-colors duration-300"
              >
                Cookie Policy
                {/* Underline Magic */}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#A71077] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}