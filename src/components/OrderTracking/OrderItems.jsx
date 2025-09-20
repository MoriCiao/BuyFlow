import React from "react";

const OrderItems = ({ items, totalQuatity }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p>📦 訂單內容</p>
        <span className="rounded-md bg-zinc-600 p-1">{totalQuatity}件</span>
      </div>
      <div className="m-auto flex max-h-[15vh] w-full gap-4 overflow-y-auto">
        {items &&
          items.map((i, index) => {
            return (
              <div
                key={index}
                className="flex w-full items-start justify-between rounded-xl border border-white/20 p-2 transition duration-300 hover:border-white hover:bg-zinc-500"
              >
                <div className="flex items-center">
                  <div className="rounded-xl bg-zinc-600 p-2">
                    <img src={i.image} alt="items-image" className="w-5" />
                  </div>
                  <div>
                    <div className="col-span-2 flex flex-col justify-between px-4">
                      <p>
                        {i.name} <br /> {i.quantity} 個
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex h-full items-center">
                  <p className="text-start">
                    <strong>{i.quantity * i.price} $</strong>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderItems;
