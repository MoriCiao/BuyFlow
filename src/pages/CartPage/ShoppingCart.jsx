import React from "react";
import { useDispatch } from "react-redux";
import {
  modifyAmount,
  removeItem,
  cleanCart,
} from "../../features/cart/cartSlice";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";

const STYLE = {
  cart_item_container: `cart-item-container flex w-full items-center justify-around px-4 sm:px-0`,

  cart_item_content: `cart-item-content relative flex w-full items-center justify-around bg-white/20 py-4`,

  cart_item_img: `cart-item-img m-auto h-25 w-25 rounded-full border bg-white object-contain`,

  cart_item_info: `cart-item-info flex flex-1 flex-col items-center justify-between gap-4 sm:flex-2 lg:flex-row xl:flex-1 xl:flex-3`,

  cart_item_wran: `cart-item-wran absolute -top-8 rounded-md bg-red-500 px-1 `,
};

const CounterBtn = ({ text, onClick }) => (
  <span className="cursor-pointer bg-gray-200 px-1" onClick={onClick}>
    {text}
  </span>
);

const ShoppingCart = ({ i }) => {
  const dispatch = useDispatch();
  return (
    <div className={`item-${i.id} ${STYLE.cart_item_container}`}>
      <div className={STYLE.cart_item_content}>
        <div className="flex flex-1 items-center overflow-hidden">
          <img
            src={i.image}
            alt={`item-${i.id}`}
            className={STYLE.cart_item_img}
          />
        </div>
        <div className={STYLE.cart_item_info}>
          <h3 className="flex-1">
            <strong>{i.name}</strong>
          </h3>

          <div className="relative flex-1">
            <div className="flex justify-center">
              <CounterBtn
                text="➖"
                onClick={() => {
                  dispatch(modifyAmount({ id: i.id, type: "decrement" }));
                }}
              />
              {/* wran */}
              <motion.strong
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={`${STYLE.cart_item_wran} ${
                  i.quantity === i.stock ? "" : "hidden"
                }`}
              >
                MAX！
              </motion.strong>

              <div className="relative w-15 border">{i.quantity}</div>

              <CounterBtn
                text="➕"
                onClick={() => {
                  dispatch(modifyAmount({ id: i.id, type: "increment" }));
                }}
              />
            </div>
          </div>

          <p className="flex-1">
            <strong className="">{i.quantity * i.price} $</strong>
          </p>
        </div>
      </div>
      <motion.button
        className="px-8"
        onClick={() => {
          dispatch(removeItem(i));
        }}
      >
        ❌
      </motion.button>
    </div>
  );
};

export default ShoppingCart;
