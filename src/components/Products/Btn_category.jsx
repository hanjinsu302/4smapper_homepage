import React, { useState } from "react";
import "./Btn_category.css";

const buttonList = ["DRONE", "SENSOR", "ETC"];

function Btn_category() {
  const [activeIndex, setActiveIndex] = useState(0); // 기본 첫 번째 버튼 선택

  return (
    <div>
      {buttonList.map((label, index) => (
        <button
          key={index}
          className={`btn_category ${activeIndex === index ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Btn_category;
