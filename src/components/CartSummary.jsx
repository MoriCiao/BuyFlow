import React from "react";
import { useSelector } from "react-redux";
const CartSummary = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <section className="cart-summary ">
      <h3 className="text-[1.15rem] col-span-2">
        <strong>您訂購商品有：</strong>
      </h3>
      <div className="overflow-y-auto max-h-[30rem] border border-black/20 py-4">
        {items &&
          items.map((i, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 items-center px-8 py-2 m-auto w-full text-center"
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
