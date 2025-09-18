import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { active } from "../../features/products/productsSlice";
import Button from "../Button/Button";
import { li } from "framer-motion/client";
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
    <ul className="flex w-full flex-wrap gap-4 px-8 lg:flex-col">
      {categoryList &&
        categoryList.map((cate) => {
          return (
            <li className="min-w-[150px] flex-1">
              <Button
                label={cate}
                size="lg"
                className="flex items-center"
                onClick={() => {
                  (dispatch(active(cate)), setActiveBtn(cate));
                }}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default CategoryBtn;
