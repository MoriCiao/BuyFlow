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
    console.log(order);
  }, [order]);

  return (
    <section className="order-list w-full flex flex-col gap-4 justify-start items-start">
      <div className="flex justify-center items-center rounded-full border overflow-hidden h-[2rem] mx-auto my-4 min-w-150">
        <input
          type="text"
          placeholder="搜尋訂單..."
          className="search-input w-full h-[2rem] rounded-full indent-[1rem] border-0"
          value={keyword}
          onChange={(e) => setKeyWord(e.target.value)}
        />
      </div>
      {order.length === 0 ? (
        <div className="text-center text-[1.5rem] font-bold w-full h-full flex justify-center pt-20 min-h-[200px] bg-[#e8eddf]">
          <p>目前總訂單為{order.length} ,無任何訂單....</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center text-[1.5rem] font-bold w-full h-full flex justify-center pt-20 min-h-[200px] bg-[#e8eddf]">
          <p>無任何與查詢相符訂單....</p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4 bg-[#e8eddf]">
          {curretData.map((o, index) => {
            return (
              <details
                key={index}
                className=" relative border border-black/50 px-4 py-2 w-full"
              >
                <summary className="md:text-[1.5rem] sm:text-[1.1rem]">
                  訂單編號：{o.id}{" "}
                  {o?.isSend ? null : <span className="">‼️</span>}
                  <button
                    type="button"
                    className={`absolute w-25 right-4 md:top-4 sm:top-2 border px-4 rounded-full !text-[1rem] font-bold cursor-pointer ${
                      o?.isSend
                        ? "bg-red-500 border-2 border-white"
                        : "bg-white border-2 border-red-500"
                    }`}
                    onClick={() => {
                      if (confirm("請確認商品是否已出貨?")) {
                        dispatch(sendOrder(o));
                      }
                    }}
                  >
                    {o?.isSend ? (
                      <span className="text-white">出貨</span>
                    ) : (
                      <span className="text-red-500">尚未出貨</span>
                    )}
                  </button>
                </summary>

                <div className="p-4 grid xl:grid-cols-3 md:grid-cols-1 gap-4">
                  <div className="xl:border-r-2 xl:border-b-0 md:border-b-2 border-black/20 xl:pr-4 md:pb-4">
                    <p>Date: {o.date}</p>
                    <p>Delivery Method: {o.deliveryMethod}</p>
                    <p>Pay Method: {o.pay}</p>
                    <p>Total Amount: {o.totalAmount} $</p>
                    <p>Total Quatity: {o.totalQuatity}</p>
                  </div>

                  <div className="xl:border-r-2 xl:border-b-0 md:border-b-2 border-black/20 pr-4">
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
