import React from "react";

import BillingInfo from "../components/BillingInfo";
import DeliveryMethod from "../components/DeliveryMethod";
import CartSummary from "../components/CartSummary";
import OrderSection from "../components/OrderSection";
// 將購物車確認的商品導入CheckoutPage結帳頁面
// 商品、總件數、總金額
// 使否有優惠券
// 配送選項、配送地址
// 付款方式

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
