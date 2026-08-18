import React, { useState } from "react";
import { FiMapPin, FiCompass, FiMaximize2, FiMinimize2, FiZoomIn, FiZoomOut, FiArrowRight } from "react-icons/fi";

const StoreMap = ({ stores, selectedStore, onSelectStore, onViewStore }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activePinHover, setActivePinHover] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Approximate relative % positions on a stylized US map container for visual accuracy
  const mapPositions = {
    "austin-flagship": { top: "68%", left: "48%" },
    "nashville-atelier": { top: "52%", left: "68%" },
    "denver-outpost": { top: "42%", left: "36%" },
    "charleston-studio": { top: "58%", left: "78%" },
    "scottsdale-atelier": { top: "56%", left: "24%" },
    "jacksonhole-outpost": { top: "30%", left: "31%" }
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));

  return (
    <div
      className={`relative bg-[#FAF8F5] border border-[#E7DED2] rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-300 shadow-sm ${
        isExpanded ? "h-[700px] w-full" : "h-[450px] sm:h-[550px] w-full"
      }`}
    >
      {/* Top Map Header Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="bg-[#FFFDFC]/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#E7DED2] shadow-xs flex items-center gap-2.5 pointer-events-auto">
          <div className="w-2.5 h-2.5 rounded-full bg-[#8B5A2B] animate-ping"></div>
          <span
            className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3B2618]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Interactive Showroom Map
          </span>
        </div>

        {/* Map Controls */}
        <div className="flex items-center gap-2 bg-[#FFFDFC]/90 backdrop-blur-md p-1.5 rounded-2xl border border-[#E7DED2] shadow-xs pointer-events-auto">
          <button
            onClick={handleZoomIn}
            title="Zoom In"
            className="p-2 text-[#3B2618] hover:text-[#8B5A2B] hover:bg-[#FAF8F5] rounded-xl transition-colors cursor-pointer"
          >
            <FiZoomIn size={16} />
          </button>
          <button
            onClick={handleZoomOut}
            title="Zoom Out"
            className="p-2 text-[#3B2618] hover:text-[#8B5A2B] hover:bg-[#FAF8F5] rounded-xl transition-colors cursor-pointer"
          >
            <FiZoomOut size={16} />
          </button>
          <div className="w-[1px] h-4 bg-[#E7DED2]"></div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Collapse Map" : "Expand Map"}
            className="p-2 text-[#3B2618] hover:text-[#8B5A2B] hover:bg-[#FAF8F5] rounded-xl transition-colors cursor-pointer"
          >
            {isExpanded ? <FiMinimize2 size={16} /> : <FiMaximize2 size={16} />}
          </button>
        </div>
      </div>

      {/* Styled Luxury Map Canvas Surface */}
      <div
        className="w-full h-full relative overflow-hidden transition-transform duration-500 ease-out select-none flex items-center justify-center"
        style={{
          transform: `scale(${zoomLevel})`,
          transformOrigin: "center center"
        }}
      >
        {/* Background Stylized Topo / Grid Lines Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30 text-[#E7DED2]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />
          
          {/* Decorative Contours */}
          <path
            d="M -100 150 C 200 100, 400 300, 800 200 C 1200 100, 1400 350, 1800 250"
            fill="none"
            stroke="#8B5A2B"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.3"
          />
          <path
            d="M -50 350 C 300 250, 500 500, 900 350 C 1300 200, 1500 450, 1900 400"
            fill="none"
            stroke="#8B5A2B"
            strokeWidth="1"
            strokeDasharray="6 8"
            opacity="0.2"
          />
        </svg>

        {/* Stylized US Outline Vector Silhouette Representation */}
        <div className="relative w-[90%] max-w-[1100px] h-[75%] max-h-[500px]">
          {/* Subtle Silhouette Background Shape */}
          <div className="absolute inset-0 bg-[#F3ECE1]/60 rounded-3xl border border-[#E7DED2]/80 backdrop-blur-xs flex items-center justify-center overflow-hidden">
            <span
              className="text-8xl md:text-[140px] font-bold text-[#E7DED2]/50 tracking-[0.2em] select-none pointer-events-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              RIDGELINE
            </span>
          </div>

          {/* Store Location Markers */}
          {stores.map((store) => {
            const pos = mapPositions[store.id] || { top: "50%", left: "50%" };
            const isSelected = selectedStore?.id === store.id;
            const isHovered = activePinHover === store.id;

            return (
              <div
                key={store.id}
                style={{ top: pos.top, left: pos.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group"
              >
                {/* Pin Button */}
                <button
                  onClick={() => onSelectStore(store)}
                  onMouseEnter={() => setActivePinHover(store.id)}
                  onMouseLeave={() => setActivePinHover(null)}
                  className={`relative flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    isSelected ? "scale-125 z-40" : "hover:scale-115"
                  }`}
                >
                  {/* Pulse Ring */}
                  <span
                    className={`absolute w-8 h-8 rounded-full border border-[#8B5A2B] ${
                      isSelected ? "animate-ping opacity-75" : "opacity-0 group-hover:opacity-40"
                    }`}
                  ></span>

                  {/* Pin Body */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-300 border ${
                      isSelected
                        ? "bg-[#3B2618] text-[#FAF8F5] border-[#8B5A2B] scale-110"
                        : "bg-[#FFFDFC] text-[#8B5A2B] border-[#E7DED2] hover:bg-[#3B2618] hover:text-[#FAF8F5]"
                    }`}
                  >
                    <FiMapPin size={17} />
                  </div>
                </button>

                {/* City Label Badge */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.14em] shadow-xs border transition-all duration-200 ${
                      isSelected
                        ? "bg-[#3B2618] text-[#FAF8F5] border-[#3B2618]"
                        : "bg-[#FFFDFC]/95 text-[#3B2618] border-[#E7DED2]"
                    }`}
                  >
                    {store.address.city}
                  </span>
                </div>

                {/* Hover / Active Popover Card */}
                {(isHovered || isSelected) && (
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 bg-[#FFFDFC] border border-[#E7DED2] rounded-2xl p-3.5 shadow-xl z-50 animate-fade-in pointer-events-auto">
                    <div className="flex gap-3 items-center mb-2">
                      <img
                        src={store.image}
                        alt={store.name}
                        className="w-14 h-14 rounded-xl object-cover border border-[#E7DED2]"
                      />
                      <div>
                        <h4
                          className="text-base font-bold text-[#3B2618] leading-tight"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {store.name}
                        </h4>
                        <p className="text-[10px] text-[#8B5A2B] font-semibold uppercase tracking-wider mt-0.5">
                          {store.type}
                        </p>
                        <p className="text-[11px] text-[#6B5647]">
                          {store.address.street}, {store.address.city}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onViewStore(store)}
                      className="w-full py-2 bg-[#3B2618] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-[0.15em] rounded-lg hover:bg-[#8B5A2B] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Explore Showroom</span>
                      <FiArrowRight size={12} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Map Legend */}
      <div className="absolute bottom-4 left-4 z-20 bg-[#FFFDFC]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E7DED2] shadow-xs flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3B2618]"></span>
          <span className="text-[#3B2618] font-medium text-[11px]">Selected Showroom</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8B5A2B]"></span>
          <span className="text-[#8B5A2B] font-medium text-[11px]">Available Location</span>
        </div>
      </div>
    </div>
  );
};

export default StoreMap;
