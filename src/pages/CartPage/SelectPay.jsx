import React from "react";
import PaymentMethod from "../../components/PaymentMethod";
const paymentMap = [
  "信用卡",
  "無卡分期",
  "貨到付款",
  "行動支付",
  "超商付款",
  "ATM轉帳",
];

function SelectEmoji(text) {
  switch (text) {
    case "信用卡":
      return "💳";
    case "無卡分期":
      return "💲";
    case "貨到付款":
      return "💰";
    case "行動支付":
      return "📲";
    case "超商付款":
      return "🏪";
    case "ATM轉帳":
      return "🏧";
    default:
      return "💳";
  }
}
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
        {paymentMap &&
          paymentMap.map((p, index) => {
            return (
              <PaymentMethod
                key={index}
                emoji={SelectEmoji(p)}
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
