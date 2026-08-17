import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../../Data/productsData";
import BestSellerCard from "./BestSellerCard";

const RelatedProducts = () => {

  const related = products.slice(0, 3);

  return (
    <section className="bg-[#FAF8F5] py-24">

      <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.35em] text-xs text-[#8B5A2B]">
            You May Also Like
          </p>

          <h2
            className="text-5xl text-[#3B2618] mt-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Complete Your Collection
          </h2>

          <p className="text-[#6B6258] mt-5 max-w-2xl mx-auto leading-8">
            Pair your best-selling leather essentials with other
            handcrafted pieces designed for timeless elegance.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {related.map((product) => (

            <BestSellerCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

        <div className="text-center mt-14">

          <Link
            to="/shop"
            className="inline-block border border-[#3B2618] px-8 py-4 rounded-full text-[#3B2618] hover:bg-[#3B2618] hover:text-white transition"
          >
            View All Products
          </Link>

        </div>

      </div>

    </section>
  );
};

export default RelatedProducts;