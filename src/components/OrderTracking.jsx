import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { cancelOrderFormDashBoard } from "../features/order/orderSlice";
import { setLoading } from "../features/ui/uiSlice";
const TrackingBtn = ({ text, onClick, style, variant, disabled }) => {
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
      : variant === "send"
        ? {
            // 已寄貨
            initial: { scale: 1 },

            transition: { duration: 0.5 },
          }
        : {
            // 回會員資料按鈕UI
            initial: { scale: 1, backgroundColor: "#e8eddf" },
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
      disabled={disabled}
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
  const { order } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 訂單刪除
  const handleCancel = (order) => {
    // localStorage 刪除
    const UserKey = `order-${user.email}`;
    // 尋找對應的 Storage
    const saved = localStorage.getItem(UserKey);
    // 轉換
    const savedData = JSON.parse(saved);
    // 篩選未刪除的訂單
    const updatedOrderData = savedData.filter((s) => s.id !== order.id);
    // 將訂單再上傳 Storage
    localStorage.setItem(UserKey, JSON.stringify(updatedOrderData));
    setSavedOrder(updatedOrderData);

    // dashboard 刪除(刪除後會將資料上傳至 Storage)
    dispatch(cancelOrderFormDashBoard(order));

    dispatch(setLoading(true));
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
    return () => clearTimeout(timer);
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

    dispatch(setLoading(true));
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
    return () => clearTimeout(timer);
  }, [user]);

  return (
    <section className="order-tracking relative col-span-2 flex h-full w-full flex-col items-start justify-start gap-4">
      {savedOrder.length === 0 ? (
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="text-[2rem] font-bold">您目前沒有訂單...</h1>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-4">
          {savedOrder &&
            savedOrder.map((o, index) => {
              return (
                <div
                  key={index}
                  className="order-detail grid min-h-[15rem] w-full gap-8 border border-black/50 px-4 py-2 sm:py-4 md:grid-cols-2 xl:grid-cols-4"
                >
                  <TrackingDetail
                    title={`訂單：${o.id}`}
                    p1={`訂購時間：${o.date}`}
                    p2={`配送方式：${o.deliveryMethod}`}
                    p3={`總消費金額：${o.totalAmount} $`}
                    p4={`付款方式：${o.pay}`}
                  />

                  <div className="flex max-h-[10rem] flex-col gap-1">
                    <h3 className="text-[1.15rem] font-bold">訂單內容：</h3>
                    <hr />
                    <div className="overflow-y-auto">
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
                    <img
                      src="/BuyFlow/handling.svg"
                      alt="handling"
                      className="absolute bottom-0 hidden w-80 sm:block"
                    />
                    <TrackingBtn
                      key={o?.isSend}
                      text={o?.isSend ? "🚚 已出貨" : "取消訂單"}
                      variant={o?.isSend ? "send" : "cancel"}
                      disabled={o?.isSend ? true : false}
                      onClick={
                        o?.isSend
                          ? null
                          : () => {
                              if (confirm("確定要取消這筆訂單嗎？")) {
                                handleCancel(o);
                              }
                            }
                      }
                      style={`${
                        o?.isSend
                          ? "bg-[#333533] text-[#e8eddf]/50 cursor-not-allowed"
                          : "bg-red-500 text-white cursor-pointer"
                      } absolute sm:bottom-4 sm:right-4 bottom-0 right-0 font-bold text-[1.2rem] border-2 border-black rounded-full px-4 select-none `}
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
          "border px-4 py-1 bg-[#e8eddf] sm:text-[1.5rem] text-md tracking-widest select-none cursor-pointer "
        }
      />
    </section>
  );
};

export default OrderTracking;
