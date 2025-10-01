import "./_categoryFilter.scss";
import { Fragment, useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../features/ui/uiSlice";
import ProductCard from "../productCard/ProductCard";
import Button from "../Button/Button";

const CategoryFilter = () => {
  const { products, isFiltered, filtered } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();

  const currentData = isFiltered ? filtered : products;

  const NotFoundProuduct = () => {
    return (
      <div className="category_filter">
        <div>
          <Button label="查無符合資料" variant="info" size="lg" />
        </div>
      </div>
    );
  };

  // 每一次資料轉換時要 Loading
  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentData]);

  if (currentData.length === 0) return <NotFoundProuduct />;

  return (
    <AnimatePresence mode="wait">
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.3, y: 10 }}
        transition={{ duration: 1, ease: easeOut }}
        className="category_filter"
      >
        {currentData &&
          currentData.map((item, index) => {
            return (
              <Fragment key={index}>
                <ProductCard
                  // 提供 product 商品參數給對應的 useParams
                  product={item}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              </Fragment>
            );
          })}
      </motion.section>
    </AnimatePresence>
  );
};

export default CategoryFilter;
