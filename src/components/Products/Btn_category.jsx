import React, { useState } from "react";
import "./Btn_category.css";

const buttonList = ["DRONE", "SENSOR", "GNSS"];

function Btn_category({ onCategoryChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    onCategoryChange(buttonList[index]);
  };

  return (
    <div className="btn-wrapper">
      {buttonList.map((label, index) => (
        <button
          key={index}
          className={`btn_category ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Btn_category;
