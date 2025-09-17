import React, { useState } from "react";
import { motion, AnimatePresence, easeInOut, easeIn } from "framer-motion";
import HomepageDot from "./HomepageDot";
import HomepageSlide from "./HomepageSlide";

const carouselImages = [
  "/BuyFlow/homepage/undraw-1.svg",
  "/BuyFlow/homepage/undraw-2.svg",
  "/BuyFlow/homepage/undraw-3.svg",
];

const HomepageCarousel = () => {
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
    <div className="homepage_carousel">
      {/* 上一圖片 */}
      <HomepageSlide type="left" onClick={prevSlide} />
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
      <HomepageSlide type="right" onClick={nextSlide} />

      {/* 指示燈區塊 */}
      <HomepageDot
        carouselImages={carouselImages}
        current={current}
        setCurrentAndDirection={setCurrentAndDirection}
      />
    </div>
  );
};

export default HomepageCarousel;
