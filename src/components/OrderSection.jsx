import React, { Fragment, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import PaymentMethod from "./PaymentMethod";

import { useNavigate } from "react-router-dom";
import { newDate } from "../features/cart/cartUtils.js";
import { addOrderToDashBoard } from "../features/order/orderSlice.js";
import { cleanCart } from "../features/cart/cartSlice.js";

const payment = [
  "信用卡",
  "無卡分期",
  "貨到付款",
  "行動支付",
  "超商付款",
  "ATM銀聯卡",
];

const Hr = () => {
  return <hr className="text-black/20" />;
};

const OrderSection = () => {
  const { items, totalAmount, totalQuatity, deliveryMethod } = useSelector(
    (state) => state.cart,
  );
  const { user, allOrders } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pay, setPay] = useState("");
  const handlePay = (name, e) => {
    setPay(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!deliveryMethod) {
      alert("請選擇配送方式...");
    } else if (!pay) {
      alert("請選擇付款方式...");
    } else {
      const order = {
        id: nanoid(),
        user,
        items,
        deliveryMethod,
        totalAmount,
        totalQuatity,
        pay,
        date: newDate(),
      };

      // // 將訂單加入進slice裡
      // dispatch(createOrder(order));

      // 使用者訂單傳至 localStorage
      const userKey = `order-${user.email}`; // 用每個使用者的eamil 當key
      const savedOrder = localStorage.getItem(userKey); // 抓取之前資料，
      const userOrders = savedOrder ? JSON.parse(savedOrder) : [];
      const updatedUserOrders = [...userOrders, order]; // 將新訂單加入
      localStorage.setItem(userKey, JSON.stringify(updatedUserOrders));

      // 將訂單傳至dashboard
      dispatch(addOrderToDashBoard(order));

      // 訂單送出後需要清空購物車 & localStorage
      dispatch(cleanCart());
      const cartKey = `Cart_${user.email}`;
      localStorage.setItem(cartKey, JSON.stringify([]));

      navigate("/checkout/success");
    }
  };
  const { name, email, phone, address } = user;

  return (
    <section className="order-section relative col-span-2 items-center gap-2 sm:z-2 md:grid-cols-1 xl:grid xl:grid-cols-2">
      <img
        src="/BuyFlow/order-confirmed.svg"
        alt="order"
        draggable="false"
        className="w-[100%] select-none md:absolute md:-z-1 md:opacity-20 xl:relative xl:z-0 xl:opacity-100"
      />
      <form
        action=""
        method="get"
        className="flex flex-col gap-2 border-2 border-black/20 p-4 sm:w-full"
        onSubmit={handleSubmit}
      >
        <h3 className="text-[1.5rem]">
          <strong>請您在核對下方訂單資訊：</strong>
        </h3>
        <p>
          配送方式：<strong>{deliveryMethod}</strong>
        </p>
        <Hr />
        <p>付款方式：</p>
        <div className="grid grid-cols-3 gap-4">
          {payment &&
            payment.map((p, index) => (
              <Fragment key={index}>
                <PaymentMethod
                  label={p}
                  name="paymentMethod"
                  value={p}
                  checked={pay === p}
                  onChange={handlePay}
                />
              </Fragment>
            ))}
        </div>
        <Hr />
        <div className="flex w-full py-2">
          <p className="w-[5rem]">收件人：</p>
          <div className="flex w-full flex-col gap-2 px-8">
            <p>
              <strong className="tracking-widest">{name}</strong> 先生/小姐
            </p>
            <p>
              Phone : <strong className="tracking-widest">{phone}</strong>
            </p>
            <p>
              Email : <strong className="tracking-widest">{email}</strong>
            </p>
            <p>
              Address : <strong className="tracking-widest">{address}</strong>
            </p>
          </div>
        </div>
        <Hr />
        <div>
          <h3>購物清單摘要</h3>
          {items &&
            items.map((i, index) => {
              return (
                <div
                  key={index}
                  className="max-w-[30rem] items-center px-8 py-2"
                >
                  <p className="col-span-2 flex justify-end px-4">
                    <span>{i.name}</span>
                    <span>
                      {i.price} $ * {i.quantity} 個，
                      <strong> {i.quantity * i.price} $</strong>
                    </span>
                  </p>
                  <hr className="w-full text-black/20" />
                </div>
              );
            })}
        </div>
        <p className="pr-8 text-[1.1rem]">
          一共 <strong className="text-red-500">{totalQuatity}</strong> 件商品{" "}
          <strong className="text-red-500">{totalAmount} $</strong>
        </p>
        <motion.button
          whileHover={{ backgroundColor: "#333533", color: "#e8eddf" }}
          transition={{ duration: 0.5 }}
          className="m-auto h-10 w-40 cursor-pointer rounded-full border font-bold select-none"
          onClick={handleSubmit}
        >
          Submit Oreder
        </motion.button>
      </form>
    </section>
  );
};

export default OrderSection;
