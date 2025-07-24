import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { active } from "../features/products/productsSlice";
const NavBtn = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const sort = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // 按鈕點擊後，會依照 category 篩選
  const categoryList = ["所有商品", "熱銷商品", ...Object.keys(sort)];

  const [activeBtn, setActiveBtn] = useState("");
  // 點擊按鈕後，會持續發亮，直到點擊其他按鈕
  const handleActive = () => {};
  return (
    <>
      {categoryList &&
        categoryList.map((cate) => {
          return (
            <div
              key={cate}
              className={`nav_btn select-none ${
                activeBtn === cate ? "active" : ""
              }`}
            >
              <button
                className="cursor-pointer"
                onClick={() => {
                  dispatch(active(cate)), setActiveBtn(cate);
                }}
              >
                <svg>
                  <rect></rect>
                </svg>
                {cate}
              </button>
            </div>
          );
        })}
    </>
  );
};

export default NavBtn;
