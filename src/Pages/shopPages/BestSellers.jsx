import React from "react";

import BestSellerHero from "../../Components/ShopComponents/bestSellComps/BestSellerHero";
import BestSellerToolbar from "../../Components/ShopComponents/bestSellComps/BestSellerToolbar";
import BestSellerSidebar from "../../Components/ShopComponents/bestSellComps/BestSellerSidebar";
import BestSellerGrid from "../../Components/ShopComponents/bestSellComps/BestSellerGrid";
import EditorsChoice from "../../Components/ShopComponents/bestSellComps/EditorsChoice";
import RelatedProducts from "../../Components/ShopComponents/bestSellComps/RelatedProducts";

const BestSellers = () => {
  return (
    <>
      <BestSellerHero />

      <BestSellerToolbar />

      <section className="bg-[#FAF8F5] py-16">
        <div className="max-w-[1650px] mx-auto px-6 lg:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">

          <BestSellerSidebar />

          <BestSellerGrid />

        </div>
      </section>

      <EditorsChoice />

      <RelatedProducts />
    </>
  );
};

export default BestSellers;