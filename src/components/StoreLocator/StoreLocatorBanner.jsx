import React from 'react';

const StoreLocatorBanner = () => {
  // Yahan apni images ke path dalein
  const backgroundImage = "/Left Block.png"; // Pink texture wala background
  const locationIcon = "/Frame 15.png";             // Magenta square wala icon
  const shopIllustration = "/path/to/your-shop-image.png";   // Right side wali dukaan ki image

  return (
    <div className="w-full flex justify-center items-center p-2 bg-white">
      {/* Custom Animations Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slide-right {
          animation: slideInRight 1s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>

      {/* Main Container */}
      <div className="relative w-full max-w-[1420px] h-[280px] rounded-[20px] overflow-hidden flex items-center justify-between shadow-sm">
        
        {/* 1. BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background Pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Left Content Section */}
        <div className="relative z-10 pl-12 flex flex-col items-start gap-4 max-w-[60%]">
          
          {/* Badge */}
          <div className="bg-white px-5 py-2 rounded-full shadow-sm opacity-0 animate-fade-up">
            <span className="text-[#770B54] font-bold text-sm tracking-wide">
              Find Us Near You
            </span>
          </div> 

          {/* Heading Area with ICON IMAGE */}
          <div className="flex items-center gap-4 opacity-0 animate-fade-up delay-100">
            {/* 2. LOCATION ICON IMAGE */}
            <img 
              src={locationIcon} 
              alt="Location Icon" 
              className="w-12 h-12 object-contain rounded-2xl shadow-md" 
            />
            
            {/* Title */}
            <h1 className="text-[#A71077] text-5xl font-bold tracking-tight">
              Store Locator
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-[#A71077] text-lg font-medium ml-1 opacity-0 animate-fade-up delay-200">
            Visit our stores to experience fresh, premium quality chicken products
          </p>
        </div>

         
      </div>
    </div>
  );
};

export default StoreLocatorBanner;