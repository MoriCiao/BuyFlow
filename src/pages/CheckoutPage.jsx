import React from "react";

import BillingInfo from "../components/BillingInfo";
import DeliveryMethod from "../components/DeliveryMethod/DeliveryMethod";
import CartSummary from "../components/CartSummary";
import OrderSection from "../components/OrderSection/OrderSection";

const CheckoutPage = () => {
  return (
    <section className="checkout-page w-full gap-4 p-4 sm:grid-cols-1 xl:grid xl:grid-cols-2">
      <div>
        {/* 購買人資訊 */}
        <BillingInfo />
        <hr className="text-black/20" />
        {/* 配送方式 */}
        <DeliveryMethod />
      </div>
      <div>
        {/* 商品明細 */}
        <CartSummary />
      </div>
      <hr className="col-span-2 mb-8 text-black/20" />

      <OrderSection />
    </section>
  );
};

export default CheckoutPage;
