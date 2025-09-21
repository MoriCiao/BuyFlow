import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
const STYLE = {
  section: `checkout-success flex w-full flex-col items-center justify-center gap-8 p-4 text-white `,

  container: `flex min-h-[60vh] flex-col justify-between overflow-hidden rounded-xl bg-zinc-800 shadow-lg`,

  header: `flex h-[10vh] w-full items-center justify-center bg-zinc-600`,

  content: `flex h-full flex-col items-center gap-4 lg:flex-row`,
};
const CheckoutSuccess = () => {
  const navigate = useNavigate();

  const CheckoutSuccessContent = () => (
    <div className={STYLE.content}>
      <div className="h-full w-full flex-1 text-center sm:text-[1.5rem]">
        我們已收到您的訂單 <br />
        ，感謝您的訂購！
      </div>

      <img
        src="/BuyFlow/get-order.svg"
        alt="get-order"
        className="w-full max-w-[40%] lg:p-8"
      />
    </div>
  );

  return (
    <section className={STYLE.section}>
      <div className={STYLE.container}>
        <div className={STYLE.header}>
          <h3 className="text-[2rem] font-bold">提交成功</h3>
        </div>

        <CheckoutSuccessContent />

        <div className="mx-auto w-50 py-4">
          <Button
            label="Back to the mall"
            variant="success"
            size="lg"
            onClick={() => navigate("/products")}
          />
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
