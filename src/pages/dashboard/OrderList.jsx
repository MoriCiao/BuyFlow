import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reloadOrderFromStorage,
  sendOrder,
} from "../../features/order/orderSlice";
const OrderList = () => {
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  // 搜尋關鍵字
  const [keyword, setKeyWord] = useState("");

  const filtered = order.filter((o) => {
    const orderID = o.id.toLowerCase();
    const orderUser = o.user.name.toLowerCase();
    return orderID.includes(keyword) || orderUser.includes(keyword);
  });

  const curretData = filtered.length === 0 ? order : filtered;

  useEffect(() => {
    // 載入Storage資料
    const storeKey = "dashboard-store";
    dispatch(reloadOrderFromStorage(storeKey));
  }, []);

  // order變動時，儲存至Storage
  useEffect(() => {
    const storeKey = "dashboard-store";
    localStorage.setItem(storeKey, JSON.stringify(order));
  }, [order]);

  return (
    <section className="order-list flex w-full flex-col items-start justify-start gap-4">
      <div className="mx-auto my-4 flex w-full items-center justify-center overflow-hidden rounded-full border py-2">
        <input
          type="text"
          placeholder="搜尋訂單..."
          className="search-input h-[2rem] w-full rounded-full border-0 indent-[1rem]"
          value={keyword}
          onChange={(e) => setKeyWord(e.target.value)}
        />
      </div>
      {order.length === 0 ? (
        <div className="flex h-full min-h-[200px] w-full justify-center bg-[#e8eddf] pt-20 text-center text-[1.5rem] font-bold">
          <p>目前總訂單為{order.length} ,無任何訂單....</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex h-full min-h-[200px] w-full justify-center bg-[#e8eddf] pt-20 text-center text-[1.5rem] font-bold">
          <p>無任何與查詢相符訂單....</p>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-4 bg-[#e8eddf]">
          {curretData.map((o, index) => {
            return (
              <details
                key={index}
                className="relative w-full border border-black/50 px-4 py-2"
              >
                <summary className="overflow-hidden py-4 sm:text-[1.1rem] md:py-0 md:text-[1.5rem]">
                  訂單編號：
                  <br /> <span className="break-all">{o.id}</span>{" "}
                  {o?.isSend ? null : <span className="">‼️</span>}
                  <button
                    type="button"
                    className={`absolute top-2 right-0 right-4 w-25 cursor-pointer rounded-full border px-2 font-bold sm:!text-[1rem] md:top-4 ${
                      o?.isSend
                        ? "border-2 border-white bg-red-500"
                        : "border-2 border-red-500 bg-white"
                    }`}
                    onClick={() => {
                      if (confirm("請確認商品是否已出貨?")) {
                        dispatch(sendOrder(o));
                      }
                    }}
                  >
                    {o?.isSend ? (
                      <span className="text-white">已出貨</span>
                    ) : (
                      <span className="text-red-500">尚未出貨</span>
                    )}
                  </button>
                </summary>

                <div className="grid gap-4 p-4 md:grid-cols-1 xl:grid-cols-3">
                  <div className="border-black/20 md:border-b-2 md:pb-4 xl:border-r-2 xl:border-b-0 xl:pr-4">
                    <p>Date: {o.date}</p>
                    <p>Delivery Method: {o.deliveryMethod}</p>
                    <p>Pay Method: {o.pay}</p>
                    <p>Total Amount: {o.totalAmount} $</p>
                    <p>Total Quatity: {o.totalQuatity}</p>
                  </div>

                  <div className="border-black/20 pr-4 md:border-b-2 xl:border-r-2 xl:border-b-0">
                    <p>Name: {o.user.name}</p>
                    <p>Phone: {o.user.phone}</p>
                    <p>Email: {o.user.email}</p>
                    <p>Address: {o.user.address}</p>
                    <p>Role: {o.user.role}</p>
                  </div>

                  <div>
                    <p>Item:</p>
                    {o.items &&
                      o.items.map((i, index) => {
                        return (
                          <p key={index}>
                            {i.name} {i.quantity} * {i.price} $
                          </p>
                        );
                      })}
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      )}{" "}
    </section>
  );
};

export default OrderList;
