import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { active, keywordChange } from "../../features/products/productsSlice";
import Button from "../Button/Button";

const CategoryBtn = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [activeBtn, setActiveBtn] = useState("");

  const sort = [...products].reduce((acc, product) => {
    const category = product.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // 按鈕點擊後，會依照 category 篩選
  const categoryList = ["所有商品", "熱銷商品", ...Object.keys(sort)];

  return (
    <ul className="flex w-full flex-wrap gap-4 px-8 lg:flex-col">
      {categoryList &&
        categoryList.map((cate, index) => {
          return (
            <li key={index} className="min-w-[150px] flex-1">
              <Button
                label={cate}
                size="lg"
                className={`transtion flex items-center duration-800 ${activeBtn === cate ? "border border-white/50 bg-zinc-800" : ""}`}
                onClick={() => {
                  dispatch(active(cate));
                  dispatch(keywordChange(cate));
                  setActiveBtn(cate);
                }}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default CategoryBtn;
