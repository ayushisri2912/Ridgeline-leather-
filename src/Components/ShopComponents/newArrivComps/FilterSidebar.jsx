import React, { useState } from "react";
import { FiSliders, FiChevronUp, FiChevronDown, FiCheck } from "react-icons/fi";

const FilterSidebar = ({
  selectedCategories = [],
  onCategoryChange,
  priceRange = [25, 500],
  onPriceChange,
  selectedColors = [],
  onColorChange,
  selectedBestFor = [],
  onBestForChange,
  onResetFilters,
}) => {
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    colors: true,
    bestFor: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const categories = [
    { name: "Travel Bags", count: 14 },
    { name: "Messenger Bags", count: 12 },
    { name: "Wallets", count: 18 },
    { name: "Accessories", count: 15 },
    { name: "Hunting Gear", count: 8 },
  ];

  const colors = [
    { name: "Dark Brown", hex: "#3B2618" },
    { name: "Saddle Brown", hex: "#8B5E3C" },
    { name: "Cognac", hex: "#C79A63" },
    { name: "Black", hex: "#1F1F1F" },
    { name: "Espresso", hex: "#2A1B12" },
  ];

  const bestForOptions = [
    { name: "Everyday Use", count: 16 },
    { name: "Travel", count: 14 },
    { name: "Work", count: 11 },
    { name: "Outdoor", count: 9 },
  ];

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedColors.length > 0 ||
    selectedBestFor.length > 0 ||
    priceRange[1] < 500;

  return (
    <aside className="w-full lg:w-[280px] xl:w-[300px] bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl p-6 shrink-0 h-fit sticky top-28 shadow-[0_4px_20px_-4px_rgba(59,38,24,0.04)] transition-all">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b border-[#E5D8C8]">
        <div className="flex items-center gap-2.5">
          <FiSliders className="text-[#8B5E3C]" size={16} />
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3B2618]">
            Filter By
          </h2>
        </div>

        {hasActiveFilters && onResetFilters && (
          <button
            onClick={onResetFilters}
            className="text-[11px] uppercase tracking-wider text-[#8B5E3C] hover:text-[#3B2618] font-semibold transition-colors hover:underline"
          >
            Reset All
          </button>
        )}
      </div>

      {/* CATEGORIES */}
      <div className="py-5 border-b border-[#E5D8C8]">
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full text-left group"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B2618] group-hover:text-[#8B5E3C] transition-colors">
            Category
          </span>
          {openSections.categories ? (
            <FiChevronUp size={14} className="text-[#8B5E3C]" />
          ) : (
            <FiChevronDown size={14} className="text-[#8B5E3C]" />
          )}
        </button>

        {openSections.categories && (
          <div className="mt-4 space-y-3">
            {categories.map((cat) => {
              const isChecked = selectedCategories.includes(cat.name);
              return (
                <label
                  key={cat.name}
                  className="flex items-center justify-between text-xs sm:text-sm text-[#6B6258] hover:text-[#3B2618] cursor-pointer group select-none"
                >
                  <div className="flex items-center gap-3">
                    {/* Custom Elegant Checkbox */}
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onCategoryChange && onCategoryChange(cat.name)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${
                          isChecked
                            ? "bg-[#8B5E3C] border-[#8B5E3C] text-white shadow-xs"
                            : "border-[#E5D8C8] bg-[#FAF8F5] group-hover:border-[#8B5E3C]"
                        }`}
                      >
                        {isChecked && <FiCheck size={11} strokeWidth={3} />}
                      </div>
                    </div>

                    <span className="font-normal group-hover:translate-x-0.5 transition-transform duration-200">
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-xs text-[#9E9388] font-light">({cat.count})</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* PRICE RANGE */}
      <div className="py-5 border-b border-[#E5D8C8]">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-left group"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B2618] group-hover:text-[#8B5E3C] transition-colors">
            Price Range
          </span>
          {openSections.price ? (
            <FiChevronUp size={14} className="text-[#8B5E3C]" />
          ) : (
            <FiChevronDown size={14} className="text-[#8B5E3C]" />
          )}
        </button>

        {openSections.price && (
          <div className="mt-4">
            <input
              type="range"
              min="25"
              max="500"
              value={priceRange[1]}
              onChange={(e) => onPriceChange && onPriceChange([priceRange[0], Number(e.target.value)])}
              className="w-full accent-[#8B5E3C] bg-[#FAF8F5] h-1.5 rounded-lg cursor-pointer border border-[#E5D8C8]"
            />
            <div className="flex justify-between items-center mt-3 text-xs font-medium text-[#6B6258]">
              <span>${priceRange[0]}</span>
              <span className="text-[#3B2618] font-semibold">${priceRange[1] >= 500 ? "500+" : priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* LEATHER COLORS */}
      <div className="py-5 border-b border-[#E5D8C8]">
        <button
          onClick={() => toggleSection("colors")}
          className="flex items-center justify-between w-full text-left group"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B2618] group-hover:text-[#8B5E3C] transition-colors">
            Leather Colors
          </span>
          {openSections.colors ? (
            <FiChevronUp size={14} className="text-[#8B5E3C]" />
          ) : (
            <FiChevronDown size={14} className="text-[#8B5E3C]" />
          )}
        </button>

        {openSections.colors && (
          <div className="mt-4 flex flex-wrap gap-3">
            {colors.map((col) => {
              const isSelected = selectedColors.includes(col.hex);
              return (
                <button
                  key={col.hex}
                  onClick={() => onColorChange && onColorChange(col.hex)}
                  title={col.name}
                  className={`relative w-7 h-7 rounded-full transition-all duration-200 flex items-center justify-center ${
                    isSelected
                      ? "ring-2 ring-[#8B5E3C] ring-offset-2 ring-offset-[#FFFDFC] scale-105"
                      : "border border-[#E5D8C8] hover:scale-105 hover:border-[#8B5E3C]"
                  }`}
                  style={{ backgroundColor: col.hex }}
                >
                  {isSelected && (
                    <FiCheck size={12} className={col.hex === "#1F1F1F" || col.hex === "#3B2618" || col.hex === "#2A1B12" ? "text-white" : "text-[#3B2618]"} />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* BEST FOR */}
      <div className="pt-5">
        <button
          onClick={() => toggleSection("bestFor")}
          className="flex items-center justify-between w-full text-left group"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3B2618] group-hover:text-[#8B5E3C] transition-colors">
            Best For
          </span>
          {openSections.bestFor ? (
            <FiChevronUp size={14} className="text-[#8B5E3C]" />
          ) : (
            <FiChevronDown size={14} className="text-[#8B5E3C]" />
          )}
        </button>

        {openSections.bestFor && (
          <div className="mt-4 space-y-3">
            {bestForOptions.map((opt) => {
              const isChecked = selectedBestFor.includes(opt.name);
              return (
                <label
                  key={opt.name}
                  className="flex items-center justify-between text-xs sm:text-sm text-[#6B6258] hover:text-[#3B2618] cursor-pointer group select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onBestForChange && onBestForChange(opt.name)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${
                          isChecked
                            ? "bg-[#8B5E3C] border-[#8B5E3C] text-white shadow-xs"
                            : "border-[#E5D8C8] bg-[#FAF8F5] group-hover:border-[#8B5E3C]"
                        }`}
                      >
                        {isChecked && <FiCheck size={11} strokeWidth={3} />}
                      </div>
                    </div>

                    <span className="font-normal group-hover:translate-x-0.5 transition-transform duration-200">
                      {opt.name}
                    </span>
                  </div>
                  <span className="text-xs text-[#9E9388] font-light">({opt.count})</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

    </aside>
  );
};

export default FilterSidebar;