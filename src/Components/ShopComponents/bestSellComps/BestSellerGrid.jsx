import React from "react";
import { products } from "../../../Data/productsData";
import BestSellerCard from "./BestSellerCard";

const BestSellerGrid = () => {

  const bestProducts = products.filter(
    (product) => product.badge === "BEST SELLER"
  );

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

        {bestProducts.map((product) => (
          <BestSellerCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
};

export default BestSellerGrid;