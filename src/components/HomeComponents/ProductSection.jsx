import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight
} from 'lucide-react';

// --- CUSTOM SVG ICONS ---

const BirdIcon = ({ size = 18, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 512 512" 
    className={className}
  >
    <path 
      fill="currentColor" 
      d="M202.53 22.063c-14.444-.148-26.79 7.923-37.03 21.343c-56.29-1.126-97.6 65.597-97.156 161.22l63.156-59.907c-2.308 17.56-3.47 35.46-3.47 52.593c0 4.755.11 9.49.345 14.156c-22.385 1.342-38.15 22.47-38.53 56.78c-.523 47.068 28.09 101.12 63.905 120.72c8.09 4.427 15.85 6.71 23.03 7.06c2.023 25.098 5.245 57.273-4.06 77.25c-11.23 24.11 27.313 26.95 31.436 4.158c12.777 21.508 45.44 1.61 27.5-15.657c-15.42-14.84-24.725-47.46-32.78-71.967c5.65-3.972 10.35-9.736 13.843-17.125c11.793 5.728 24.353 8.843 37.405 8.843c13.042 0 25.62-3.092 37.406-8.81c3.492 7.376 8.2 13.126 13.845 17.092c-8.056 24.51-17.36 57.128-32.78 71.97c-17.942 17.265 14.722 37.164 27.5 15.656c4.122 22.79 42.665 19.95 31.436-4.157c-9.305-19.977-6.083-52.152-4.06-77.25c7.18-.35 14.94-2.633 23.03-7.06c35.815-19.6 64.428-73.652 63.906-120.72c-.38-34.326-16.13-55.456-38.53-56.78c.234-4.666.343-9.402.343-14.157c0-17.132-1.158-35.036-3.47-52.594l63.156 59.905c.443-95.64-40.88-162.37-97.187-161.22c-20.115-26.323-48.325-31.894-84.595 4.376c-17.822-17.82-33.678-25.575-47.594-25.718"
    />
  </svg>
);

const ScissorsIcon = ({ size = 18, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
    className={className}
  >
    <g fill="none" fillRule="evenodd">
      <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/>
      <path fill="currentColor" d="m12.373 8.092l.809-.809a3.001 3.001 0 1 1 5.605-2.07a3 3 0 1 1-2.07 5.606l-.809.809l.005.034c.116.926.047 1.956-.153 2.968c-.395 2.001-1.347 4.15-2.7 5.502c-1.366 1.366-2.978 1.93-4.591 1.786c-1.583-.141-3.061-.954-4.247-2.14c-1.186-1.185-1.998-2.663-2.14-4.247c-.144-1.613.42-3.225 1.786-4.591C5.221 9.587 7.37 8.636 9.37 8.24c1.013-.2 2.042-.269 2.969-.152zm5.575-.979a1 1 0 0 0-2.058 1.705l-.737.736a3.1 3.1 0 0 0-.707-.707l.736-.736a1 1 0 0 0 0-1.414a1 1 0 1 1 1.705-.644a1 1 0 0 0 1.06 1.06Zm-12.665 5.24c.99-.99 2.73-1.806 4.475-2.15c.86-.17 1.668-.214 2.33-.13c.677.084 1.101.288 1.326.513s.429.65.514 1.326c.084.663.04 1.47-.13 2.33c-.345 1.744-1.161 3.485-2.152 4.476c-.976.977-2.016 1.296-2.999 1.208c-1.013-.09-2.075-.626-3.01-1.562c-.937-.935-1.472-1.998-1.563-3.01c-.088-.984.232-2.023 1.209-3Z"/>
    </g>
  </svg>
);

const DrumstickIcon = ({ size = 18, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
    className={className}
  >
    <path 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeWidth="1.5" 
      d="M18 8.034c-2.88 0-4.873-3.023-8-3.023c-4.418 0-8 3.61-8 8.063c0 1.433.171 3.138.868 4.535c.546 1.097 1.813 1.555 3.013 1.34C10.43 18.13 14 15.002 15 13.004m0 0c-1.769.106-4-.5-6-1.947m6 1.947c2.83-.17 7-2.796 7-5.978s-5-2.016-8-.56"
    />
  </svg>
);

const HeartGibletIcon = ({ size = 18, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
    className={className}
  >
    <path 
      fill="currentColor" 
      d="M22.1 21.5L2.4 1.7L1.1 3l7.4 7.4c-.2.3-.4.5-.6.8c-1.2 1.2-1.2 2.9-.1 4l1 1c.5.5 1.3.8 2 .8s1.4-.3 2-.8c.3-.3.6-.5.9-.7l7.2 7.2zm-10.8-6.7c-.2.2-.4.2-.5.2s-.4 0-.6-.2l-1-1c-.2-.2-.2-.4-.2-.6s.1-.5.3-.7s.4-.5.6-.7l2.2 2.2c-.2.3-.5.5-.8.8m.1-6.6L9.7 6.5c.4-1.4 1.3-2.6 2.7-3.5c1-.6 2.2-1 3.3-1c1.2 0 2.4.3 3.4 1c3.5 2.3 3.8 7 1.1 9.7c-.8.8-1.7 1.3-2.7 1.6l-1.7-1.7c.1 0 .2-.1.4-.1c1-.1 1.9-.5 2.6-1.2c.9-.9 1.4-2.2 1.2-3.5c-.1-1.3-.8-2.4-2-3.2c-.7-.4-1.5-.6-2.3-.6s-1.6.2-2.3.7c-1.2.7-1.9 1.9-2 3.2zm-2.6 9.2l-2.5 2.4c.3.6.2 1.2-.3 1.7c-.6.6-1.5.6-2.1 0c-.3-.3-.4-.6-.4-1c-.4 0-.7-.2-1-.4c-.6-.6-.6-1.5 0-2.1c.5-.5 1.1-.6 1.7-.3l2.5-2.4c.1.2.3.4.5.6l1 1c.1.2.3.4.6.5"
    />
  </svg>
);

// --- MOCK DATA ---
const CATEGORIES = [
  { id: 'whole', label: 'Whole Birds', icon: <BirdIcon size={20} /> },
  { id: 'fresh', label: 'Fresh Chicken Cuts', icon: <ScissorsIcon size={20} /> },
  { id: 'special', label: 'Chicken Special Cuts', icon: <DrumstickIcon size={20} /> },
  { id: 'giblets', label: 'Chicken Giblets', icon: <HeartGibletIcon size={20} /> },
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
    id: 11, // Changed duplicate ID
    category: 'special',
    title: "Chicken Breast Boneless",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida elementum vel mollis quam.",
    image: "/pic1.png" 
  },
  {
    id: 12, // Changed duplicate ID
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
    <section className="w-full py-20 px-4 md:px-6 font-sans">
      <div className="max-w-[1520px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <span className="bg-[#FFE4B5] border border-[#FDD48A]  text-[#2D1B28] px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-sm">
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
                  : "  text-gray-600 hover:bg-gray-50"
                }`}
            >
              {/* Icon rendering with currentColor handling */}
              <span className={`${activeCategory === cat.id ? 'text-white' : 'text-gray-600'}`}>
                 {cat.icon}
              </span>
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
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
          >
            {filteredProducts.map((product) => (
              
              <div 
                key={product.id} 
                className="min-w-[256px] w-[256px] shrink-0 group/card cursor-pointer"
              >
                {/* Image Card - Clean (No border) */}
                <div className="rounded-[1.5rem] hover:shadow-xl transition-shadow duration-300">
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
                  
                  <div className="w-9 h-9   rounded-full flex items-center justify-center transition-colors group-hover/card:bg-[#F9A8D4]">
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