import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setDelivery } from "../features/cart/cartSlice";
import DeliveryBtn from "./DeliveryBtn";
const deliveryImg = {
  location: "/BuyFlow/delivery-location.svg",
  on_the_way: "/BuyFlow/delivery-on-the-way.svg",
};

const DeliveryMethod = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState("");

  const handleBtn = (id, e) => {
    setIsActive(id);
    dispatch(setDelivery({ deliveryMethod: e.currentTarget.value }));
  };
  return (
    <section className="delivery-method grid grid-cols-2">
      <h3 className="text-[1.15rem] col-span-2 pt-4">
        <strong>請選擇配送方式：</strong>
      </h3>
      <DeliveryBtn
        id="btn1"
        label="超商配送"
        value="超商配送"
        image={deliveryImg.location}
        isActive={isActive === "btn1"}
        onClick={handleBtn}
      />
      <DeliveryBtn
        id="btn2"
        label="廠商配送"
        value="廠商配送"
        image={deliveryImg.on_the_way}
        isActive={isActive === "btn2"}
        onClick={handleBtn}
      />
    </section>
  );
};

export default DeliveryMethod;
