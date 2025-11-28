import React from 'react';
// Award import hata diya gaya hai kyunki ab image use ho rahi hai
import { ArrowUpRight, Check } from 'lucide-react';

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
  collageImage: "/Group 1.png",
  // Nayi image ka path yahan add kiya hai
  sealImage: "/assest.png"
};

const PartnerSection = () => {
  return (
    <section className="w-full bg-white font-sans">
      <div className="max-w-[1480px] mx-auto">
        
        {/* === MAIN CARD CONTAINER === */}
        <div className="bg-[#FFF8F0] border border-[#FDD48A] rounded-xl  w-full shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center   ">
            
            {/* === COL 1: LEFT TEXT (Span 4) === */}
            <div className="lg:col-span-4 flex flex-col items-start gap-8 ml-8 ">
              
              <div className="flex flex-col gap-6">
                <span className="self-start bg-[#FFE4B5] border border-[#FDD48A] text-[#2D1B28] px-5 py-2 rounded-full text-sm font-bold tracking-wide">
                  {PARTNER_DATA.badge}
                </span>

                <h2 className="text-[#4A0E34] text-3xl md:text-4xl font-bold leading-tight">
                  {PARTNER_DATA.title}
                </h2>
              </div>

              {/* Checklist */}
              <div className="flex flex-col gap-2">
                {PARTNER_DATA.checklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#A71077] flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="text-white" size={18} strokeWidth={3} />
                    </div>
                    <span className="text-[#2D1B28] font-medium text-base md:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* === COL 2: MIDDLE IMAGE (Span 4) === */}
            <div className="lg:col-span-4 flex justify-center items-center p-4">
              {/* Direct Single Image */}
              <img 
                src={PARTNER_DATA.collageImage} 
                alt="Partner Collage" 
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* === COL 3: RIGHT CTA (Span 4) === */}
            <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:pl-8">
              
              {/* === UPDATED: Seal / Badge Image === */}
              {/* Icon hata kar image laga di hai. 'p-3' hata diya taaki image badi dikhe */}
              <div className="w-24 h-24    rounded-full flex items-center justify-center   animate-spin-slow overflow-hidden shadow-sm p-1">
                 <img 
                   src={PARTNER_DATA.sealImage} 
                   alt="Award Seal" 
                   className="w-full h-full object-cover rounded-full"
                 />
              </div>

             <div className='w-[70%] ml-2'>
               <p className="text-[#4A0E34] text-lg font-medium leading-relaxed">
                {PARTNER_DATA.description}
              </p>
             </div>

              <button className="bg-[#A71077] text-white pl-8 pr-2 py-2 rounded-full font-bold text-lg flex items-center gap-4 transition-all hover:bg-[#8B1E45] hover:scale-105 active:scale-95 group shadow-lg mt-2">
                Partner with us
                <span className="bg-white text-[#262626] rounded-full p-2.5 transition-transform group-hover:rotate-45">
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