import React from "react";
import SelectDelivery from "./SelectDelivery";
import SelectPay from "./SelectPay";
import Button from "../../components/Button/Button";

const CheckoutInformation = ({
  deliveryPayment,
  setDeliveryPayment,
  totalAmount,
  handleToCheckout,
}) => {
  return (
    <div className="checkout flex h-full flex-col justify-between gap-2 bg-zinc-800 lg:flex-1">
      <div className="justtify-center flex w-full flex-col items-center bg-zinc-600 py-2">
        <h3 className="m-auto text-center text-[2rem]">結帳資訊</h3>
        <p>請選擇您的結帳方式</p>
      </div>

      <SelectDelivery
        deliveryPayment={deliveryPayment}
        setDeliveryPayment={setDeliveryPayment}
      />

      <SelectPay
        deliveryPayment={deliveryPayment}
        setDeliveryPayment={setDeliveryPayment}
      />

      <Button
        label={`CheckOut 金額  
                ${totalAmount + (deliveryPayment.delivery === "超商配送" ? 60 : 0)} $ 
                ${deliveryPayment.delivery === "超商配送" ? "(+60 $)" : ""}`}
        variant="success"
        size="lg"
        onClick={handleToCheckout}
      />
    </div>
  );
};

export default CheckoutInformation;
