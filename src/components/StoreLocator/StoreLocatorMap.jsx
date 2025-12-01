import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { 
  Navigation, ChevronDown, Star, Plus, Minus
} from 'lucide-react';

// --- 1. YOUR CUSTOM SVGs ---

// SVG 1: Location Pin (For Map Markers & Location Button)
const LocationSvg = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path fill={color} d="M11 22.95v-2q-3.125-.35-5.363-2.587T3.05 13h-2v-2h2q.35-3.125 2.588-5.363T11 3.05v-2h2v2q3.125.35 5.363 2.588T20.95 11h2v2h-2q-.35 3.125-2.587 5.363T13 20.95v2zM12 19q2.9 0 4.95-2.05T19 12t-2.05-4.95T12 5T7.05 7.05T5 12t2.05 4.95T12 19m0-3q-1.65 0-2.825-1.175T8 12t1.175-2.825T12 8t2.825 1.175T16 12t-1.175 2.825T12 16"/>
  </svg>
);

// SVG 2: Store Icon (For Header & Empty State)
const StoreSvg = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path fill={color} d="M5 4h14q.425 0 .713.288T20 5t-.288.713T19 6H5q-.425 0-.712-.288T4 5t.288-.712T5 4m0 16q-.425 0-.712-.288T4 19v-5h-.175q-.475 0-.775-.363t-.2-.837l1-5q.075-.35.35-.575T4.825 7h14.35q.35 0 .625.225t.35.575l1 5q.1.475-.2.837t-.775.363H20v5q0 .425-.288.713T19 20t-.712-.288T18 19v-5h-4v5q0 .425-.288.713T13 20zm1-2h6v-4H6zm-.95-6h13.9zm0 0h13.9l-.6-3H5.65z"/>
  </svg>
);

// --- HUGE DATASET (All India Demo Data) ---
const ALL_STORES = [
  // --- KARNATAKA (MANGALORE - HUB) ---
  { id: 101, city: "Mangalore", name: "Ideal Chicken - Kulshekar (HQ)", address: "Kalpane, Kulshekar, Mangalore", lat: 12.8988, lng: 74.8824, rating: "4.9" },
  { id: 102, city: "Mangalore", name: "Ideal Chicken - Kankanady", address: "Valencia Circle, Kankanady, Mangalore", lat: 12.8640, lng: 74.8550, rating: "4.8" },
  { id: 103, city: "Mangalore", name: "Ideal Chicken - Bejai", address: "Near KSRTC, Bejai, Mangalore", lat: 12.8876, lng: 74.8430, rating: "4.7" },
  { id: 104, city: "Mangalore", name: "Ideal Chicken - Urwa", address: "Chilimbi, Urwa Store, Mangalore", lat: 12.8915, lng: 74.8320, rating: "4.6" },
  { id: 105, city: "Mangalore", name: "Ideal Chicken - State Bank", address: "Central Market, Mangalore", lat: 12.8680, lng: 74.8400, rating: "4.5" },
  
  // --- KARNATAKA (UDUPI / MANIPAL) ---
  { id: 201, city: "Udupi", name: "Ideal Chicken - Udupi City", address: "Near Service Bus Stand, Udupi", lat: 13.3409, lng: 74.7421, rating: "4.8" },
  { id: 202, city: "Udupi", name: "Ideal Chicken - Manipal", address: "Tiger Circle, Manipal", lat: 13.3525, lng: 74.7928, rating: "4.9" },
  { id: 203, city: "Udupi", name: "Ideal Chicken - Brahmavar", address: "NH 66, Brahmavar", lat: 13.4140, lng: 74.7450, rating: "4.7" },

  // --- KARNATAKA (BANGALORE) ---
  { id: 301, city: "Bangalore", name: "Ideal Chicken - Koramangala", address: "5th Block, Koramangala, Bangalore", lat: 12.9352, lng: 77.6245, rating: "4.8" },
  { id: 302, city: "Bangalore", name: "Ideal Chicken - Indiranagar", address: "100 Feet Rd, Indiranagar, Bangalore", lat: 12.9716, lng: 77.6412, rating: "4.9" },
  { id: 303, city: "Bangalore", name: "Ideal Chicken - Jayanagar", address: "4th Block, Jayanagar, Bangalore", lat: 12.9250, lng: 77.5938, rating: "4.7" },
  { id: 304, city: "Bangalore", name: "Ideal Chicken - Whitefield", address: "ITPL Main Rd, Whitefield, Bangalore", lat: 12.9698, lng: 77.7500, rating: "4.6" },

  // --- MAHARASHTRA (MUMBAI) ---
  { id: 401, city: "Mumbai", name: "Ideal Chicken - Bandra West", address: "Hill Road, Bandra West, Mumbai", lat: 19.0596, lng: 72.8295, rating: "4.9" },
  { id: 402, city: "Mumbai", name: "Ideal Chicken - Andheri", address: "Lokhandwala Complex, Andheri West, Mumbai", lat: 19.1300, lng: 72.8250, rating: "4.8" },
  { id: 403, city: "Mumbai", name: "Ideal Chicken - Powai", address: "Hiranandani Gardens, Powai, Mumbai", lat: 19.1180, lng: 72.9050, rating: "4.7" },
  { id: 404, city: "Mumbai", name: "Ideal Chicken - Colaba", address: "Causeway, Colaba, Mumbai", lat: 18.9067, lng: 72.8147, rating: "4.9" },

  // --- DELHI NCR ---
  { id: 501, city: "Delhi", name: "Ideal Chicken - Connaught Place", address: "Outer Circle, CP, New Delhi", lat: 28.6304, lng: 77.2177, rating: "4.8" },
  { id: 502, city: "Delhi", name: "Ideal Chicken - Hauz Khas", address: "Hauz Khas Village, New Delhi", lat: 28.5530, lng: 77.1940, rating: "4.7" },
  { id: 503, city: "Delhi", name: "Ideal Chicken - Gurgaon", address: "Cyber Hub, DLF Cyber City, Gurgaon", lat: 28.4950, lng: 77.0890, rating: "4.8" },

  // --- TELANGANA (HYDERABAD) ---
  { id: 601, city: "Hyderabad", name: "Ideal Chicken - Banjara Hills", address: "Road No 12, Banjara Hills, Hyderabad", lat: 17.4130, lng: 78.4400, rating: "4.8" },
  { id: 602, city: "Hyderabad", name: "Ideal Chicken - Hitech City", address: "Mindspace, Hitech City, Hyderabad", lat: 17.4435, lng: 78.3772, rating: "4.7" },

  // --- TAMIL NADU (CHENNAI) ---
  { id: 701, city: "Chennai", name: "Ideal Chicken - T Nagar", address: "Pondy Bazaar, T Nagar, Chennai", lat: 13.0418, lng: 80.2341, rating: "4.7" },
  
  // --- GOA ---
  { id: 801, city: "Goa", name: "Ideal Chicken - Panjim", address: "MG Road, Panjim, Goa", lat: 15.4909, lng: 73.8278, rating: "4.6" },
  { id: 802, city: "Goa", name: "Ideal Chicken - Calangute", address: "Calangute Beach Rd, Goa", lat: 15.5460, lng: 73.7550, rating: "4.5" }
];

// --- COORDINATES FOR CITIES ---
const CITY_COORDS = {
  "Mangalore": { lat: 12.8732, lng: 74.8427, zoom: 13 },
  "Udupi": { lat: 13.3409, lng: 74.7421, zoom: 13 },
  "Bangalore": { lat: 12.9716, lng: 77.5946, zoom: 12 },
  "Mumbai": { lat: 19.0760, lng: 72.8777, zoom: 11 },
  "Delhi": { lat: 28.6139, lng: 77.2090, zoom: 11 },
  "Hyderabad": { lat: 17.4483, lng: 78.3915, zoom: 12 },
  "Chennai": { lat: 13.0827, lng: 80.2707, zoom: 12 },
  "Goa": { lat: 15.4909, lng: 73.8278, zoom: 11 },
  "Pune": { lat: 18.5204, lng: 73.8567, zoom: 12 } 
};

// --- CUSTOM MARKER USING YOUR SVG 1 ---
const createCustomIcon = (isSelected) => {
  const color = isSelected ? '#be185d' : '#6b21a8';
  
  const svgHtml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" style="filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.4));">
        <path fill="${color}" d="M11 22.95v-2q-3.125-.35-5.363-2.587T3.05 13h-2v-2h2q.35-3.125 2.588-5.363T11 3.05v-2h2v2q3.125.35 5.363 2.588T20.95 11h2v2h-2q-.35 3.125-2.587 5.363T13 20.95v2zM12 19q2.9 0 4.95-2.05T19 12t-2.05-4.95T12 5T7.05 7.05T5 12t2.05 4.95T12 19m0-3q-1.65 0-2.825-1.175T8 12t1.175-2.825T12 8t2.825 1.175T16 12t-1.175 2.825T12 16"/>
    </svg>
  `;

  return L.divIcon({
    className: 'custom-marker-svg',
    html: svgHtml,
    iconSize: [38, 38],
    iconAnchor: [19, 38], 
    popupAnchor: [0, -38]
  });
};

const MapEventsHandler = ({ onBoundsChange }) => {
  const map = useMapEvents({
    moveend: () => onBoundsChange(map.getBounds()),
    load: () => onBoundsChange(map.getBounds())
  });
  return null;
};

const MapFlyTo = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if(center) map.flyTo(center, zoom, { animate: true, duration: 1.5 });
  }, [center, zoom, map]);
  return null;
};

const StoreLocatorMap = () => {
  const [visibleStores, setVisibleStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [mapCenter, setMapCenter] = useState(CITY_COORDS["Mangalore"]); 
  const [zoom, setZoom] = useState(13);
  const [userInteracted, setUserInteracted] = useState(false);

  // YAHAN APNI DIRECTION ICON KI IMAGE KA PATH DAALO
  const directionIconUrl = "/material-symbols_arrow-top-right.png"; 

  const handleBoundsChange = (bounds) => {
    const filtered = ALL_STORES.filter(store => 
      bounds.contains([store.lat, store.lng])
    );
    setVisibleStores(filtered);
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setUserInteracted(false);
    
    if (CITY_COORDS[city]) {
      setMapCenter(CITY_COORDS[city]);
      setZoom(CITY_COORDS[city].zoom);
    }
  };

  return (
    <div className="flex h-screen w-full p-6 lg:p-12 gap-4 font-sans text-gray-800 ">
      
      {/* LEFT SIDEBAR */}
      <div className="w-[460px] flex flex-col gap-4 h-full">
        <div className="bg-transparent flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-gray-800 ml-1">Select your City</label>
            <button 
              onClick={() => {
                 if (navigator.geolocation) {
                   navigator.geolocation.getCurrentPosition((pos) => {
                      setMapCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
                      setZoom(14);
                   });
                 }
              }}
              className="flex items-center gap-1 text-[#be185d] text-xs font-bold hover:underline"
            >
              {/* SVG 1: LOCATION ICON USED HERE */}
              <LocationSvg size={16} /> 
              Use Current Location
            </button>
          </div>
          
          <div className="relative">
            <select onChange={handleCityChange} className="w-full p-3 pl-4 pr-10 appearance-none bg-white rounded-xl shadow-sm border-none text-gray-900 font-bold focus:ring-2 focus:ring-pink-500 outline-none cursor-pointer">
              <option value="Mangalore">Mangalore (Headquarters)</option>
              <option value="Udupi">Udupi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi NCR</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Goa">Goa</option>
              <option value="Pune">Pune (Coming Soon)</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
          </div>

          <div className="flex items-center gap-2 mt-2 ml-1">
            <div className="bg-[#be185d] p-1.5 rounded-md shadow-sm">
                {/* SVG 2: STORE ICON USED HERE */}
                <StoreSvg size={14} color="white" />
            </div>
            <span className="text-xs font-bold text-gray-700">
               {visibleStores.length} Stores in this city
            </span>
          </div>
        </div>

        {/* LIST SECTION */}
        <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-3 custom-scrollbar">
          {visibleStores.length > 0 ? (
            visibleStores.map((store) => (
              <div 
                key={store.id} 
                onClick={() => {
                  setSelectedStore(store);
                  setMapCenter({ lat: store.lat, lng: store.lng });
                  setZoom(16);
                  setUserInteracted(true);
                }}
                className={`border border-gray-200 bg-white p-5 lg:h-90 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer group 
                  `}
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
                  
                  {/* --- CHANGE START: DIRECTION ICON WITH IMAGE --- */}
                  <button className="flex items-center gap-2 text-[#1F1F1F] text-xs font-bold hover:opacity-80 transition-opacity">
                    <img 
                      src={directionIconUrl} 
                      alt="Dir" 
                      className="w-4 h-4 object-contain" 
                    />
                   Get Directions
                  </button>
                  {/* --- CHANGE END --- */}

                </div>
              </div>
            ))
          ) : (
            // NO SHOPS FOUND UI
            <div className="flex flex-col items-center justify-center h-[60%] text-center opacity-70">
               <div className="bg-gray-200 p-5 rounded-full mb-4">
                  {/* SVG 2: STORE ICON USED HERE (LARGE) */}
                  <StoreSvg size={40} className="text-gray-400" />
               </div>
               <h3 className="text-gray-900 font-bold text-sm">No Stores Here</h3>
               <p className="text-xs text-gray-500 mt-1 max-w-[200px]">
                 Select another city from the dropdown to see our locations.
               </p>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT MAP */}
      <div className="flex-1 relative rounded-[30px] overflow-hidden shadow-lg border-4 border-white z-0 ">
        <MapContainer center={mapCenter} zoom={zoom} style={{ height: "100%", width: "100%" }} zoomControl={false}>
          <TileLayer attribution='&copy; OSM' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          
          <MapEventsHandler onBoundsChange={handleBoundsChange} />
          {!userInteracted && <MapFlyTo center={mapCenter} zoom={zoom} />}

          {visibleStores.map((store) => (
            <Marker 
              key={store.id} 
              position={[store.lat, store.lng]}
              icon={createCustomIcon(selectedStore?.id === store.id)}
              eventHandlers={{ click: () => { setSelectedStore(store); setUserInteracted(true); }}}
            >
              <Popup closeButton={false} className="custom-popup" offset={[0, -30]}>
                 <div className="min-w-[200px] font-sans p-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{store.name}</h3>
                  <p className="text-[10px] text-gray-500 leading-tight mb-2">{store.address}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#be185d] bg-pink-50 px-2 py-0.5 rounded-md">Open Now</span>
                    <div className="flex items-center gap-1">
                       <Star size={10} fill="#f97316" className="text-orange-500" />
                       <span className="text-xs font-bold">{store.rating}</span>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Zoom Controls */}
        <div className="absolute bottom-6 right-4 flex flex-col gap-1 bg-white rounded-md shadow-md overflow-hidden z-[400]">
           <div className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-50"><Plus size={20} className="text-gray-600" /></div>
           <div className="p-2 cursor-pointer hover:bg-gray-50"><Minus size={20} className="text-gray-600" /></div>
        </div>
      </div>
      
       <style>{`
        .leaflet-popup-content-wrapper { border-radius: 12px; padding: 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); }
        .leaflet-popup-content { margin: 12px; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
      `}</style>
    </div>
  );
};

export default StoreLocatorMap;