import React from "react";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";

const ProductToolbar = ({
  totalProducts = 24,
  sortOption = "Featured",
  onSortChange,
  viewMode = "grid",
  onViewModeChange,
  onToggleMobileFilter,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E8DFD3]/60">
      
      {/* Left: Showing count */}
      <p className="text-xs sm:text-sm text-[#5C5147] font-medium">
        Showing <span className="font-semibold text-[#3B2618]">{totalProducts}</span> products
      </p>

      {/* Right Controls */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
        
        {/* Mobile Filter Button */}
        <button
          onClick={onToggleMobileFilter}
          className="lg:hidden flex items-center gap-2 px-3.5 py-2 bg-white rounded-xl border border-[#D8C2A8] text-xs font-semibold text-[#3B2618] hover:bg-[#8B5E3C] hover:text-white transition shadow-sm"
        >
          <FiFilter size={14} />
          <span>Filter</span>
        </button>

        {/* Sort Select */}
        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => onSortChange && onSortChange(e.target.value)}
            className="appearance-none bg-white border border-[#D8C2A8] rounded-xl px-4 py-2 pr-8 text-xs font-semibold text-[#3B2618] focus:outline-none focus:border-[#8B5E3C] cursor-pointer shadow-sm"
          >
            <option value="Featured">Featured</option>
            <option value="Newest">Newest</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Best Selling">Best Selling</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#8B5E3C]">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>

        {/* View Mode Switchers */}
        <div className="flex items-center bg-white border border-[#D8C2A8] rounded-xl p-1 shadow-sm">
          <button
            onClick={() => onViewModeChange && onViewModeChange("grid")}
            aria-label="Grid View"
            className={`p-1.5 rounded-lg transition-colors ${
              viewMode === "grid"
                ? "bg-[#8B5E3C] text-white shadow-sm"
                : "text-[#6C5F56] hover:text-[#3B2618]"
            }`}
          >
            <FiGrid size={15} />
          </button>
          <button
            onClick={() => onViewModeChange && onViewModeChange("list")}
            aria-label="List View"
            className={`p-1.5 rounded-lg transition-colors ${
              viewMode === "list"
                ? "bg-[#8B5E3C] text-white shadow-sm"
                : "text-[#6C5F56] hover:text-[#3B2618]"
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