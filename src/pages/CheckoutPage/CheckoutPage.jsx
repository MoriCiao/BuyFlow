import React from "react";
import BillingInfo from "./BillingInfo";
import CartSummary from "./CartSummary";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrderToDashBoard } from "../../features/order/orderSlice";
import { createOrder } from "../../features/user/userSlice";
import { cleanCart } from "../../features/cart/cartSlice";
const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tempOrder } = useSelector((state) => state.user);

  const { user, deliveryPayment, orderID, items, totalAmount } = tempOrder;
  const { name, email, phone, address, ...rest } = user;
  const deliveryInfo = {
    delivery: deliveryPayment.delivery,
    estimated: deliveryPayment.delivery === "超商配送" ? "1-2天" : "3-4天",
    // 如果是超商配送則選區則地址
    // 如果是廠商配送使用預設地址
    toAddress: address,
    freight: deliveryPayment.delivery === "超商配送" ? "60 $" : "免運費",
  };
  const feeDetails = {
    totalAmount: `${totalAmount} $`,
    freight: deliveryPayment.delivery === "超商配送" ? "60 $" : "0",
    discount: "- 0 $",
    accountsPayable: `${totalAmount + (deliveryPayment.delivery === "超商配送" ? 60 : 0)} $`,
  };

  const handleOrder = () => {
    dispatch(createOrder(tempOrder));
    dispatch(addOrderToDashBoard(tempOrder));
    dispatch(cleanCart());
    navigate("/checkout/success");
  };

  return (
    <section className="checkout-page flex w-full flex-col gap-4 text-white">
      <div className="flex w-full flex-col items-center justify-center gap-4 bg-zinc-800 py-4">
        <h3 className="text-[3rem]">訂單確認</h3>
        <p className="text-[1.15rem]">請確認您的訂單資訊無誤後送出</p>
        <div>
          <Button label="準備提交訂單" variant="success_ghost" />
        </div>
      </div>
      <div className="px-4 sm:px-0">
        <div className="flex flex-1 flex-col gap-8 py-4 xl:flex-row">
          {/* 購買人資訊 */}
          <BillingInfo
            emoji={"👤"}
            title="訂購人資訊"
            info={{ name, email, phone, address }}
          />
          <BillingInfo emoji={"📑"} title="配送資訊" info={deliveryInfo} />
        </div>

        <div className="flex flex-1 flex-col gap-8 py-4 lg:max-h-[50vh] lg:flex-row">
          {/* 商品明細 */}
          <CartSummary />

          <div className="flex flex-1 flex-col gap-4">
            <BillingInfo emoji={"💰"} title="費用明細" info={feeDetails} />
            <div className="flex gap-4">
              <Button
                label="返回修改"
                variant="success_ghost"
                onClick={() => navigate("/cart")}
              />
              <Button
                label="下單訂購"
                variant="success"
                onClick={handleOrder}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
