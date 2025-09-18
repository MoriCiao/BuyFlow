import React from "react";
import { useSelector } from "react-redux";
const CartSummary = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <section className="cart-summary">
      <h3 className="col-span-2 text-[1.15rem]">
        <strong>您的商品有</strong>
      </h3>
      <div className="max-h-[30rem] overflow-y-auto border border-black/20 py-4">
        {items &&
          items.map((i, index) => {
            return (
              <div
                key={index}
                className="m-auto grid w-full grid-cols-4 items-center gap-4 px-8 py-2 text-center"
              >
                <img src={i.image} alt="items-image" className="w-25" />
                <p className="col-span-2 flex justify-between px-4">
                  <span>{i.name}</span>
                  <span>
                    {i.price} $ * {i.quantity} 個
                  </span>
                </p>

                <p className="text-start">
                  共 <strong>{i.quantity * i.price} $</strong>
                </p>
                <hr className="col-span-4 text-black/20" />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default CartSummary;
