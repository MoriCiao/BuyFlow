import "./_ProductListPage.scss";
import CategoryBtn from "../../components/categoryBtn/CategoryBtn.jsx";
import CategoryFilter from "../../components/categoryFilter/CategoryFilter.jsx";

// 所有商品的 List, 會使用 <ProductCard/>
const ProductListPage = () => {
  return (
    <section className="product-list">
      <nav className="category_filter_nav">
        <CategoryBtn />
      </nav>

      <div className="category_product">
        <CategoryFilter />
      </div>
    </section>
  );
};

export default ProductListPage;
