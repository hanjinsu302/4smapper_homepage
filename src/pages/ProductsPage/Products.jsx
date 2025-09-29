import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Products.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import productsbannerimg from "../../images/products/products_benner.png";
import Btn_category from "../../components/Products/Btn_category";
import ProductCard from "../../components/Products/ProductCard";
import productData from "../../data/productData";
import { imageData } from "./ProductsImg";



const Products = () => {
  const [activeCategory, setActiveCategory] = useState("DRONE");
  const [showAll, setShowAll] = useState(false);

  const currentImages = imageData[activeCategory] || [];
  const visibleImages = showAll ? currentImages : currentImages.slice(0, 6);
  const { t } = useTranslation("products"); // Products namespace 사용

  return (
    <>
      <Header />
      <div className="Header_Block"></div>
      <div className="Container"> 
      <div className="Products_Banner">
        {/* <div>PRODUCTS</div> */}
        <img className="Banner_img" src={productsbannerimg} />
      </div>
      <div className="container">
        <div className="Products_section1">
          <div className="Products_section_title">
            <div className="circle_red"></div>
            <div>Hardware</div>
          </div>
          <div className="Products_section1_description">
          {t('section1.des')}
          </div>
          <div className="Products_section1_items">
      {/* 버튼 클릭 시 카테고리 변경 */}
      <div className="Products_section1_items_category">
        <Btn_category onCategoryChange={setActiveCategory} />
      </div>

      {/* 이미지 박스 */}
      <div className="Products_section1_items_categoryBox">
        <div className="image-grid">
          {visibleImages.map((item, idx) => (
            <div className="image-card" key={idx}>
              <img src={item.src} alt={item.name} />
              <h4>{item.name}</h4>
              {/* <p>{item.description}</p> */}
              {/* <h href={item.link} target="_blank" rel="noopener noreferrer">
                자세히 보기
              </h> */}
            </div>
          ))}
        </div>

        {/* More 버튼 */}
        {currentImages.length > 6 && !showAll && (
          <div className="more-btn-wrapper">
            <button onClick={() => setShowAll(true)}>More</button>
          </div>
        )}
      </div>
    </div>
        </div>
      </div>
      <div className="background_white">
        <div className="container">
          <div className="Products_section2">
            <div className="Products_section_title">
              <div className="circle_red"></div>
              <div>Software</div>
            </div>
            <div className="Products_section2_description">
            {t('section2.des')}
            </div>
          </div>
        </div>
        <div className="Products_section2_items">
          <div>
            {productData.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                alt={product.alt}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
