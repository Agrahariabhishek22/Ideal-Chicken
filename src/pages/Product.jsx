import React from "react";
import Navbar from "../components/CommonComponents/Navbar";
import Hero from "../components/CommonComponents/Hero";
import ProductCatalog from "../components/ProductComponents/ProductCatalog";
import Footer from "../components/CommonComponents/Footer";
import ShopOnlineSection from "../components/CommonComponents/ShopOnlineSection";

const Product = () => {
  return (
    <div className="mx-auto" >
      <div className="px-6 mb-5 h-[374px]">
        <Hero
          badge="Our Products"
          title="Premium Quality Chicken Products"
          subtitle="From whole birds to premium cuts, discover our range of fresh, hygienic, and delicious chicken products."
          img="Block 1.png"
        />
      </div>
      <ProductCatalog />
      <ShopOnlineSection/>
    </div>
  );
};

export default Product;
