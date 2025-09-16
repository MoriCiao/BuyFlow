import "./_categoryBtn.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { active } from "../../features/products/productsSlice";
const CategoryBtn = () => {
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

  return (
    <>
      {categoryList &&
        categoryList.map((cate) => {
          return (
            <div
              key={cate}
              className={`category-btn ${activeBtn === cate ? "active" : ""}`}
            >
              <button
                className=""
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

export default CategoryBtn;
