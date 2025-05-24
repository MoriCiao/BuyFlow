import React, { useContext, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "./CartBodyArea.jsx";

const CartTopArea = () => {
  const {
    products,
    query,
    setQuery,
    setResult,
    handleSearch,
    item,
    setItem,
    handleItems,
  } = useContext(ThemeContext);
  const inputRef = useRef("");
  const topAreaImg = [
    { id: 1, img: "/public/cart/TopImg-1.jpg" },
    { id: 2, img: "/public/cart/TopImg-2.jpg" },
    { id: 3, img: "/public/cart/TopImg-3.jpg" },
    { id: 4, img: "/public/cart/TopImg-4.jpg" },
  ];
  const animateImg_1 = {
    initial: { y: -10 },
    animate: { y: [-10, 10, -10] },
    transition: { duration: 8, repeat: Infinity, repeatType: "loop" },
  };
  const animateImg_2 = {
    initial: { y: 10 },
    animate: { y: [10, -10, 10] },
    transition: { duration: 8, repeat: Infinity, repeatType: "loop" },
  };
  //

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="top-area grid grid-cols-12">
      <div className="top-bg"></div>
      <div className="top-img relative flex items-center justify-center col-span-2 overflow-hidden">
        <motion.img
          {...animateImg_1}
          className="m-auto relative"
          src={topAreaImg[0].img}
          alt=""
        />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-3 w-40 bg-black/10 rounded-full blur-sm z-0"></div>
      </div>
      <div className="top-img relative flex items-center justify-center col-span-2 overflow-hidden ">
        <motion.img
          {...animateImg_2}
          className="m-auto relative"
          src={topAreaImg[1].img}
          alt=""
        />
        {/* 陰影效果 */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-3 w-40 bg-black/10 rounded-full blur-sm z-0"></div>
      </div>
      <div className="col-span-4">
        <div className="search-area  flex items-center justify-center gap-0.5 pt-24">
          <input
            className="w-2/3"
            type="text"
            placeholder="furit..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
                setItem(e.target.value);
              }
            }}
            ref={inputRef}
          />
          <button className="" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="top-img relative flex items-center justify-center col-span-2 overflow-hidden">
        <motion.img
          {...animateImg_1}
          className="m-auto relative"
          src={topAreaImg[2].img}
          alt=""
        />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-3 w-40 bg-black/10 rounded-full blur-sm z-0"></div>
      </div>
      <div className="top-img relative flex items-center justify-center col-span-2 overflow-hidden">
        <motion.img
          {...animateImg_2}
          className="m-auto relative"
          src={topAreaImg[3].img}
          alt=""
        />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-3 w-40 bg-black/10 rounded-full blur-sm z-0"></div>
      </div>
    </div>
  );
};

export default CartTopArea;
