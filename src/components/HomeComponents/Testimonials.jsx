import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- MOCK DATA ---
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Ideal Chicken completely changed how we manage our poultry operations. The analytics dashboard is intuitive, and we've seen a 20% boost in efficiency since switching over!",
    name: "Anjali Menon",
    role: "Operations Head",
    company: "KERALA POULTRY CO.",
    image: "/profile.png"
  },
  {
    id: 2,
    quote: "Switching to Ideal Chicken was the best decision for our restaurant. The quality is unmatched, and our customers rave about the taste. Plus, their delivery is always on time!",
    name: "Varun Patel",
    role: "Logistics Manager",
    company: "VARUN FOODS",
    image: "/profile.png"
  },
  {
    id: 3,
    quote: "Ideal Chicken's commitment to quality and hygiene is evident in every product. As a retailer, I trust them completely, and my customers appreciate the freshness.",
    name: "Divya Reddy",
    role: "Regional Director",
    company: "COASTAL FARMS",
    image: "/profile.png"
  },
  {
    id: 4,
    quote: "Since partnering with Ideal Chicken, our farm's output has soared! The real-time data insights are a game-changer, and we've cut down on waste by 15%. Highly recommend!",
    name: "Rhea Sharma",
    role: "Cultivation Lead",
    company: "NAMMA CHICKEN",
    image: "/profile.png"
  },
  {
    id: 5,
    quote: "The supply chain consistency is amazing. We haven't faced a single stock-out issue in the last 6 months since we started working with them.",
    name: "Arjun Singh",
    role: "Procurement Head",
    company: "DEHLI EATS",
    image: "/profile.png"
  },
  {
    id: 6,
    quote: "Best in class hygiene standards. The transparency in their breeding process gives us the confidence to serve the best to our customers.",
    name: "Meera Kapoor",
    role: "Quality Inspector",
    company: "FRESH MARKETS",
    image: "/profile.png"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else if (window.innerWidth < 1280) setItemsPerPage(3);
      else setItemsPerPage(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < TESTIMONIALS.length - itemsPerPage) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= TESTIMONIALS.length - itemsPerPage;

  return (
    <section className="w-full bg-white py-2 lg:py-8 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-[1480px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-1 space-y-5">
          <span className="bg-[#FFE4B5] border border-[#FDD48A] text-[#2D1B28] px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm">
            Testimonials
          </span>
          <h2 className="text-[#4A0E34] text-2xl md:text-4xl font-bold tracking-tight">
            Trusted by Leading Poultry Businesses
          </h2>
          <p className="text-gray-500   lg:w-[580px] text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed in viverra mauris enim.
          </p>
        </div>

        {/* --- CAROUSEL WRAPPER --- */}
        <div className="relative w-full px-2 lg:px-4">
          
          {/* LEFT BUTTON */}
          <button 
            onClick={prevSlide}
            disabled={isPrevDisabled}
            className={`absolute -left-2 xl:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300
              ${isPrevDisabled 
                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                : "bg-[#A71077] text-white hover:bg-[#8B1E45] hover:scale-110 cursor-pointer"
              }`}
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>

          {/* RIGHT BUTTON */}
          <button 
            onClick={nextSlide}
            disabled={isNextDisabled}
            className={`absolute -right-2 xl:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300
              ${isNextDisabled 
                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                : "bg-[#A71077] text-white hover:bg-[#8B1E45] hover:scale-110 cursor-pointer"
              }`}
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>

          {/* SLIDER CONTAINER */}
          <div className="overflow-hidden w-full -mx-3 p-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {TESTIMONIALS.map((item) => (
                <div 
                  key={item.id} 
                  className="px-3 shrink-0 box-border"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  {/* UPDATED CARD DIMENSIONS:
                    - Changed min-h-[400px] to min-h-[480px] to match taller aspect ratio.
                    - h-full ensures it stretches within its flex container.
                  */}
                  <div className="bg-white border border-[#C868A9] rounded-[2.5rem] p-8 flex flex-col h-full w-full hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 lg:w-[326px] lg:h-[362px]">
                    
                    {/* UPDATED ICON: Replaced lucide icon with the new image asset */}
                    <div className="mb-6">
                      <img 
                        src="/Vector.png" // Replace with your actual path for the purple quote image
                        alt="Quote Icon" 
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    {/* Text - flex-grow pushes footer to bottom */}
                    <p className="text-[#1F2937] font-medium text-[15px] leading-7 mb-8 flex-grow">
                      {item.quote}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px border border-[#F0F0F0] mb-6 group-hover:bg-pink-50 transition-colors"></div>

                    {/* Footer */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 shadow-sm shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-[#8E0E65] font-bold text-lg leading-none">
                          {item.name}
                        </h4>
                        <span className="text-[#6E6E6E] text-xs mt-1 font-medium">
                          {item.role}
                        </span>
                        <span className="text-[#C868A9] text-[10px] font-bold tracking-widest mt-0.5 uppercase">
                          {item.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;