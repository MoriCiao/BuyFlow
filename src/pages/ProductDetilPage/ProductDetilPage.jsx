import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductDetil from "./ProductDetil";
import Breadcrumb from "./Breadcrumb";
import DetilCard from "./DetilCard";

const ProductDetilPage = () => {
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return <p>The product you are looking for does not exist</p>;
  }

  return (
    <section className="product-detail flex w-full flex-col gap-4 px-8 text-white md:px-0">
      {/* breadcrumb */}
      <Breadcrumb product={product} />
      <DetilCard product={product} />
      <hr />
      <ProductDetil />
    </section>
  );
};

export default ProductDetilPage;
