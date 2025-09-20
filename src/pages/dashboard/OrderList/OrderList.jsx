import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reloadOrderFromStorage,
  sendOrder,
  arrivalOrder,
} from "../../../features/order/orderSlice";

import OrderListItem from "./OrderListItem";
import Button from "../../../components/Button/Button";
import { Fade } from "react-awesome-reveal";

const OrderList = () => {
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  // 搜尋關鍵字
  const [keyword, setKeyWord] = useState("");

  const filtered = order.filter((o) => {
    const orderID = o.orderID.toLowerCase();
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
      <div className="mx-auto my-4 flex w-full items-center justify-center overflow-hidden rounded-full border">
        <input
          type="text"
          placeholder="搜尋訂單..."
          className="search-input h-full w-full rounded-full border-0 py-2 indent-[1rem]"
          value={keyword}
          onChange={(e) => setKeyWord(e.target.value)}
        />
      </div>
      {order.length === 0 ? (
        <div className="flex h-full min-h-[200px] w-full justify-center bg-zinc-800 pt-20 text-center text-[1.5rem] font-bold">
          <p>目前總訂單為{order.length} ,無任何訂單....</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex h-full min-h-[200px] w-full justify-center bg-zinc-800 pt-20 text-center text-[1.5rem] font-bold">
          <p>無任何與查詢相符訂單....</p>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-4 bg-zinc-800">
          {curretData.map((o, index) => {
            return (
              <details
                key={index}
                className="flex w-full cursor-pointer flex-col gap-2 rounded-md border bg-zinc-500/50 p-4 hover:bg-zinc-600/50"
              >
                <summary className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                  <span>{o.createDate}</span>
                  <p>訂單： {o.orderID}</p>
                  <span className="w-full lg:w-auto">
                    {o?.isSend ? (
                      <div className="flex gap-4">
                        <Button label="已出貨" variant="success" />
                        {o.isSend && o.isArrival ? (
                          <Button label="已通知" variant="success" />
                        ) : (
                          <Button
                            label="已送達"
                            variant="danger"
                            onClick={() => {
                              if (confirm("確定是否通知顧客商品已送達?")) {
                                dispatch(arrivalOrder(o));
                              }
                            }}
                          />
                        )}
                      </div>
                    ) : (
                      <Button
                        label="尚未出貨"
                        variant="danger"
                        onClick={() => {
                          if (confirm("是否確定出貨 ?")) {
                            dispatch(sendOrder(o));
                          }
                        }}
                      />
                    )}
                  </span>
                </summary>
                <Fade>
                  <OrderListItem order={o} />
                </Fade>
              </details>
            );
          })}
        </div>
      )}{" "}
    </section>
  );
};

export default OrderList;
