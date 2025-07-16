import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../features/products/productsSlice";
const SearchBar = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [keyword, setKeyWord] = useState("");

  return (
    <>
      <img
        src="./logo.svg"
        alt="LOGO"
        className="col-start-1 w-[300px] h-[100px] select-none "
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
                dispatch(search(keyword)), setKeyWord("");
              }
            }}
          />
          <button
            type="button"
            className="select-none cursor-pointer flex items-center h-[2rem] px-4 bg-[#333533] text-white"
            onClick={() => {
              dispatch(search(keyword)), setKeyWord("");
            }}
          >
            <span>🔍</span>
            Search
          </button>
        </div>
      </div>
      <img
        src="./logo.svg"
        alt="LOGO"
        className="col-start-1 w-[300px] h-[100px] select-none "
      />
    </>
  );
};

export default SearchBar;
