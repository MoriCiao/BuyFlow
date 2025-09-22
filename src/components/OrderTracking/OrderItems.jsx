import React from "react";

const STYLE = {
  order_items_title: `flex flex-none items-center justify-between`,

  order_items_content: `order-items-contents flex w-full flex-col gap-2 overflow-y-auto rounded-md bg-zinc-600 p-2 lg:max-h-30  border border-white/20 `,

  order_item_card: `order-items-card flex w-full items-start justify-between shadow-sm rounded-md transition duration-300 hover:bg-zinc-700 p-2`,
};

const OrderItems = ({ items, totalQuatity }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className={STYLE.order_items_title}>
        <p>📦 訂單內容</p>
        <span className="rounded-md bg-green-600 p-1 px-2">
          {totalQuatity}件
        </span>
      </div>
      <div className={STYLE.order_items_content}>
        {items &&
          items.map((i, index) => {
            return (
              <div key={index} className={STYLE.order_item_card}>
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
