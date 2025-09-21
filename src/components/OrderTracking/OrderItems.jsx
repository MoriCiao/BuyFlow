import React from "react";

const OrderItems = ({ items, totalQuatity }) => {
  const STYLE = {
    title: `flex flex-none items-center justify-between`,

    itemsContent: `order-items-contents flex w-full flex-col gap-2 overflow-y-auto rounded-md bg-zinc-600 p-2 lg:max-h-30`,

    itemCard: `flex w-full items-start justify-between border-b border-white/50 shadow-xl transition duration-300 hover:border-white hover:bg-zinc-500`,
  };

  return (
    <div className="flex flex-col gap-2">
      <div className={STYLE.title}>
        <p>📦 訂單內容</p>
        <span className="rounded-md bg-green-600 p-1 px-2">
          {totalQuatity}件
        </span>
      </div>
      <div className={STYLE.itemsContent}>
        {items &&
          items.map((i, index) => {
            return (
              <div key={index} className={STYLE.itemCard}>
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
