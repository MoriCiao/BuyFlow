import React from "react";
import { Link } from "react-router-dom";
const CheckoutSuccess = () => {
  return (
    <section className="checkout-success w-full flex flex-col gap-8 items-center justify-center py-6">
      <strong className="text-[1.5rem]">
        我們已收到您的訂單，感謝您的訂購！
      </strong>
      <img
        src="/BuyFlow/get-order.svg"
        alt="get-order"
        className="xl:max-w-[20%] sm:max-w-[50%]"
      />
      <Link className="homepage-link" to={"/products"}>
        <button type="button">
          {/* SVG 動畫 */}
          <svg>
            <rect></rect>
          </svg>
          Back to the mall
        </button>
      </Link>
    </section>
  );
};

export default CheckoutSuccess;
