import React from "react";
import "./ProductCard.css";

function ProductCard({ image, alt, title, description }) {
  return (
    <div className="ProductCard">
      <img src={image} alt={alt} />
      <div className="Products_section2_items_box">
        <div className="Products_section2_items_title">{title}</div>
        <div className="Products_section2_items_description">{description}</div>
      </div>
    </div>
  );
}

export default ProductCard;
