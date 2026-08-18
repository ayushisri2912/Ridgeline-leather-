import React from "react";
import { FiSearch, FiNavigation, FiX, FiGrid, FiMap, FiLayers } from "react-icons/fi";

const StoreSearch = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  activeViewMode,
  setActiveViewMode,
  onUseCurrentLocation,
  isLocating,
  locationError,
  totalResults,
  onClearSearch
}) => {
  const categories = [
    { id: "All", label: "All Showrooms" },
    { id: "Flagship Showroom", label: "Flagships" },
    { id: "Craftsman Studio", label: "Studios" },
    { id: "Mountain Outpost", label: "Outposts" }
  ];

  return (
    <div id="locator-search" className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 mb-10">
      {/* Minimal Search Card */}
      <div className="bg-[#FFFDFC] border border-[#E7DED2] rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
          
          {/* Left: Input Search Box */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-[#8B5A2B]">
              <FiSearch size={20} />
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, state, or postal code (e.g. Austin, 78704, TN)..."
              className="w-full pl-12 pr-10 py-3.5 sm:py-4 bg-[#FAF8F5] border border-[#E7DED2] rounded-2xl text-sm sm:text-base text-[#3B2618] placeholder-[#9C8A7B] font-normal focus:outline-none focus:border-[#8B5A2B] focus:bg-[#FFFDFC] transition-all duration-300"
            />

            {searchQuery && (
              <button
                onClick={onClearSearch}
                aria-label="Clear search query"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#9C8A7B] hover:text-[#3B2618] transition-colors cursor-pointer"
              >
                <FiX size={18} />
              </button>
            )}
          </div>

          {/* Right: Actions (Use Location & View Toggles) */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Geolocation Button */}
            <button
              onClick={onUseCurrentLocation}
              disabled={isLocating}
              className={`inline-flex items-center gap-2.5 px-5 py-3.5 rounded-2xl border border-[#E7DED2] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer ${
                isLocating
                  ? "bg-[#F3ECE1] text-[#8B5A2B] opacity-80"
                  : "bg-[#FAF8F5] text-[#3B2618] hover:bg-[#3B2618] hover:text-[#FAF8F5] hover:border-[#3B2618]"
              }`}
            >
              <FiNavigation
                size={15}
                className={`text-[#8B5A2B] group-hover:text-[#FAF8F5] ${
                  isLocating ? "animate-spin" : ""
                }`}
              />
              <span>{isLocating ? "Locating..." : "Use Current Location"}</span>
            </button>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#FAF8F5] border border-[#E7DED2] rounded-2xl p-1">
              <button
                onClick={() => setActiveViewMode("grid")}
                title="Grid View"
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeViewMode === "grid"
                    ? "bg-[#FFFDFC] text-[#3B2618] shadow-xs border border-[#E7DED2]"
                    : "text-[#8B5A2B] hover:text-[#3B2618]"
                }`}
              >
                <FiGrid size={15} />
                <span className="hidden sm:inline">Grid</span>
              </button>

              <button
                onClick={() => setActiveViewMode("split")}
                title="Split View (Grid + Map)"
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeViewMode === "split"
                    ? "bg-[#FFFDFC] text-[#3B2618] shadow-xs border border-[#E7DED2]"
                    : "text-[#8B5A2B] hover:text-[#3B2618]"
                }`}
              >
                <FiLayers size={15} />
                <span className="hidden sm:inline">Split</span>
              </button>

              <button
                onClick={() => setActiveViewMode("map")}
                title="Map View"
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeViewMode === "map"
                    ? "bg-[#FFFDFC] text-[#3B2618] shadow-xs border border-[#E7DED2]"
                    : "text-[#8B5A2B] hover:text-[#3B2618]"
                }`}
              >
                <FiMap size={15} />
                <span className="hidden sm:inline">Map</span>
              </button>
            </div>
          </div>
        </div>

        {/* Location Notice / Error message */}
        {locationError && (
          <div className="mt-3 px-4 py-2 bg-[#FDF2E9] border border-[#F5CBA7] rounded-xl text-xs text-[#8B5A2B]">
            {locationError}
          </div>
        )}

        {/* Filter Pills & Result Summary */}
        <div className="mt-5 pt-4 border-t border-[#E7DED2]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#3B2618] text-[#FAF8F5]"
                    : "bg-[#FAF8F5] text-[#6B5647] border border-[#E7DED2] hover:border-[#8B5A2B] hover:text-[#3B2618]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results Count Indicator */}
          <div className="text-xs text-[#8B5A2B] font-medium shrink-0">
            Showing <span className="font-semibold text-[#3B2618]">{totalResults}</span> {totalResults === 1 ? "showroom" : "showrooms"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSearch;
