import React, { useState } from 'react';
import { 
  Navigation, ChevronDown, Star, Plus, Minus, Search, MapPin
} from 'lucide-react';

// --- 1. CONFIGURATION: IFRAME LINKS ---
// Bhai, Google Maps par jaao -> "Ideal Chicken [City Name]" search karo -> Share -> Embed Map -> Copy HTML.
// Wahan se sirf 'src' ke andar wala link copy karke yahan paste karo.

const cityMapUrls = {
  "Mangalore": "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62203.25087340654!2d74.8202464768393!3d12.898237957777614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sideal%20chicken%20mangalore!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin",
  "Udupi": "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31086.82064128032!2d74.723658!3d13.341917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sideal%20chicken%20udupi!5e0!3m2!1sen!2sin!4v1701234567891!5m2!1sen!2sin",
  "Bangalore": "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d248849.8883234865!2d77.490852!3d12.953959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sideal%20chicken%20bangalore!5e0!3m2!1sen!2sin!4v1701234567892!5m2!1sen!2sin",
  "Mumbai": "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120706.92397637818!2d72.78839737544227!3d19.015694849936377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sideal%20chicken%20Mombai!5e0!3m2!1sen!2sin!4v1764702959731!5m2!1sen!2sin",
  // Default fallback agar city na mile
  "Default": "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15555.234!2d74.8!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin"
};
 
// --- 2. STORE DATA FOR LEFT LIST ---
const ALL_STORES = [
  // MANGALORE
  { id: 1, city: "Mangalore", name: "Ideal Chicken - Kulshekar (HQ)", address: "Kalpane, Kulshekar, Mangalore", rating: "4.9" },
  { id: 2, city: "Mangalore", name: "Ideal Chicken - Kankanady", address: "Valencia Circle, Kankanady, Mangalore", rating: "4.8" },
  { id: 3, city: "Mangalore", name: "Ideal Chicken - Bejai", address: "Near KSRTC, Bejai, Mangalore", rating: "4.7" },
  { id: 4, city: "Mangalore", name: "Ideal Chicken - Urwa", address: "Chilimbi, Urwa Store, Mangalore", rating: "4.6" },
  
  // UDUPI
  { id: 5, city: "Udupi", name: "Ideal Chicken - Udupi City", address: "Near Service Bus Stand, Udupi", rating: "4.8" },
  { id: 6, city: "Udupi", name: "Ideal Chicken - Manipal", address: "Tiger Circle, Manipal", rating: "4.9" },

  // BANGALORE
  { id: 7, city: "Bangalore", name: "Ideal Chicken - Koramangala", address: "5th Block, Koramangala, Bangalore", rating: "4.8" },
  { id: 8, city: "Bangalore", name: "Ideal Chicken - Indiranagar", address: "100 Feet Rd, Indiranagar, Bangalore", rating: "4.9" },
  
  // MUMBAI
  { id: 9, city: "Mumbai", name: "Ideal Chicken - Bandra West", address: "Hill Road, Bandra West, Mumbai", rating: "4.9" },
];

// SVG Components (Same as before)
const LocationSvg = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path fill={color} d="M11 22.95v-2q-3.125-.35-5.363-2.587T3.05 13h-2v-2h2q.35-3.125 2.588-5.363T11 3.05v-2h2v2q3.125.35 5.363 2.588T20.95 11h2v2h-2q-.35 3.125-2.587 5.363T13 20.95v2zM12 19q2.9 0 4.95-2.05T19 12t-2.05-4.95T12 5T7.05 7.05T5 12t2.05 4.95T12 19m0-3q-1.65 0-2.825-1.175T8 12t1.175-2.825T12 8t2.825 1.175T16 12t-1.175 2.825T12 16"/>
  </svg>
);

const StoreSvg = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path fill={color} d="M5 4h14q.425 0 .713.288T20 5t-.288.713T19 6H5q-.425 0-.712-.288T4 5t.288-.712T5 4m0 16q-.425 0-.712-.288T4 19v-5h-.175q-.475 0-.775-.363t-.2-.837l1-5q.075-.35.35-.575T4.825 7h14.35q.35 0 .625.225t.35.575l1 5q.1.475-.2.837t-.775.363H20v5q0 .425-.288.713T19 20t-.712-.288T18 19v-5h-4v5q0 .425-.288.713T13 20zm1-2h6v-4H6zm-.95-6h13.9zm0 0h13.9l-.6-3H5.65z"/>
  </svg>
);

const StoreLocatorIframe = () => {
  const [selectedCity, setSelectedCity] = useState("Mangalore");
  const [selectedStoreId, setSelectedStoreId] = useState(null);

  // Direction Icon Image Path
  const directionIconUrl = "/material-symbols_arrow-top-right.png";

  // Filter List based on selected City
  const visibleStores = ALL_STORES.filter(store => store.city === selectedCity);

  // Handle City Change
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedStoreId(null); // Reset selection
  };

  return (
    <div className="flex h-screen w-full p-6 lg:p-12 gap-4 font-sans text-gray-800">
      
      {/* --- LEFT SIDEBAR --- */}
      <div className="w-[460px] flex flex-col gap-4 h-full">
        
        {/* Header Area */}
        <div className="bg-transparent flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-gray-800 ml-1">Select your City</label>
            <button className="flex items-center gap-1 text-[#be185d] text-xs font-bold hover:underline">
              <LocationSvg size={16} /> Use Current Location
            </button>
          </div>
          
          <div className="relative">
            <select 
              onChange={handleCityChange} 
              value={selectedCity}
              className="w-full p-3 pl-4 pr-10 appearance-none bg-white rounded-xl shadow-sm border-none text-gray-900 font-bold focus:ring-2 focus:ring-pink-500 outline-none cursor-pointer"
            >
              <option value="Mangalore">Mangalore</option>
              <option value="Udupi">Udupi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
          </div>

          <div className="flex items-center gap-2 mt-2 ml-1">
            <div className="bg-[#be185d] p-1.5 rounded-md shadow-sm">
                <StoreSvg size={14} color="white" />
            </div>
            <span className="text-xs font-bold text-gray-700">
               {visibleStores.length} Stores in {selectedCity}
            </span>
          </div>
        </div>

        {/* Store List */}
        <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-3 custom-scrollbar">
          {visibleStores.length > 0 ? (
            visibleStores.map((store) => (
              <div 
                key={store.id} 
                onClick={() => setSelectedStoreId(store.id)}
                className={`border bg-white p-5 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer group 
                  ${selectedStoreId === store.id ? 'border-pink-500 ring-1 ring-pink-500' : 'border-gray-200 hover:border-pink-300 hover:shadow-md'}`}
              >
                <div className="flex justify-between items-start">
                   <h3 className="text-lg font-bold text-gray-900 mb-1">{store.name}</h3>
                   <span className="bg-gray-100 text-[10px] px-2 py-0.5 rounded text-gray-600 font-bold border border-gray-200">{store.city}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3 font-medium">{store.address}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded-md border border-gray-100">
                      <div className="bg-orange-500 rounded-full p-[2px]"><Star size={8} fill="white" className="text-white" /></div>
                      <span className="text-xs font-bold text-gray-800">{store.rating}</span>
                    </div>
                    <span className="text-xs font-bold text-[#be185d]">Open Now</span>
                  </div>
                  
                  {/* Direction Button */}
                  <button className="flex items-center gap-2 text-[#1F1F1F] text-14px font-bold hover:opacity-80 transition-opacity">
                    <img 
                      src={directionIconUrl} 
                      alt="Dir" 
                      className="w-5 h-5 object-contain" 
                    />
                    Get Directions
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-[60%] text-center opacity-70">
               <div className="bg-gray-200 p-5 rounded-full mb-4">
                  <StoreSvg size={40} className="text-gray-400" />
               </div>
               <h3 className="text-gray-900 font-bold text-sm">No Stores Found</h3>
               <p className="text-xs text-gray-500 mt-1 max-w-[200px]">
                 We are coming soon to {selectedCity}!
               </p>
            </div>
          )}
        </div>
      </div>

      {/* --- RIGHT SIDE: IFRAME --- */}
      <div className="flex-1 relative rounded-[30px] overflow-hidden shadow-lg border-4 border-white z-0 bg-gray-200">
        <iframe 
          src={cityMapUrls[selectedCity] || cityMapUrls["Default"]}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Store Locator"
        ></iframe>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
      `}</style>
    </div>
  );
};

export default StoreLocatorIframe;