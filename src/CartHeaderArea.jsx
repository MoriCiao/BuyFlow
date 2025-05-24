import React, { useReducer, useState, useContext } from "react";

import { ThemeContext } from "./CartBodyArea.jsx";
const CartHeader = () => {
  const { isOpen, toggleCart, cartItem, dispatch } = useContext(ThemeContext);

  const totlePrice = cartItem.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="header h-full w-full relative">
      <button
        className="fixed bottom-4 right-4 rounded-md z-50"
        onClick={toggleCart}
      >
        {isOpen ? "Close Cart" : "Open Cart"}
      </button>
      <div
        className={`cart-body border border-md fixed top-16 right-0 h-3/4 flex items-start z-40 mt-16 p-2 rounded-md transition-all duration-300 ${
          isOpen
            ? "translate-x-0 w-80 right-4 "
            : "translate-x-full w-0 overflow-hidden"
        }`}
      >
        <div className="w-full h-full grid grid-rows-12 ">
          <div className="py-3 row-start-1 row-span-1">
            <p className="text-xl">以下是您選購的商品：</p>
            <hr />
          </div>
          <div className="cart-area  py-2 my-2 h-auto max-h-[600px] overflow-y-auto scroll-width-none row-start-2 row-span-10">
            {cartItem !== ""
              ? cartItem.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="cart-item rounded-md px-4 py-2 my-2"
                    >
                      <div className="grid grid-cols-4">
                        <div className="col-1">
                          <img
                            className="cartItemIcon"
                            src="/projests-picture/cart/basket-shopping-dark-solid.svg"
                            alt="購物車物品小圖示.."
                          />
                        </div>
                        <div className="pl-2 col-span-3">
                          <p>{item.name}</p>
                          <p>
                            單價：{item.price} , 數量：{item.quantity}
                          </p>
                        </div>
                      </div>

                      <div className="remove-btn grid grid-cols-4 items-end  mt-2">
                        <div className="col-span-3">
                          <p>
                            單一品項總額為：
                            <strong>{item.price * item.quantity}</strong>
                          </p>
                        </div>
                        {/* <div className="col-span-1"></div> */}
                        <div>
                          <button
                            type="button"
                            className="remove-btn cols-span-1"
                            onClick={() => {
                              dispatch({
                                type: "REMOVE_Item",
                                payload: {
                                  id: item.id,
                                  name: item.name,
                                  price: item.price,
                                  quantity: item.quantity,
                                },
                              });
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "沒東西"}
          </div>
          <div className="py-2 sticky bottom-0 z-10">
            <hr />
            <div className="flex items-center justify-end">
              <p>目前購物總金額為：</p>
              <strong className="text-xl text-red-500 pl-12">
                $ {totlePrice}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* <Light /> */}
    </div>
  );
};

export default CartHeader;
