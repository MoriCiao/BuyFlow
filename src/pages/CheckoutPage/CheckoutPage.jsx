import React from "react";
import BillingInfo from "./BillingInfo";
import CartSummary from "../../components/CartSummary";
import Button from "../../components/Button/Button";

const CheckoutPage = () => {
  return (
    <section className="checkout-page w-full text-white">
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-zinc-800 py-4">
        <h3 className="text-[3rem]">訂單確認</h3>
        <p className="text-[1.15rem]">請確認您的訂單資訊無誤後送出</p>
        <div>
          <Button label="準備提交訂單" variant="success_ghost" />
        </div>
      </div>
      <div className="flex gap-8 p-8">
        {/* 購買人資訊 */}
        <BillingInfo emoji={"👤"} title="訂購人資訊" info={null} />
        <BillingInfo emoji={"👤"} title="訂購人資訊" info={null} />
      </div>
      <div>
        {/* 商品明細 */}
        <CartSummary />
      </div>
      <Button label="下單訂購" />
    </section>
  );
};

export default CheckoutPage;
