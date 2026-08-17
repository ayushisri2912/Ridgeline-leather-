import React, { useState, useRef, useEffect } from "react";
import { SlidersHorizontal, ChevronDown, Check } from "lucide-react";

const BagsToolbar = ({
  totalProducts,
  sortOption,
  onSortChange,
  onToggleMobileFilter,
  activeFilterCount = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    "Featured",
    "Newest",
    "Price Low to High",
    "Price High to Low",
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full mb-8">
      <div className="bg-[#FFFDFC] border border-[#E5D8C8] shadow-sm rounded-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-4 transition-all duration-300">
        
        {/* Left: Product Count */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#8B5A2B]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider text-[#3B2618] uppercase">
            Showing {totalProducts} {totalProducts === 1 ? "Product" : "Products"}
          </span>
        </div>

        {/* Right Controls: Filter & Sort */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto">
          
          {/* Filter Toggle Button */}
          <button
            onClick={onToggleMobileFilter}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F6F2EC] hover:bg-[#E5D8C8]/60 text-[#3B2618] rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-[#E5D8C8] cursor-pointer"
          >
            <SlidersHorizontal size={14} className="text-[#8B5A2B]" />
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#3B2618] text-[#FAF8F5] text-[10px] flex items-center justify-center font-bold ml-1">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#F6F2EC] text-[#3B2618] rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-[#E5D8C8] cursor-pointer"
            >
              <span className="text-[#6B6258] hidden sm:inline">Sort:</span>
              <span className="text-[#3B2618] font-bold">{sortOption}</span>
              <ChevronDown
                size={14}
                className={`text-[#8B5A2B] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-[#FFFDFC] border border-[#E5D8C8] rounded-xl shadow-xl z-30 py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                <div className="px-4 py-2 border-b border-[#E5D8C8]/50 text-[10px] uppercase font-bold tracking-widest text-[#8B5A2B]">
                  Sort Bags
                </div>
                {sortOptions.map((option) => {
                  const isSelected = sortOption === option;
                  return (
                    <button
                      key={option}
                      onClick={() => {
                        onSortChange(option);
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-xs tracking-wider flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                        isSelected
                          ? "bg-[#F6F2EC] text-[#3B2618] font-bold"
                          : "text-[#6B6258] hover:bg-[#FAF8F5] hover:text-[#3B2618]"
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && <Check size={14} className="text-[#8B5A2B]" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default BagsToolbar;
