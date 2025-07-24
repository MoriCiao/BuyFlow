import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reloadOrderFromStorage } from "../../features/order/orderSlice";
const OrderList = () => {
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  // 搜尋關鍵字
  const [keyword, setKeyWord] = useState("");
  console.log(order);
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
    <section className="order-list w-full flex justify-start items-start">
      {order.length === 0 ? (
        <div>目前無任何訂單....</div>
      ) : (
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-center items-center rounded-full border overflow-hidden m-auto min-w-150">
            <input
              type="text"
              placeholder="搜尋訂單..."
              className="search-input w-full rounded-l-full h-[2rem] indent-[1rem] border-0"
              value={keyword}
              onChange={(e) => setKeyWord(e.target.value)}
            />
          </div>
          {curretData.map((o, index) => {
            return (
              <details
                key={index}
                className=" relative border border-black/50 px-4 py-2 w-full"
              >
                <summary className="md:text-[1.5rem] sm:text-[1.1rem]">
                  訂單編號：{o.id}
                  <button
                    className="absolute right-4 md:top-4 sm:top-2 border px-4 rounded-full !text-[1rem] font-bold"
                    onClick={() => dispatch()}
                  >
                    尚未出貨
                  </button>
                </summary>

                <div className="p-4 grid xl:grid-cols-3 md:grid-cols-1 gap-4">
                  <div className="xl:border-r-2 md:border-b-2 border-black/20 xl:pr-4 md:pb-4">
                    <p>Date: {o.date}</p>
                    <p>Delivery Method: {o.deliveryMethod}</p>
                    <p>Pay Method: {o.pay}</p>
                    <p>Total Amount: {o.totalAmount} $</p>
                    <p>Total Quatity: {o.totalQuatity}</p>
                  </div>

                  <div className="xl:border-r-2 md:border-b-2 border-black/20 pr-4">
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
