import React from "react";
import { useTranslation } from "react-i18next";
import "./Products.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import productsbannerimg from "../../images/products/products_benner.png";
import Btn_category from "../../components/Products/Btn_category";
import ProductCard from "../../components/Products/ProductCard";
import productData from "../../data/productData";

const Products = () => {
  const { t } = useTranslation("Products"); // Products namespace 사용

  return (
    <>
      <Header />
      <div className="Header_Block"></div>
      <div className="Products_Banner">
        <div>PRODUCTS</div>
        <img className="Banner_img" src={productsbannerimg} />
      </div>
      <div className="container">
        <div className="Products_section1">
          <div className="Products_section_title">
            <div className="circle_red"></div>
            <div>Hardware</div>
          </div>
          <div className="Products_section1_description">
            4S Mapper is powered by trusted drone and sensor technologies for
            high-quality geospatial data.
          </div>
          <div className="Products_section1_items">
            <div className="Products_section1_items_category">
              <Btn_category></Btn_category>
            </div>
            <div className="Products_section1_items_products">
              <div>
                <img src="" alt="" />
                <div>logo</div>
              </div>
              <div>productName</div>
              <button className="btn_products">View details</button>
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
              4S Mapper's services are powered by greatful image generation and
              Geo software.
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
      <Footer />
    </>
  );
};

export default Products;
