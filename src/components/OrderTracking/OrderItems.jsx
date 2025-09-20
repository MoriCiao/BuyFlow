import React from "react";

const OrderItems = ({ items, totalQuatity }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-none items-center justify-between">
        <p>📦 訂單內容</p>
        <span className="rounded-md bg-green-600 p-1 px-2">
          {totalQuatity}件
        </span>
      </div>
      <div className="flex w-full flex-col gap-2 overflow-y-auto rounded-md bg-zinc-600 p-2 lg:max-h-30">
        {items &&
          items.map((i, index) => {
            return (
              <div
                key={index}
                className="flex w-full items-start justify-between border-b border-white/50 px-4 shadow-xl transition duration-300 hover:border-white hover:bg-zinc-500"
              >
                <img src={i.image} alt="items-image" className="w-5" />
                <p>{i.name}</p>
                <p>* {i.quantity} 個</p>
                <p>{i.quantity * i.price} $</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderItems;
