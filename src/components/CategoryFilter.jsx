import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBtn from "./NavBtn";
import ProductListPage from "../pages/ProductListPage";
const CategoryFilter = () => {
  // console.log(products);

  return (
    <section className="category_filter grid grid-cols-8 w-full h-full gap-16">
      <nav className="category_filter_nav col-start-1 col-span-1 flex flex-col gap-4 items-center">
        <NavBtn />
      </nav>
      <div className="category_product  col-start-2 col-span-7">
        <ProductListPage />
      </div>
    </section>
  );
};

export default CategoryFilter;
