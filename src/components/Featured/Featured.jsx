import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedCard from "./FeaturedCard";
import Button from "../Button/Button";
import { addItem } from "../../features/cart/cartSlice";
import FeaturedModal from "./FeaturedModal";
const Featured = () => {
  const [isFeaturedModal, setIsFeaturedModal] = useState({
    open: false,
    product: null,
  });
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const rating_items = products.filter((item) => item.rating >= 4.8);
  const featured_items = rating_items.slice(0, 4);
  return (
    <div className="text-white">
      <div>
        <h1 className="text-center text-[3rem] font-bold">精選商品</h1>
      </div>
      <div className="grid w-full grid-cols-1 flex-wrap gap-8 p-8 text-white sm:grid-cols-2 lg:grid-cols-4">
        {featured_items &&
          featured_items.map((f, index) => (
            <FeaturedCard
              key={index}
              title={f.name}
              price={f.price}
              description={f.description}
            >
              <Button
                label="瞭解詳情"
                onClick={() => setIsFeaturedModal({ open: true, product: f })}
              />
            </FeaturedCard>
          ))}
      </div>
      {isFeaturedModal.open && (
        <FeaturedModal
          isFeaturedModal={isFeaturedModal}
          setIsFeaturedModal={setIsFeaturedModal}
        />
      )}
    </div>
  );
};

export default Featured;
