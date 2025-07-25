import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { cancelOrderFormDashBoard } from "../features/order/orderSlice";

const TrackingBtn = ({ text, onClick, style, variant }) => {
  const animation =
    variant === "cancel"
      ? {
          // 取消訂單按鈕UI
          whileHover: {
            backgroundColor: "rgb(255,255,255) ",
            color: "rgb(255,0,0)",
            border: "rgb(255,0,0) 2px solid",
            scale: 1.1,
            x: -5,
            y: -5,
          },
          transition: { duration: 0.5 },
        }
      : {
          // 回會員資料按鈕UI
          initial: { scale: 1 },
          whileHover: {
            backgroundColor: "#333533",
            color: "#e8eddf",
            scale: 1.1,
          },
          transition: { duration: 0.5 },
        };

  return (
    <motion.button
      {...animation}
      onClick={onClick}
      type="button"
      className={style}
      // "absolute bottom-4 right-4 bg-red-500 text-white font-bold text-[1.2rem] border-2 border-black rounded-full px-4 select-none cursor-pointer"
    >
      {text}
    </motion.button>
  );
};

const TrackingDetail = ({ title, p1, p2, p3, p4 }) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-[1.15rem] font-bold">{title}</h3>
      <hr />

      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>{p4}</p>
    </div>
  );
};

const OrderTracking = () => {
  // 用useState 將 localStorage資料儲存來使用
  const [savedOrder, setSavedOrder] = useState([]);

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 訂單刪除
  const handleCancel = (order) => {
    // localStorage 刪除
    const UserKey = `order-${user.email}`;
    const saved = localStorage.getItem(UserKey);
    const savedData = JSON.parse(saved);
    const updatedOrderData = savedData.filter((s) => s.id !== order.id);
    localStorage.setItem(UserKey, JSON.stringify(updatedOrderData));
    setSavedOrder(updatedOrderData);
    // dashboard 刪除(刪除後會將資料上傳至 Storage)
    dispatch(cancelOrderFormDashBoard(order));
  };

  useEffect(() => {
    if (!user) return;
    // 要抓取之前已儲存至 localStorage的對應資料
    const userKey = `order-${user.email}`;
    const saved = localStorage.getItem(userKey);
    const savedData = JSON.parse(saved);

    if (savedData) {
      setSavedOrder(savedData);
    } else {
      setSavedOrder([]);
    }
  }, [user]);

  return (
    <section className="order-tracking relative col-span-2 flex flex-col gap-4 items-start justify-start w-full h-full">
      {savedOrder.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="font-bold text-[2rem]">您目前沒有訂單...</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {savedOrder &&
            savedOrder.map((o, index) => {
              return (
                <div
                  key={index}
                  className="order-detail border border-black/50 w-full max-h-[15rem] p-4 grid grid-cols-4 gap-8"
                >
                  <TrackingDetail
                    title={`訂單：${o.id}`}
                    p1={`訂購時間：${o.date}`}
                    p2={`配送方式：${o.deliveryMethod}`}
                    p3={`總消費金額：${o.totalAmount} $`}
                    p4={`付款方式：${o.pay}`}
                  />

                  <div className="max-h-[10rem]  flex flex-col gap-1">
                    <h3 className="text-[1.15rem] font-bold">訂單內容：</h3>
                    <hr />
                    <div className="overflow-y-auto ">
                      {o.items &&
                        o.items.map((i, index) => {
                          return (
                            <div key={index} className="flex gap-2">
                              <p>{i.name}</p>
                              <p>數量：{i.quantity}</p>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <TrackingDetail
                    title={`收件人資料：`}
                    p1={`收件人姓名：${o.user.name}`}
                    p2={`電話：${o.user.phone}`}
                    p3={`信箱：${o.user.email}`}
                    p4={`收件地址：${o.user.address}`}
                  />

                  <div className="relative flex items-end justify-end">
                    <img src="/BuyFlow/handling.svg" alt="handling" />
                    <TrackingBtn
                      text="取消訂單"
                      variant="cancel"
                      onClick={() => {
                        if (confirm("確定要取消這筆訂單嗎？")) {
                          handleCancel(o);
                        }
                      }}
                      style={
                        "absolute bottom-4 right-4 bg-red-500 text-white font-bold text-[1.2rem] border-2 border-black rounded-full px-4 select-none cursor-pointer"
                      }
                    />
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <TrackingBtn
        text="🔙會員資料"
        variant="menber"
        onClick={() => navigate("/menber")}
        style={
          "border px-4 py-1 text-[1.5rem] tracking-widest  select-none cursor-pointer"
        }
      />
    </section>
  );
};

export default OrderTracking;
