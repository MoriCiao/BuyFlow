import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import PaymentMethod from "./PaymentMethod";

import { useNavigate } from "react-router-dom";
import { newDate } from "../features/cart/cartUtils.js";
import { cleanCart } from "../features/cart/cartSlice.js";
import {
  createOrder,
  savedOrderToLocalStorage,
} from "../features/user/userSlice";
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
    (state) => state.cart
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
        user,
        items,
        deliveryMethod,
        totalAmount,
        totalQuatity,
        pay,
        date: newDate(),
      };

      // 將訂單加入進slice裡
      dispatch(createOrder(order));
      dispatch(cleanCart());

      navigate("/checkout/success");
    }
  };
  const { name, email, phone, address } = user;
  // useEffect(() => {
  //   console.log(allOrders);
  // }, [allOrders]);
  // useEffect(() => {
  //   // 每個使用者唯獨的key
  //   const key = `Order_${email}`;
  //   console.log(key);
  //   dispatch(savedOrderToLocalStorage({ key, allOrders }));
  // }, [user, allOrders]);
  return (
    <section className="order-section col-span-2 grid grid-cols-2 gap-2 items-center">
      <img
        src="/BuyFlow/order-confirmed.svg"
        alt="order"
        className="w-[100%] select-none"
      />
      <form
        action=""
        method="get"
        className="flex flex-col gap-2 border-2 border-black/20 p-4 "
        onSubmit={handleSubmit}
      >
        <h3 className="text-[1.5rem] ">
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
          <div className="px-8  flex flex-col gap-2  w-full">
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
                  className="items-center px-8 py-2 max-w-[30rem]"
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
        <p className=" pr-8 text-[1.1rem]">
          一共 <strong className="text-red-500">{totalQuatity}</strong> 件商品{" "}
          <strong className="text-red-500">{totalAmount} $</strong>
        </p>
        <motion.button
          whileHover={{ backgroundColor: "#333533", color: "#e8eddf" }}
          transition={{ duration: 0.5 }}
          className="border rounded-full w-40 h-10 font-bold m-auto cursor-pointer select-none"
          onClick={handleSubmit}
        >
          Submit Oreder
        </motion.button>
      </form>
    </section>
  );
};

export default OrderSection;
