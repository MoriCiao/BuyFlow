import React from "react";
import { useDispatch, useSelector } from "react-redux";

const OrderList = () => {
  const { orders } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(orders);
  return (
    <section className="order-list w-full">
      {orders.length === 0 ? (
        <div>目前無任何訂單....</div>
      ) : (
        <div className="w-full flex flex-col gap-4">
          {orders.map((o) => {
            return (
              <details
                key={o.orderNo}
                className=" relative border border-black/50 px-4 py-2"
              >
                <summary className="text-[1.5rem]">
                  訂單 {o.orderNo} {o.user.name} {o.user.phone}
                  <button
                    className="absolute right-4 top-4 border px-4 rounded-full !text-[1rem] font-bold"
                    onClick={() => dispatch()}
                  >
                    尚未出貨
                  </button>
                </summary>

                <div className="p-4 flex gap-4">
                  <div className="border-r-2 border-black/50 pr-4">
                    <p>Date: {o.date}</p>
                    <p>Delivery Method: {o.deliveryMethod}</p>
                    <p>Pay Method: {o.pay}</p>
                    <p>Total Amount: {o.totalAmount} $</p>
                    <p>Total Quatity: {o.totalQuatity}</p>
                  </div>

                  <div className="border-r-2 border-black/50 pr-4">
                    <p>Name: {o.user.name}</p>
                    <p>Phone: {o.user.phone}</p>
                    <p>Email: {o.user.email}</p>
                    <p>Address: {o.user.address}</p>
                    <p>Role: {o.user.role}</p>
                  </div>
                  <p>Item:</p>
                  <div>
                    {o.items &&
                      o.items.map((i, index) => {
                        return (
                          <p>
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
