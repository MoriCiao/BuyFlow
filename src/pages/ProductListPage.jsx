import NavBtn from "../components/NavBtn";
import CategoryFilter from "../components/CategoryFilter.jsx";

// 所有商品的 List, 會使用 <ProductCard/>
const ProductListPage = () => {
  return (
    <section className="product-list xl:grid xl:grid-cols-8 md:flex  w-full h-full md:gap-8 sm:flex sm:flex-col">
      <nav className="category_filter_nav col-start-1 col-span-1 xl:flex xl:flex-col md:grid-cols-3  items-center sm:grid-cols-3 grid grid-cols-2 gap-4">
        <NavBtn />
      </nav>
      <hr className="md:hidden block my-4 text-black/20" />
      <div className="category_product  col-start-2 xl:col-span-7 md:col-span-3">
        <CategoryFilter />
      </div>
    </section>
  );
};

export default ProductListPage;
