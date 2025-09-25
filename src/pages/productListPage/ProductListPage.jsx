import "./_ProductListPage.scss";
import CategoryBtn from "../../components/CategoryBtn/CategoryBtn.jsx";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter.jsx";

// 所有商品的 List, 會使用 <ProductCard/>
const ProductListPage = () => {
  return (
    <section className="product-list gap-2 text-white">
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
