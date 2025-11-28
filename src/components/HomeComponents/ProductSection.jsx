import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Bird, 
  Scissors, 
  Drumstick, 
  Heart 
} from 'lucide-react';

// --- MOCK DATA ---
const CATEGORIES = [
  { id: 'whole', label: 'Whole Birds', icon: <Bird size={18} /> },
  { id: 'fresh', label: 'Fresh Chicken Cuts', icon: <Scissors size={18} /> },
  { id: 'special', label: 'Chicken Special Cuts', icon: <Drumstick size={18} /> },
  { id: 'giblets', label: 'Chicken Giblets', icon: <Heart size={18} /> },
];

const PRODUCTS = [
  // Special Cuts 
  {
    id: 1,
    category: 'special',
    title: "Chicken Breast Boneless",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/pic1.png" 
  },
  {
    id: 2,
    category: 'special',
    title: "Boneless Supreme",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/pic2.png"
  },
  {
    id: 3,
    category: 'special',
    title: "Chicken Lollypop",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/pic3.png"
  },
  {
    id: 4,
    category: 'special',
    title: "Mince",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/pic4.png"
  },
  {
    id: 5,
    category: 'special',
    title: "Hot Wings",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/pic3.png"
  },
  {
    id: 1,
    category: 'special',
    title: "Chicken Breast Boneless",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/pic1.png" 
  },
  {
    id: 2,
    category: 'special',
    title: "Boneless Supreme",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/pic2.png"
  },
  // Dummy data
  { id: 6, category: 'whole', title: "Whole Chicken (Skin)", desc: "Fresh whole chicken.", image: "/pic2.png" },
  { id: 7, category: 'fresh', title: "Curry Cut", desc: "Perfect for curries.", image: "/pic1.png" },
  { id: 8, category: 'giblets', title: "Chicken Liver", desc: "Nutrient rich.", image: "/pic4.png" },
];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('special');
  const scrollRef = useRef(null);

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll exactly 256px (width) + 24px (gap) = 280px
      const scrollAmount = 280; 
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-white py-20 px-4 md:px-6 font-sans">
      <div className="max-w-[1520px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <span className="bg-[#FFE4B5] text-[#2D1B28] px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm">
            Our Products
          </span>
          <h2 className="text-[#4A0E34] text-3xl md:text-5xl font-bold tracking-tight">
            Explore our Product Range
          </h2>
          <p className="text-gray-500 max-w-2xl text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Nisl lectus placerat urna nunc pellentesque porttitor odio vitae.
          </p>
        </div>

        {/* --- CATEGORY TABS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-sm
                ${activeCategory === cat.id 
                  ? "bg-[#B52A63] text-white shadow-md scale-105" 
                  : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- CAROUSEL CONTAINER --- */}
        <div className="relative group px-2 md:px-8">
          
          {/* LEFT ARROW */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#B52A63] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* RIGHT ARROW */}
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#B52A63] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>

          {/* SCROLLABLE AREA */}
          <div 
            ref={scrollRef}
            // UPDATED: gap-6 (24px) based on screenshot
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
          >
            {filteredProducts.map((product) => (
              
              // --- UPDATED WIDTH: Exactly 256px as per Figma screenshot ---
              <div 
                key={product.id} 
                className="min-w-[256px] w-[256px] shrink-0 group/card cursor-pointer"
              >
                {/* Image Card */}
                <div className="bg-white p-2 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300">
                   <div className="h-[220px] w-full rounded-[1.5rem] overflow-hidden relative">
                     <img 
                       src={product.image} 
                       alt={product.title} 
                       className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                     />
                   </div>
                </div>

                {/* Content */}
                <div className="mt-5 px-2">
                  <h3 className="text-[#8B1E45] font-bold text-lg mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                    {product.desc}
                  </p>
                  
                  <div className="w-9 h-9 bg-[#FCE7F3] rounded-full flex items-center justify-center transition-colors group-hover/card:bg-[#F9A8D4]">
                    <ArrowUpRight className="text-[#8B1E45] transition-transform duration-300 group-hover/card:rotate-45" size={18} />
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="w-full text-center py-10 text-gray-400 italic">
                No products found in this category.
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;