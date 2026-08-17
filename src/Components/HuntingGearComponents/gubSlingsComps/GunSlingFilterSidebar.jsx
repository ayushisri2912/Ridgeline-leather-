import React, { useState } from "react";
import { ChevronDown, RotateCcw, Check } from "lucide-react";

const GunSlingFilterSidebar = ({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
  selectedColors,
  onColorChange,
  selectedLengths,
  onLengthChange,
  selectedBestFor,
  onBestForChange,
  onResetFilters,
}) => {
  const [openSections, setOpenSections] = useState({
    category: true,
    color: true,
    length: true,
    price: true,
    bestFor: true,
  });

  const categories = [
    "Padded Slings",
    "Quick-Adjust Slings",
    "Classic Slings",
    "Heavy-Duty Slings",
  ];

  const colors = [
    { name: "Dark Brown", hex: "#3B2618" },
    { name: "Saddle Tan", hex: "#8B5A2B" },
    { name: "Cognac", hex: "#C79A63" },
    { name: "Espresso / Black", hex: "#1F1F1F" },
  ];

  const lengths = ['32"-40"', '36"-44"', '40"-50"', 'Heavy Duty'];

  const usages = [
    "Expedition",
    "Mountain Range",
    "Hunting",
    "Tactical Field",
    "Vintage Rifle",
    "All-Weather",
  ];

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedColors.length > 0 ||
    selectedLengths.length > 0 ||
    selectedBestFor.length > 0 ||
    priceRange[0] > 100 ||
    priceRange[1] < 250;

  return (
    <div className="w-full lg:w-72 bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl p-6 shadow-sm sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#E5D8C8]">
        <h3 className="font-serif text-xl font-medium text-[#3B2618] tracking-tight">
          Filter Slings
        </h3>
        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[#8B5A2B] hover:text-[#3B2618] uppercase transition-colors cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* 1. CATEGORY FILTER */}
      <div className="border-b border-[#E5D8C8]/60 pb-6 mb-6">
        <button
          onClick={() => toggleSection("category")}
          className="w-full flex items-center justify-between text-left mb-4 cursor-pointer"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B2618]">
            Category
          </span>
          <ChevronDown
            size={14}
            className={`text-[#8B5A2B] transition-transform duration-200 ${
              openSections.category ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSections.category && (
          <div className="space-y-2.5 pl-1">
            {categories.map((cat) => {
              const isChecked = selectedCategories.includes(cat);
              return (
                <label
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className="flex items-center gap-3 cursor-pointer group select-none text-xs font-normal text-[#6B6258] hover:text-[#3B2618] transition-colors"
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                      isChecked
                        ? "bg-[#3B2618] border-[#3B2618] text-[#FAF8F5]"
                        : "border-[#E5D8C8] group-hover:border-[#8B5A2B] bg-[#FAF8F5]"
                    }`}
                  >
                    {isChecked && <Check size={10} strokeWidth={3} />}
                  </div>
                  <span>{cat}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. LEATHER COLOR FILTER */}
      <div className="border-b border-[#E5D8C8]/60 pb-6 mb-6">
        <button
          onClick={() => toggleSection("color")}
          className="w-full flex items-center justify-between text-left mb-4 cursor-pointer"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B2618]">
            Leather Color
          </span>
          <ChevronDown
            size={14}
            className={`text-[#8B5A2B] transition-transform duration-200 ${
              openSections.color ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSections.color && (
          <div className="grid grid-cols-2 gap-2.5 pl-1">
            {colors.map((color) => {
              const isChecked = selectedColors.includes(color.hex);
              return (
                <button
                  key={color.hex}
                  onClick={() => onColorChange(color.hex)}
                  className={`flex items-center gap-2 p-2 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                    isChecked
                      ? "border-[#3B2618] bg-[#F6F2EC] font-semibold text-[#3B2618]"
                      : "border-[#E5D8C8]/70 hover:border-[#8B5A2B] text-[#6B6258] bg-[#FFFDFC]"
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full border border-black/15 shadow-inner shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="truncate text-[11px]">{color.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. LENGTH FILTER */}
      <div className="border-b border-[#E5D8C8]/60 pb-6 mb-6">
        <button
          onClick={() => toggleSection("length")}
          className="w-full flex items-center justify-between text-left mb-4 cursor-pointer"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B2618]">
            Adjustable Length
          </span>
          <ChevronDown
            size={14}
            className={`text-[#8B5A2B] transition-transform duration-200 ${
              openSections.length ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSections.length && (
          <div className="flex flex-wrap gap-2 pl-1">
            {lengths.map((len) => {
              const isChecked = selectedLengths.includes(len);
              return (
                <button
                  key={len}
                  onClick={() => onLengthChange(len)}
                  className={`px-3 py-1.5 rounded-full text-[11px] tracking-wider uppercase font-medium transition-all border cursor-pointer ${
                    isChecked
                      ? "bg-[#3B2618] text-[#FAF8F5] border-[#3B2618]"
                      : "bg-[#F6F2EC]/60 text-[#6B6258] border-[#E5D8C8] hover:border-[#8B5A2B] hover:text-[#3B2618]"
                  }`}
                >
                  {len}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. PRICE FILTER */}
      <div className="border-b border-[#E5D8C8]/60 pb-6 mb-6">
        <button
          onClick={() => toggleSection("price")}
          className="w-full flex items-center justify-between text-left mb-4 cursor-pointer"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B2618]">
            Price Range
          </span>
          <ChevronDown
            size={14}
            className={`text-[#8B5A2B] transition-transform duration-200 ${
              openSections.price ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSections.price && (
          <div className="space-y-4 pl-1">
            <div className="flex items-center justify-between text-xs font-medium text-[#3B2618]">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
            <input
              type="range"
              min="100"
              max="250"
              step="10"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
              className="w-full accent-[#3B2618] cursor-pointer"
            />
            <div className="flex justify-between gap-2">
              {[
                { label: "All Prices", val: [100, 250] },
                { label: "< $150", val: [100, 150] },
                { label: "$150+", val: [150, 250] },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={() => onPriceChange(btn.val)}
                  className={`flex-1 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-lg border transition-all ${
                    priceRange[0] === btn.val[0] && priceRange[1] === btn.val[1]
                      ? "bg-[#3B2618] text-[#FAF8F5] border-[#3B2618]"
                      : "border-[#E5D8C8] text-[#6B6258] hover:border-[#8B5A2B]"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 5. BEST FOR FILTER */}
      <div>
        <button
          onClick={() => toggleSection("bestFor")}
          className="w-full flex items-center justify-between text-left mb-4 cursor-pointer"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3B2618]">
            Best For
          </span>
          <ChevronDown
            size={14}
            className={`text-[#8B5A2B] transition-transform duration-200 ${
              openSections.bestFor ? "rotate-180" : ""
            }`}
          />
        </button>

        {openSections.bestFor && (
          <div className="flex flex-wrap gap-2 pl-1">
            {usages.map((use) => {
              const isChecked = selectedBestFor.includes(use);
              return (
                <button
                  key={use}
                  onClick={() => onBestForChange(use)}
                  className={`px-3 py-1.5 rounded-full text-[11px] tracking-wider uppercase font-medium transition-all border cursor-pointer ${
                    isChecked
                      ? "bg-[#3B2618] text-[#FAF8F5] border-[#3B2618]"
                      : "bg-[#F6F2EC]/60 text-[#6B6258] border-[#E5D8C8] hover:border-[#8B5A2B] hover:text-[#3B2618]"
                  }`}
                >
                  {use}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default GunSlingFilterSidebar;
