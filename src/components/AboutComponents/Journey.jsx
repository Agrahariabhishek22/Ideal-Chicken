import React, { useRef } from 'react';
import { 
  Sprout, 
  Store, 
  Building2, 
  Egg, 
  Home, 
  Bookmark, 
  Flag, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const Journey = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Width of card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const milestones = [
    {
      year: '2005',
      title: 'Feed Factory Established',
      description: 'Feed Factory established at Alangar, Moodbidri',
      icon: <Sprout className="w-6 h-6 text-white" />,
      theme: 'pink',
      iconBg: 'bg-[#A71077]' // Magenta
    },
    {
      year: '2005',
      title: 'First Retail Store',
      description: 'First Retail Store opens at Kulshekar Kaikamba, Mangalore',
      icon: <Store className="w-6 h-6 text-white" />,
      theme: 'peach',
      iconBg: 'bg-[#5B0F3F]' // Deep Purple
    },
    {
      year: '2008',
      title: 'Sales Offices Opened',
      description: 'Sales offices established at Puthige and Kulshekar Kaikamba',
      icon: <Building2 className="w-6 h-6 text-white" />,
      theme: 'pink',
      iconBg: 'bg-[#A71077]'
    },
    {
      year: '2011',
      title: 'Ideal Hatchery Begins',
      description: 'Ideal Hatchery begins operations at Shirthady',
      icon: <Egg className="w-6 h-6 text-white" />,
      theme: 'peach',
      iconBg: 'bg-[#5B0F3F]'
    },
    {
      year: '2013',
      title: 'Administrative Office',
      description: 'Administrative Office set up at Kalpane, Kulshekar',
      icon: <Home className="w-6 h-6 text-white" />,
      theme: 'pink',
      iconBg: 'bg-[#A71077]'
    },
    {
      year: '2013',
      title: 'Dressed Chicken Unit',
      description: 'Dressed chicken unit commissioned at Yedapadavu',
      icon: <Bookmark className="w-6 h-6 text-white" />,
      theme: 'peach',
      iconBg: 'bg-[#5B0F3F]'
    }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            {/* Badge */}
            <span className="inline-block bg-[#FEE2AF] text-[#3F2E00] px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Our Journey
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#4B0736] mb-8">
              Our Journey so far
            </h2>

            {/* Milestones Label with Icon */}
            <div className="flex items-center gap-2 text-[#666666] font-semibold text-sm tracking-wide uppercase">
              <Flag className="w-4 h-4 fill-gray-400 text-gray-400" />
              MILESTONES
            </div>
          </div>

          <div className="flex flex-col items-end gap-6">
            <p className="text-gray-500 text-sm md:text-right max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Senectus luctus a urna sed in viverra mauris enim.
            </p>
            
            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-[#A71077] flex items-center justify-center text-white hover:bg-[#8a0d62] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-[#A71077] flex items-center justify-center text-white hover:bg-[#8a0d62] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex relative min-w-max">
            
            {/* The Gray Line connecting years - Positioned absolutely */}
            <div className="absolute top-[19px] left-0 w-full h-[2px] bg-gray-200 z-0" />

            {milestones.map((item, index) => (
              <div key={index} className="w-[300px] flex-shrink-0 mr-8 relative z-10">
                
                {/* Year Pill */}
                <div className="mb-8">
                  <span className="bg-[#1F1F1F] text-white px-5 py-2 rounded-full text-sm font-bold">
                    {item.year}
                  </span>
                </div>

                {/* Card */}
                <div className={`
                  p-6 rounded-[32px] h-[280px] flex flex-col gap-4 border
                  transition-transform duration-300 hover:-translate-y-1
                  ${item.theme === 'pink' 
                    ? 'bg-[#FFF5FA] border-[#FCE7F3]' 
                    : 'bg-[#FFF8F0] border-[#FFE4CC]'
                  }
                `}>
                  {/* Icon Box */}
                  <div className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm
                    ${item.iconBg}
                  `}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="mt-2">
                    <h3 className="text-[#1F1F1F] font-bold text-lg leading-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#666666] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;