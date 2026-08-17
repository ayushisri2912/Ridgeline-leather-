import React, { useState, useMemo } from "react";
import ShopHero from "../../Components/ShopComponents/allProComps/ShopHero";
import FilterSidebar from "../../Components/ShopComponents/allProComps/FilterSidebar";
import ProductToolbar from "../../Components/ShopComponents/allProComps/ProductToolbar";
import ProductGrid from "../../Components/ShopComponents/allProComps/ProductGrid";
import Pagination from "../../Components/ShopComponents/allProComps/Pagination";

import { products as allProducts } from "../../Data/productsData";
import { FiX } from "react-icons/fi";

const AllProducts = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([25, 500]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBestFor, setSelectedBestFor] = useState([]);
  const [sortOption, setSortOption] = useState("Featured");
  const [viewMode, setViewMode] = useState("grid");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter handlers
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleColorChange = (hex) => {
    setSelectedColors((prev) =>
      prev.includes(hex) ? prev.filter((c) => c !== hex) : [...prev, hex]
    );
    setCurrentPage(1);
  };

  const handleBestForChange = (usage) => {
    setSelectedBestFor((prev) =>
      prev.includes(usage) ? prev.filter((u) => u !== usage) : [...prev, usage]
    );
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([25, 500]);
    setSelectedColors([]);
    setSelectedBestFor([]);
    setCurrentPage(1);
  };

  // Filtered & Sorted products calculation
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Filter by colors
    if (selectedColors.length > 0) {
      result = result.filter(
        (p) => p.colors && p.colors.some((hex) => selectedColors.includes(hex))
      );
    }

    // Filter by best for
    if (selectedBestFor.length > 0) {
      result = result.filter(
        (p) =>
          p.bestFor && p.bestFor.some((use) => selectedBestFor.includes(use))
      );
    }

    // Sort
    if (sortOption === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Newest") {
      result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (sortOption === "Best Selling") {
      result.sort((a, b) => (b.badge === "BEST SELLER" ? -1 : 1));
    }

    return result;
  }, [
    selectedCategories,
    priceRange,
    selectedColors,
    selectedBestFor,
    sortOption,
  ]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#3B2618]">
      {/* Top Shop Hero Banner */}
      <ShopHero />

      {/* Main Content Area */}
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              selectedColors={selectedColors}
              onColorChange={handleColorChange}
              selectedBestFor={selectedBestFor}
              onBestForChange={handleBestForChange}
              onResetFilters={handleResetFilters}
            />
          </div>

          {/* Right Main Product Section */}
          <div className="flex-1 w-full">
            <ProductToolbar
              totalProducts={filteredProducts.length}
              sortOption={sortOption}
              onSortChange={setSortOption}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onToggleMobileFilter={() => setIsMobileFilterOpen(true)}
            />

            <ProductGrid products={filteredProducts} viewMode={viewMode} />

            {filteredProducts.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={3}
                onPageChange={setCurrentPage}
              />
            )}
          </div>

        </div>
      </div>

      {/* Mobile Filter Modal Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-[#FAF8F5] h-full shadow-2xl overflow-y-auto p-6 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8DFD3]">
                <h3 className="text-base font-bold uppercase tracking-wider text-[#3B2618]">
                  Filters
                </h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-[#3B2618]"
                >
                  <FiX size={20} />
                </button>
              </div>

              <FilterSidebar
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                onPriceChange={setPriceRange}
                selectedColors={selectedColors}
                onColorChange={handleColorChange}
                selectedBestFor={selectedBestFor}
                onBestForChange={handleBestForChange}
                onResetFilters={handleResetFilters}
              />
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="mt-6 w-full py-3 bg-[#8B5E3C] text-white text-xs uppercase tracking-widest font-semibold rounded-xl"
            >
              Apply Filters ({filteredProducts.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;