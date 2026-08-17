import React from "react";
import { products } from "../../../Data/productsData";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  const featuredProducts = products
    .filter((item) => item.featured)
    .slice(0, 4);

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-t border-[#E5D8C8]">
      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="uppercase tracking-[0.25em] text-[#8B5E3C] text-xs font-semibold block mb-2">
            CURATED SELECTION
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#3B2618] font-normal"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            You May Also Like
          </h2>

          <p className="mt-3 text-[#6B6258] text-sm sm:text-base max-w-lg mx-auto font-light">
            Explore more handcrafted leather essentials thoughtfully selected for your next journey.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} viewMode="grid" />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RelatedProducts;