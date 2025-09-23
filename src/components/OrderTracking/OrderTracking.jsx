import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cancelOrderFormDashBoard } from "../../features/order/orderSlice";
import { setLoading } from "../../features/ui/uiSlice";
import { setOrder } from "../../features/user/userSlice";
import Button from "../Button/Button";
import TrackingCard from "./TrackingCard";

const STYLE = {
  orderTracking: `order-tracking min-h-[90vh] w-full space-y-4 px-4 md:px-0`,

  noOrder: `noOrder-container flex h-[80vh] w-full items-center justify-center rounded-md border border-white/50 bg-zinc-800 text-white shadow-lg]`,
};

const OrderTracking = () => {
  // 用useState 將 localStorage資料儲存來使用
  const { allOrders, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const OrderTrackingOperator = () => (
    <div className="flex justify-between">
      <div>
        <Button
          label="會員資料"
          variant="info"
          onClick={() => navigate("/menber")}
        />
      </div>
      <div>
        <Button
          label="前往商城"
          variant="success"
          onClick={() => navigate("/products")}
        />
      </div>
    </div>
  );

  // 訂單刪除
  const handleCancel = (order) => {
    // localStorage 刪除
    const UserKey = `order-${user.email}`;
    // 尋找對應的 Storage
    const saved = localStorage.getItem(UserKey);
    // 轉換
    const savedData = JSON.parse(saved);
    // 篩選未刪除的訂單
    const updatedOrderData = savedData.filter(
      (s) => s.orderID !== order.orderID,
    );
    // 將訂單再上傳 Storage
    localStorage.setItem(UserKey, JSON.stringify(updatedOrderData));

    // dashboard 刪除(刪除後會將資料上傳至 Storage)
    dispatch(cancelOrderFormDashBoard(order));

    dispatch(setLoading(true));
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
    return () => clearTimeout(timer);
  };
  useEffect(() => {
    dispatch(setOrder());
  }, []);

  return (
    <section className={STYLE.orderTracking}>
      {allOrders.length === 0 ? (
        <div className={STYLE.noOrder}>
          <h1 className="text-[1.5rem] font-bold lg:text-[2rem]">
            您目前沒有訂單...
          </h1>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-4">
          {allOrders &&
            allOrders.map((o, index) => {
              return (
                <TrackingCard
                  key={index}
                  order={o}
                  handleCancel={handleCancel}
                />
              );
            })}
        </div>
      )}
      {/* 操作區 */}
      <OrderTrackingOperator />
    </section>
  );
};

export default OrderTracking;
