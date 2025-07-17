import React, { useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { setLoading } from "../features/ui/uiSlice";
const CategoryFilter = () => {
  // console.log(products);
  const { products, isFiltered, filtered } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const currentData = isFiltered ? filtered : products;

  // 每一次資料轉換時要 Loading
  const isLoading = useSelector((state) => state.ui.isLoading);
  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   setTimeout(() => {
  //     dispatch(setLoading(false));
  //   }, 2000);
  // }, [currentData]);
  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.3, y: 10 }}
        transition={{ duration: 1, ease: easeOut }}
        className="products-list-page grid xl:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 xl:gap-8 md:gap-12 sm:gap-8 p-4"
      >
        {currentData &&
          currentData.map((item, index) => {
            return (
              <Link key={index}>
                <ProductCard
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              </Link>
            );
          })}
      </motion.section>
    </AnimatePresence>
  );
};

export default CategoryFilter;
