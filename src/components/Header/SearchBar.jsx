import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../features/products/productsSlice";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyWord] = useState("");

  return (
    <div className="flex w-full items-center">
      <div className="h-full rounded-l">
        <input
          type="text"
          placeholder="搜尋商品..."
          className="w-full bg-white px-4 py-2 indent-[1rem]"
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
      </div>
      <div>
        <Button
          label="Search"
          onClick={() => {
            (dispatch(search(keyword)), setKeyWord(""), navigate("/products"));
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
