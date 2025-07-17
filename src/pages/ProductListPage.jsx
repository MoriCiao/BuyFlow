import React, { useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import { setLoading } from "../features/ui/uiSlice";
import NavBtn from "../components/NavBtn";
import CategoryFilter from "../components/CategoryFilter.jsx";

// 所有商品的 List, 會使用 <ProductCard/>
const ProductListPage = () => {
  // const { products, isFiltered, filtered } = useSelector(
  //   (state) => state.products
  // );
  // const dispatch = useDispatch();

  // const currentData = isFiltered ? filtered : products;

  // // 每一次資料轉換時要 Loading
  // const isLoading = useSelector((state) => state.ui.isLoading);
  // // useEffect(() => {
  // //   dispatch(setLoading(true));
  // //   setTimeout(() => {
  // //     dispatch(setLoading(false));
  // //   }, 2000);
  // // }, [currentData]);
  return (
    <section className="category_filter grid grid-cols-8 w-full h-full gap-16">
      <nav className="category_filter_nav col-start-1 col-span-1 flex flex-col gap-4 items-center">
        <NavBtn />
      </nav>
      <div className="category_product  col-start-2 col-span-7">
        <CategoryFilter />
      </div>
    </section>
  );
};

export default ProductListPage;
