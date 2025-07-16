import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { setLoading } from "../features/ui/uiSlice";
// 所有商品的 List, 會使用 <ProductCard/>
const ProductListPage = () => {
  const { products, isFiltered, filtered } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const currentData = isFiltered ? filtered : products;

  // 每一次資料轉換時要 Loading

  const isLoading = useSelector((state) => state.ui.isLoading);
  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, [currentData]);

  return (
    <section className="products-list-page grid xl:grid-cols-5 md:grid-cols-3  sm:grid-cols-2 xl:gap-8 md:gap-12 sm:gap-8 p-4">
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
    </section>
  );
};

export default ProductListPage;
