import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../features/products/productsSlice";
import { useNavigate } from "react-router-dom";

const img = ["/BuyFlow/public/logo.svg", "/BuyFlow/public/undraw-cart.svg"];

const img_style = "md:block sm:hidden md:w-[200px] md:h-[50px]";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyWord] = useState("");

  return (
    <>
      <img
        src={img[0]}
        alt="LOGO"
        className={`col-start-1 xl:w-[300px] xl:h-[100px] select-none ${img_style}`}
        draggable="false"
      />

      <div className="serach max-w-[40rem] w-full h-full">
        <div className="flex justify-center items-center rounded-full border overflow-hidden m-auto">
          <input
            type="text"
            placeholder="搜尋商品..."
            className="search-input w-full rounded-l-full h-[2rem] indent-[1rem] border-0"
            value={keyword}
            onChange={(e) => setKeyWord(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(search(keyword)),
                  setKeyWord(""),
                  navigate("/products");
              }
            }}
          />
          <button
            type="button"
            className="select-none cursor-pointer flex items-center h-[2rem] px-4 bg-[#333533] text-white"
            onClick={() => {
              dispatch(search(keyword)), setKeyWord(""), navigate("/products");
            }}
          >
            <span>🔍</span>
            Search
          </button>
        </div>
      </div>
      <img
        src={img[1]}
        alt="undraw-cart"
        className={`col-start-1 xl:w-[300px] xl:h-[100px] select-none ${img_style}`}
        draggable="false"
      />
    </>
  );
};

export default SearchBar;
