import React from "react";
import ProductCard from "./ProductCard";
import { products as defaultProducts } from "../../../Data/productsData";

const ProductGrid = ({ products = null, viewMode = "grid" }) => {
  // Fallback if products prop is not passed directly
  const displayProducts = products || [...defaultProducts]
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 12);

  if (displayProducts.length === 0) {
    return (
      <div className="bg-[#FFFDFC] border border-[#E5D8C8] rounded-2xl p-12 text-center my-6">
        <h3
          className="text-2xl text-[#3B2618] mb-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          No Products Match Your Filter
        </h3>
        <p className="text-sm text-[#6B6258] max-w-md mx-auto font-light">
          Try resetting your selected filters or price range to view our newest handcrafted collection.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} viewMode="grid" />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} viewMode="list" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;