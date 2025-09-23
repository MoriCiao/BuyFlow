import { Fade } from "react-awesome-reveal";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reloadOrderFromStorage,
  sendOrder,
  arrivalOrder,
} from "../../../features/order/orderSlice";
import OrderListItem from "./OrderListItem";
import Button from "../../../components/Button/Button";

const STYLE = {
  order_list_container: `order-list-container flex w-full flex-col items-start justify-start gap-4`,

  order_list_search: `order-list-search mx-auto my-4 flex w-full items-center justify-center overflow-hidden rounded-full border`,

  order_list_search_input: `order-list-search-input h-full w-full rounded-full border-0 py-2 indent-[1rem]`,

  order_list_noOrder: `order-list-noOrder flex h-full min-h-[200px] w-full justify-center bg-zinc-800 pt-20 text-center text-[1.5rem] font-bold`,

  order_list_noResult: `order-list-noResult flex h-full min-h-[200px] w-full justify-center bg-zinc-800 pt-20 text-center text-[1.5rem] font-bold`,

  order_list_details: `order-list-details flex w-full cursor-pointer flex-col gap-2 rounded-md border bg-zinc-500/50 p-4 hover:bg-zinc-600/50`,

  order_list_summary: `order-list-summary flex flex-col items-center justify-between gap-4 lg:flex-row`,
};

const storeKey = "dashboard-store";

const OrderStatusButtons = ({ order, onSend, onArrival }) => {
  if (order.isSend) {
    return (
      <div className="flex gap-4">
        <Button label="已出貨" variant="success" />
        {order.isArrival ? (
          <Button label="已通知" variant="success" />
        ) : (
          <Button
            label="已送達"
            variant="danger"
            onClick={() => {
              onArrival(order);
            }}
          />
        )}
      </div>
    );
  }
  return (
    <Button
      label="尚未出貨"
      variant="danger"
      onClick={() => {
        onSend(order);
      }}
    />
  );
};

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

  const NoOrder = () => (
    <div className={STYLE.order_list_noOrder}>
      <p>目前總訂單為{order.length} ,無任何訂單....</p>
    </div>
  );
  const NoResult = () => (
    <div className={STYLE.order_list_noResult}>
      <p>無任何與查詢相符訂單....</p>
    </div>
  );
  const handleKeywordChange = useCallback((e) => {
    setKeyWord(e.target.value);
  }, []);

  const handleSendOrder = useCallback((order) => {
    if (confirm("是否確定出貨 ?")) {
      dispatch(sendOrder(order));
    }
  }, []);

  const handleArrivalOrder = useCallback((order) => {
    if (confirm("確定是否通知顧客商品已送達?")) {
      dispatch(arrivalOrder(order));
    }
  }, []);

  const RenderOrderStatus = () => {
    if (order.length === 0) return <NoOrder />;
    if (filtered.length === 0) return <NoResult />;
    return (
      <div className="flex w-full flex-col gap-4 bg-zinc-800">
        {curretData.map((o, index) => {
          return (
            <details key={index} className={STYLE.order_list_details}>
              <summary className={STYLE.order_list_summary}>
                <span>{o.createDate}</span>
                <p>訂單： {o.orderID}</p>
                <span className="w-full lg:w-auto">
                  <OrderStatusButtons
                    order={o}
                    onSend={handleSendOrder}
                    onArrival={handleArrivalOrder}
                  />
                </span>
              </summary>
              <Fade>
                <OrderListItem order={o} />
              </Fade>
            </details>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    // 載入Storage資料
    dispatch(reloadOrderFromStorage(storeKey));
  }, []);

  // order變動時，儲存至Storage
  useEffect(() => {
    localStorage.setItem(storeKey, JSON.stringify(order));
  }, [order]);

  return (
    <section className={STYLE.order_list_container}>
      <div className={STYLE.order_list_search}>
        <input
          type="text"
          placeholder="搜尋訂單..."
          className="search-input h-full w-full rounded-full border-0 py-2 indent-[1rem]"
          value={keyword}
          onChange={handleKeywordChange}
        />
      </div>
      <RenderOrderStatus />
    </section>
  );
};

export default OrderList;
