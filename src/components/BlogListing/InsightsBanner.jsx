import React from 'react';

const InsightsBanner = () => {
  // Yahan apni image ka path daalo
  const iconImage = "/Frame 15 (1)2.png"; 

  return (
    <div className="w-full bg-white flex justify-center items-center py-10 px-4 md:px-8 font-sans overflow-hidden">
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* Main Container */}
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-between lg:items-end gap-8 lg:gap-10">
        
        {/* Left Side Content */}
        <div className="flex flex-col gap-6 items-start">
          
          {/* Badge */}
          <div className="opacity-0 animate-fade-up delay-100">
            <div className="border border-pink-200 px-5 py-1 rounded-full w-fit bg-pink-50/30 hover:bg-pink-50 transition-colors duration-300 cursor-default">
              <span className="text-[#831843] font-bold text-sm tracking-wide">
                Blogs
              </span>
            </div>
          </div>

          {/* Heading Area with IMAGE ICON */}
          {/* CHANGE: Mobile pe 'flex-col' (icon upar, text neeche), Desktop pe 'md:flex-row' (side-by-side) */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-5 opacity-0 animate-fade-up delay-200">
            
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm shrink-0 transition-transform duration-300 hover:scale-110">
              <img 
                src={iconImage} 
                alt="Blog Icon" 
                className="w-12 h-12 object-contain"
              />
            </div>
            
            {/* Title */}
            <h1 className="text-[#141414] text-3xl md:text-4xl font-bold tracking-tight">
              Insights & Stories
            </h1>
          </div>
        </div>

        {/* Right Side Content (Description) */}
        <div className="max-w-[520px] mb-1 opacity-0 animate-fade-up delay-300">
          <p className="text-[#4B0736] text-base md:text-lg font-medium leading-relaxed">
            Discover valuable insights, delicious recipes, and essential information on sustainability, all while exploring the world <br className="hidden md:block" /> of high-quality poultry.
          </p>
        </div>

      </div>
    </div>
  );
};

export default InsightsBanner;