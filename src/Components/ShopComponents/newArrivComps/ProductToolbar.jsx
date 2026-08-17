import React from "react";
import { FiSliders, FiGrid, FiList } from "react-icons/fi";

const ProductToolbar = ({
  totalProducts = 12,
  sortOption = "Newest",
  onSortChange,
  viewMode = "grid",
  onViewModeChange,
  onToggleMobileFilter,
}) => {
  return (
    <div className="bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl px-5 sm:px-6 py-4 mb-8 shadow-[0_2px_12px_-3px_rgba(59,38,24,0.03)] flex flex-col sm:flex-row items-center justify-between gap-4">
      
      {/* Left: Showing Products count */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
        <p className="text-xs sm:text-sm text-[#6B6258] font-normal tracking-wide">
          Showing <span className="font-semibold text-[#3B2618]">{totalProducts}</span> Products
        </p>

        {/* Mobile Filter Button */}
        <button
          onClick={onToggleMobileFilter}
          className="lg:hidden flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF8F5] border border-[#E5D8C8] rounded-xl text-xs font-semibold text-[#3B2618] hover:border-[#8B5E3C] hover:text-[#8B5E3C] transition-colors"
        >
          <FiSliders size={14} className="text-[#8B5E3C]" />
          <span>Filter</span>
        </button>
      </div>

      {/* Right Controls: Sort & View Mode */}
      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        
        {/* Sort Select */}
        <div className="flex items-center gap-2.5">
          <span className="text-xs uppercase tracking-wider text-[#6B6258] font-medium hidden md:inline-block">
            Sort By:
          </span>
          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => onSortChange && onSortChange(e.target.value)}
              className="appearance-none bg-[#FAF8F5] border border-[#E5D8C8] rounded-xl px-4 py-2 pr-9 text-xs font-semibold text-[#3B2618] focus:outline-none focus:border-[#8B5E3C] cursor-pointer transition-colors shadow-xs"
            >
              <option value="Newest">Newest</option>
              <option value="Featured">Featured</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Best Selling">Best Selling</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8B5E3C]">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* View Mode Switchers */}
        <div className="flex items-center bg-[#FAF8F5] border border-[#E5D8C8] rounded-xl p-1">
          <button
            onClick={() => onViewModeChange && onViewModeChange("grid")}
            aria-label="Grid View"
            className={`p-1.5 rounded-lg transition-all duration-200 ${
              viewMode === "grid"
                ? "bg-[#3B2618] text-[#FAF8F5] shadow-xs"
                : "text-[#6B6258] hover:text-[#3B2618]"
            }`}
          >
            <FiGrid size={15} />
          </button>
          <button
            onClick={() => onViewModeChange && onViewModeChange("list")}
            aria-label="List View"
            className={`p-1.5 rounded-lg transition-all duration-200 ${
              viewMode === "list"
                ? "bg-[#3B2618] text-[#FAF8F5] shadow-xs"
                : "text-[#6B6258] hover:text-[#3B2618]"
            }`}
          >
            <FiList size={15} />
          </button>
        </div>

      </div>

    </div>
  );
};

export default ProductToolbar;