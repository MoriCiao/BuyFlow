import React from "react";
import { useSelector } from "react-redux";
import SortProductCard from "./SortProductCard";

const SortProduct = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products.slice(0, 2));
  const sortProduct = products.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) + 1;
    return acc;
  }, {});
  console.log(Object.entries(sortProduct));
  return (
    <div className="flex flex-col gap-8 p-8 text-white">
      <div>
        <h1 className="text-center text-[3rem] font-bold">商品分類</h1>
      </div>
      <div className="flex flex-col flex-wrap gap-8 md:flex-row">
        {sortProduct &&
          Object.entries(sortProduct).map((s, index) => (
            <SortProductCard key={index} sortkey={s[0]} value={s[1]} />
          ))}
      </div>
    </div>
  );
};

export default SortProduct;
