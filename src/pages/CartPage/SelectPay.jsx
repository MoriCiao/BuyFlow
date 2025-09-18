import React from "react";
import PaymentMethod from "../../components/PaymentMethod";
const payment = [
  "信用卡",
  "無卡分期",
  "貨到付款",
  "行動支付",
  "超商付款",
  "ATM轉帳",
];

const SelectPay = ({ deliveryPayment, setDeliveryPayment }) => {
  const activePayment = deliveryPayment.payment;
  return (
    <div className="gap- flex w-full flex-col">
      <div className="flex w-full px-4">
        <h3 className="text-[1rem] font-bold">
          <span>💳</span> 付款方式
        </h3>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-2 p-4">
        {payment &&
          payment.map((p, index) => {
            const paymentEmoji = () => {
              if (p === "信用卡") return "💳";
              if (p === "無卡分期") return "💲";
              if (p === "貨到付款") return "💰";
              if (p === "行動支付") return "📲";
              if (p === "超商付款") return "🏪";
              if (p === "ATM轉帳") return "🏧";
            };
            return (
              <PaymentMethod
                key={index}
                emoji={paymentEmoji()}
                label={p}
                onClick={() =>
                  setDeliveryPayment((prev) => ({
                    ...prev,
                    payment: p,
                  }))
                }
                activePayment={activePayment}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SelectPay;
