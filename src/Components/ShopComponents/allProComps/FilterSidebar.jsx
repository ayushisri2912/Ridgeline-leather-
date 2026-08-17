import React, { useState } from "react";
import { FiSliders, FiChevronUp, FiChevronDown } from "react-icons/fi";

const FilterSidebar = ({
  selectedCategories = [],
  onCategoryChange,
  priceRange = [50, 2000],
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
    { name: "Travel Bags", count: 24 },
    { name: "Messenger Bags", count: 18 },
    { name: "Wallets", count: 32 },
    { name: "Accessories", count: 26 },
    { name: "Hunting Gear", count: 16 },
  ];

  const colors = [
    { name: "Dark Brown", hex: "#3B2618" },
    { name: "Saddle Brown", hex: "#8B5E3C" },
    { name: "Cognac", hex: "#C79A63" },
    { name: "Black", hex: "#1F1F1F" },
    { name: "Espresso", hex: "#2A1B12" },
  ];

  const bestForOptions = [
    { name: "Everyday Use", count: 28 },
    { name: "Travel", count: 22 },
    { name: "Work", count: 19 },
    { name: "Outdoor", count: 15 },
  ];

  return (
    <aside className="w-full lg:w-[270px] xl:w-[280px] bg-[#F5F0EA] border border-[#E8DFD3] rounded-2xl p-5 sm:p-6 shrink-0 h-fit sticky top-28">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD3]">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#3B2618]">
          Filters
        </h2>
        <div className="flex items-center gap-2">
          {onResetFilters && (selectedCategories.length > 0 || selectedColors.length > 0 || selectedBestFor.length > 0) && (
            <button
              onClick={onResetFilters}
              className="text-[10px] uppercase tracking-wider text-[#8B5E3C] hover:underline font-semibold"
            >
              Reset
            </button>
          )}
          <FiSliders className="text-[#3B2618]" size={16} />
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="py-4 border-b border-[#E8DFD3]">
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B2618]">
            Categories
          </span>
          {openSections.categories ? (
            <FiChevronUp size={14} className="text-[#8B5E3C]" />
          ) : (
            <FiChevronDown size={14} className="text-[#8B5E3C]" />
          )}
        </button>

        {openSections.categories && (
          <div className="mt-3.5 space-y-2.5">
            {categories.map((cat) => (
              <label
                key={cat.name}
                className="flex items-center justify-between text-xs sm:text-sm text-[#5C5147] hover:text-[#3B2618] cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.name)}
                    onChange={() => onCategoryChange && onCategoryChange(cat.name)}
                    className="w-4 h-4 rounded border-[#D8C2A8] text-[#8B5E3C] focus:ring-[#8B5E3C] accent-[#8B5E3C] cursor-pointer"
                  />
                  <span className="group-hover:translate-x-0.5 transition-transform font-light">
                    {cat.name}
                  </span>
                </div>
                <span className="text-xs text-[#8C7D73]">({cat.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* PRICE RANGE */}
      <div className="py-4 border-b border-[#E8DFD3]">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B2618]">
            Price Range
          </span>
          {openSections.price ? (
            <FiChevronUp size={14} className="text-[#8B5E3C]" />
          ) : (
            <FiChevronDown size={14} className="text-[#8B5E3C]" />
          )}
        </button>

        {openSections.price && (
          <div className="mt-3.5">
            <input
              type="range"
              min="25"
              max="500"
              value={priceRange[1]}
              onChange={(e) => onPriceChange && onPriceChange([priceRange[0], Number(e.target.value)])}
              className="w-full accent-[#8B5E3C] bg-[#E8DFD3] h-1.5 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between items-center mt-3 text-xs font-medium text-[#5C5147]">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1] >= 500 ? "2,000+" : priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* LEATHER COLOR */}
      <div className="py-4 border-b border-[#E8DFD3]">
        <button
          onClick={() => toggleSection("colors")}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B2618]">
            Leather Color
          </span>
          {openSections.colors ? (
            <FiChevronUp size={14} className="text-[#8B5E3C]" />
          ) : (
            <FiChevronDown size={14} className="text-[#8B5E3C]" />
          )}
        </button>

        {openSections.colors && (
          <div className="mt-3.5 flex flex-wrap gap-2.5">
            {colors.map((col) => {
              const isSelected = selectedColors.includes(col.hex);
              return (
                <button
                  key={col.hex}
                  onClick={() => onColorChange && onColorChange(col.hex)}
                  title={col.name}
                  className={`w-6 h-6 rounded-full border transition-all duration-200 ${
                    isSelected
                      ? "border-[#8B5E3C] scale-110 ring-2 ring-[#8B5E3C]/40"
                      : "border-black/10 hover:scale-105"
                  }`}
                  style={{ backgroundColor: col.hex }}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* BEST FOR */}
      <div className="pt-4">
        <button
          onClick={() => toggleSection("bestFor")}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B2618]">
            Best For
          </span>
          {openSections.bestFor ? (
            <FiChevronUp size={14} className="text-[#8B5E3C]" />
          ) : (
            <FiChevronDown size={14} className="text-[#8B5E3C]" />
          )}
        </button>

        {openSections.bestFor && (
          <div className="mt-3.5 space-y-2.5">
            {bestForOptions.map((opt) => (
              <label
                key={opt.name}
                className="flex items-center justify-between text-xs sm:text-sm text-[#5C5147] hover:text-[#3B2618] cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={selectedBestFor.includes(opt.name)}
                    onChange={() => onBestForChange && onBestForChange(opt.name)}
                    className="w-4 h-4 rounded border-[#D8C2A8] text-[#8B5E3C] focus:ring-[#8B5E3C] accent-[#8B5E3C] cursor-pointer"
                  />
                  <span className="group-hover:translate-x-0.5 transition-transform font-light">
                    {opt.name}
                  </span>
                </div>
                <span className="text-xs text-[#8C7D73]">({opt.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;