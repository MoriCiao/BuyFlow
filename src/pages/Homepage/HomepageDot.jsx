import React from "react";

const HomepageDot = ({ carouselImages, current, setCurrentAndDirection }) => {
  return (
    <div className="homepage-dot">
      {carouselImages.map((_, index) => {
        return (
          <button
            key={index}
            className={`${
              index === current ? "scale-115 bg-[#e8eddf]" : "bg-[#e8eddf]/20"
            }`}
            onClick={() =>
              // 每個指示燈的 index = 目前圖片的index，在判定目前是往左還是往右
              setCurrentAndDirection([index, index > current ? 1 : -1])
            }
          ></button>
        );
      })}
    </div>
  );
};

export default HomepageDot;
