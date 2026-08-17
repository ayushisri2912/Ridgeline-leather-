import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Components/ProductDetailComponents/Breadcrumb";
import ProductDetailSection from "../../Components/ProductDetailComponents/ProductDetailSection";
import CraftsmanshipHighlights from "../../Components/ProductDetailComponents/CraftsmanshipHighlights";
import ProductInfoTabs from "../../Components/ProductDetailComponents/ProductInfoTabs";
import RelatedProductsSection from "../../Components/ProductDetailComponents/RelatedProductsSection";
import { getProductById } from "../../Data/productsData";

const ProductDetailPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(() => getProductById(id));
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProduct(getProductById(id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    alert(`Added ${product.name} to Cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to luxury checkout for ${product.name}`);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#2D241F] selection:bg-[#8B5A2B] selection:text-[#FAF8F5]">
      
      {/* 1. BREADCRUMB */}
      <Breadcrumb
        category={product.category}
        productName={product.name}
      />

      {/* 2. PRODUCT DETAIL SECTION (3-COLUMN RESPONSIVE LAYOUT) */}
      <ProductDetailSection
        product={product}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* 3. CRAFTSMANSHIP HIGHLIGHTS */}
      <CraftsmanshipHighlights />

      {/* 4. PRODUCT INFORMATION TABS */}
      <ProductInfoTabs product={product} />

      {/* 5. RELATED PRODUCTS ("YOU MAY ALSO LIKE") */}
      <RelatedProductsSection />

    </div>
  );
};

export default ProductDetailPage;
