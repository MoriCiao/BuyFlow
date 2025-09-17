import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
const CheckoutSuccess = () => {
  const navigate = useNavigate();
  return (
    <section className="checkout-success flex w-full flex-col items-center justify-center gap-8 py-6">
      <strong className="text-[1rem] sm:text-[1.5rem]">
        我們已收到您的訂單，感謝您的訂購！
      </strong>
      <img
        src="/BuyFlow/get-order.svg"
        alt="get-order"
        className="max-w-[50%] sm:max-w-[50%] xl:max-w-[20%]"
      />
      <div>
        <Button
          label="Back to the mall"
          size="lg"
          onClick={() => navigate("/products")}
        />
      </div>
    </section>
  );
};

export default CheckoutSuccess;
