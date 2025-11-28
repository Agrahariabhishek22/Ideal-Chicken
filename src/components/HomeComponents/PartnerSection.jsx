import React from 'react';
import { ArrowUpRight, Check, Award } from 'lucide-react';

const PARTNER_DATA = {
  badge: "Partner with us",
  title: "Collaborate.      Supply. Grow.",
  checklist: [
    "Safe, fresh, consistent supply",
    "Hygienic farms & plants",
    "Daily on-site inspections",
    "Delivered Fresh"
  ],
  description: "Whether you're a farmer, distributor, or retailer, partnering with Ideal Chicken gives you access to one of the best poultry supply chains in Coastal Karnataka — from superior breeding to fresh meat and eggs.",
  images: {
    food1: "/Rectangle_4.png", // Replace with actual path
    food2: "/Rectangle_5.png", // Replace with actual path
    chef: "/Rectangle_3.png"   // Replace with actual path
  }
};

const PartnerSection = () => {
  return (
    <section className="w-full bg-white font-sans">
      <div className="max-w-[1480px] mx-auto">
        
        {/* === MAIN CARD CONTAINER === */}
        <div className="bg-[#FFF8F0] rounded-[2.5rem]  w-full shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center   ">
            
            {/* === COL 1: LEFT TEXT (Span 4) === */}
            <div className="lg:col-span-4 flex flex-col items-start gap-8 ml-8 ">
              
              <div className="flex flex-col gap-6">
                <span className="self-start bg-[#FFE4B5] text-[#2D1B28] px-5 py-2 rounded-full text-sm font-bold tracking-wide">
                  {PARTNER_DATA.badge}
                </span>

                <h2 className="text-[#4A0E34] text-3xl md:text-4xl font-bold leading-tight">
                  {PARTNER_DATA.title}
                </h2>
              </div>

              {/* Checklist */}
              <div className="flex flex-col gap-5">
                {PARTNER_DATA.checklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#B52A63] flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="text-white" size={18} strokeWidth={3} />
                    </div>
                    <span className="text-[#2D1B28] font-medium text-base md:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* === COL 2: MIDDLE IMAGE GRID (Span 4) === */}
            {/* === COL 2: MIDDLE IMAGE GRID (Span 4) === */}
<div className="lg:col-span-4  ">
  <div className="grid grid-cols-2 gap-4 h-full">

    {/* Left 2 stacked images */}
    <div className="flex flex-col gap-4 relative overflow-auto">
      <div className="rounded-b-2xl ">
        <img
          src={PARTNER_DATA.images.food1}
          alt="Food 1"
          className="w-full h-full object-cover transition duration-500"
        />
      </div>

      <div className=" rounded-t-2xl  ">
        <img
          src={PARTNER_DATA.images.food2}
          alt="Food 2"
          className="w-full h-full object-cover transition duration-500"
        />
      </div>
    </div>

    {/* Right Tall Image (Chef) */}
    <div className="rounded-2xl items-center overflow-hidden h-full flex">
      <img
        src={PARTNER_DATA.images.chef}
        alt="Chef"
        className="w-full h-[68%]  object-cover transition duration-500"
      />
    </div>

  </div>
</div>

            {/* === COL 3: RIGHT CTA (Span 4) === */}
            <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:pl-8">
              
              {/* Seal / Badge Icon Placeholder */}
              {/* If you have the specific seal image, use an <img> tag here instead */}
              <div className="w-24 h-24 bg-white   border-dashed rounded-full flex items-center justify-center mb-2 animate-spin-slow">
                 <div className="bg-[#B52A63] text-white p-3 rounded-full">
                    <Award size={32} />
                 </div>
              </div>

              <p className="text-[#4A0E34] text-lg font-medium leading-relaxed">
                {PARTNER_DATA.description}
              </p>

              <button className="bg-[#B52A63] text-white pl-8 pr-2 py-2 rounded-full font-bold text-lg flex items-center gap-4 transition-all hover:bg-[#8B1E45] hover:scale-105 active:scale-95 group shadow-lg mt-2">
                Partner with us
                <span className="bg-white text-[#B52A63] rounded-full p-2.5 transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </span>
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;