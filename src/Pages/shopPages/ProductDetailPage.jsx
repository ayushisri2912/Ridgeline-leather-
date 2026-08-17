import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Components/ProductDetailComponents/Breadcrumb";
import ProductDetailSection from "../../Components/ProductDetailComponents/ProductDetailSection";
import CraftsmanshipHighlights from "../../Components/ProductDetailComponents/CraftsmanshipHighlights";
import ProductInfoTabs from "../../Components/ProductDetailComponents/ProductInfoTabs";
import RelatedProductsSection from "../../Components/ProductDetailComponents/RelatedProductsSection";
import { getProductById } from "../../Data/productsData";
import { useToast } from "../../Context/ToastContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { showToast } = useToast();

  const [product, setProduct] = useState(() => getProductById(id));

  useEffect(() => {
    setProduct(getProductById(id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const handleAddToCart = (selectedColor, selectedSize, qty = 1) => {
    const colorStr = selectedColor ? (typeof selectedColor === "string" ? selectedColor : selectedColor.name) : "";
    const details = [colorStr, selectedSize].filter(Boolean).join(" / ");
    
    showToast(
      `Added ${product.name} ${details ? `(${details})` : ""} to your shopping bag.`,
      "success",
      "Bag Updated"
    );
  };

  const handleBuyNow = () => {
    showToast(
      `Redirecting to secure luxury checkout for ${product.name}...`,
      "info",
      "Checkout Initiated"
    );
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
