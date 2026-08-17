import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [], viewMode = "grid" }) => {
  if (products.length === 0) {
    return (
      <div className="bg-[#F5F0EA] border border-[#E8DFD3] rounded-2xl p-12 text-center my-6">
        <h3
          className="text-2xl text-[#3B2618] font-normal"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          No Products Found
        </h3>
        <p className="text-sm text-[#5C5147] mt-2 font-light">
          Try resetting your selected filters or price range to explore more items.
        </p>
      </div>
    );
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            viewMode="list"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode="grid"
        />
      ))}
    </div>
  );
};

export default ProductGrid;