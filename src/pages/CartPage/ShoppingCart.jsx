import React from "react";
import { useDispatch } from "react-redux";
import {
  modifyAmount,
  removeItem,
  cleanCart,
} from "../../features/cart/cartSlice";
import { motion } from "framer-motion";

const ShoppingCart = ({ i }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`item-${i.id} flex w-[80%] items-center justify-around gap-10`}
    >
      <div className="flex w-full items-center justify-around bg-white/20 py-4">
        <div className="flex flex-1 items-center overflow-hidden">
          <img
            src={i.image}
            alt={`item-${i.id}`}
            className="object-fit m-auto h-25 w-25 rounded-full border bg-white"
          />
        </div>

        <h3 className="flex-1">
          <strong>{i.name}</strong>
        </h3>
        <div className="relative flex-1">
          <div className="flex justify-center">
            <span
              className="cursor-pointer bg-gray-200 px-1"
              onClick={() => {
                dispatch(modifyAmount({ id: i.id, type: "decrement" }));
              }}
            >
              ➖
            </span>
            <motion.strong
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`absolute -top-8 border bg-white/50 px-1 !text-[0.75rem] text-red-500 ${
                i.quantity === i.stock ? "" : "hidden"
              }`}
            >
              已達最大數量！
            </motion.strong>
            <strong className="w-15 border">{i.quantity}</strong>
            <span
              className="cursor-pointer bg-gray-200 px-1"
              onClick={() => {
                dispatch(modifyAmount({ id: i.id, type: "increment" }));
              }}
            >
              ➕
            </span>
          </div>
        </div>
        <p className="flex-1">
          <strong className="">{i.quantity * i.price} $</strong>
        </p>
      </div>
      <motion.button
        className=""
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
