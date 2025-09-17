import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, easeInOut, easeIn } from "framer-motion";

const carouselImages = [
  "/BuyFlow/homepage/undraw-1.svg",
  "/BuyFlow/homepage/undraw-2.svg",
  "/BuyFlow/homepage/undraw-3.svg",
];

const HomePage = () => {
  // 目前幻燈片的index, 記錄目前幻燈片的方向(左右)
  const [[current, direction], setCurrentAndDirection] = useState([0, 0]);
  //

  // 幻燈片往前翻轉
  const prevSlide = () => {
    const prevIndex = current === 0 ? carouselImages.length - 1 : current - 1;
    setCurrentAndDirection([prevIndex, -1]);
  };
  // 幻燈片往後翻轉
  const nextSlide = () => {
    const nextIndex = current === carouselImages.length - 1 ? 0 : current + 1;
    setCurrentAndDirection([nextIndex, 1]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className="homepage"
    >
      <div className="homepage_carousel">
        {/* 上一圖片 */}
        <span className="prev-slide left-0" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 0 200 89.68">
            <g id="圖層_2" data-name="圖層 2">
              <g id="圖層_1-2" data-name="圖層 1">
                <path d="M19.92,44.38c9.81,9.69,18.57,18.34,27.31,27,1.31,1.29,2.67,2.53,3.85,3.92,3.16,3.74,3,8.53-.18,11.73s-8.06,3.7-11.66.18Q20.67,69,2.46,50.49C-.94,47-.78,42.37,2.72,38.82q17.9-18.13,36.06-36c3.81-3.74,8.59-3.64,12-.26S54.34,11,50.45,15c-7.92,8.1-16,16.08-24,24C24.66,40.75,22.59,42.19,19.92,44.38Z" />
              </g>
            </g>
          </svg>
        </span>
        {/* 圖片跑馬燈 */}
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            transition={{ duration: 0.5, ease: easeInOut }}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            src={carouselImages[current]}
            alt={`carousel-${current}`}
            className="carousel_img relative z-10 h-full w-full bg-[#333533]/50 p-4"
          />
        </AnimatePresence>
        {/* 下一圖片 */}
        <span className="next-slide right-0" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 0 200 89.68">
            <g id="圖層_2" data-name="圖層 2">
              <g id="圖層_1-2" data-name="圖層 1">
                <path d="M33.5,45.3C23.69,35.61,14.93,27,6.19,18.32,4.88,17,3.52,15.79,2.34,14.39c-3.16-3.73-3-8.53.18-11.72S10.58-1,14.17,2.48Q32.75,20.65,51,39.2c3.41,3.47,3.25,8.11-.25,11.66Q32.81,69,14.64,86.88c-3.81,3.74-8.59,3.64-12,.26S-.92,78.69,3,74.72c7.91-8.1,16-16.08,24-24C28.76,48.93,30.83,47.49,33.5,45.3Z" />
              </g>
            </g>
          </svg>
        </span>
        {/* 指示燈區塊 */}
        <div className="homepage-dot">
          {carouselImages.map((_, index) => {
            return (
              <button
                key={index}
                className={`${
                  index === current
                    ? "scale-115 bg-[#e8eddf]"
                    : "bg-[#e8eddf]/20"
                }`}
                onClick={() =>
                  // 每個指示燈的 index = 目前圖片的index，在判定目前是往左還是往右
                  setCurrentAndDirection([index, index > current ? 1 : -1])
                }
              ></button>
            );
          })}
        </div>
      </div>

      <Link className="homepage-link" to={"/products"}>
        <button type="button">
          {/* SVG 動畫 */}
          <svg>
            <rect></rect>
          </svg>
          Enter the mall
        </button>
      </Link>
    </motion.section>
  );
};

export default HomePage;
