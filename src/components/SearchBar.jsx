import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../features/products/productsSlice";
import { useNavigate } from "react-router-dom";

const img = ["/BuyFlow/logo.svg", "/BuyFlow/undraw-cart.svg"];

const img_style = "md:block hidden md:w-[200px] md:h-[50px]";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyWord] = useState("");

  return (
    <>
      <img
        src={img[0]}
        alt="LOGO"
        className={`col-start-1 select-none xl:h-[100px] xl:w-[300px] ${img_style}`}
        draggable="false"
      />

      <div className="serach h-full w-full max-w-[40rem]">
        <div className="m-auto flex items-center justify-center overflow-hidden rounded-full border">
          <input
            type="text"
            placeholder="搜尋商品..."
            className="search-input h-[2rem] w-full rounded-l-full border-0 indent-[1rem]"
            value={keyword}
            onChange={(e) => setKeyWord(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                (dispatch(search(keyword)),
                  setKeyWord(""),
                  navigate("/products"));
              }
            }}
          />
          <button
            type="button"
            className="flex h-[2rem] cursor-pointer items-center bg-[#333533] px-4 text-white select-none"
            onClick={() => {
              (dispatch(search(keyword)),
                setKeyWord(""),
                navigate("/products"));
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
        className={`col-start-1 select-none xl:h-[100px] xl:w-[300px] ${img_style}`}
        draggable="false"
      />
    </>
  );
};

export default SearchBar;
