import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import TrackingContent from "./TrackingContent";
import ReceivingInformation from "./ReceivingInformation";
import DeliveryInformation from "./DeliveryInformation";
import OrderItems from "./OrderItems";
import TrackingOperate from "./TrackingOperate";
import TrackingStatus from "./TrackingStatus";

const TrackingCard = ({ order, handleCancel }) => {
  const [trackingStatus, setTrackingStatus] = useState(false);
  const {
    orderID,
    items,
    user,
    totalAmount,
    totalQuatity,
    deliveryPayment,
    createDate,
    isSend,
    isArrival,
  } = order;

  return (
    <div className="tracking-card relative flex flex-col rounded-md border border-white/50 bg-zinc-800 text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:bg-zinc-900">
      <div className="flex flex-col items-center justify-between gap-4 p-4 sm:flex-row">
        <p className="w-full text-[1.25rem] lg:w-auto">📋 {orderID}</p>

        <div
          className="w-full min-w-30 sm:w-auto"
          onClick={() => setTrackingStatus((prev) => !prev)}
        >
          {isSend ? (
            <Button label={"已出貨"} variant="success" />
          ) : (
            <Button label={"未出貨"} variant="danger" />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
        <TrackingContent>
          <OrderItems items={items} totalQuatity={totalQuatity} />
        </TrackingContent>
        <TrackingContent>
          <ReceivingInformation user={user} />
        </TrackingContent>
        <TrackingContent>
          <DeliveryInformation
            totalAmount={totalAmount}
            deliveryPayment={deliveryPayment}
          />
        </TrackingContent>
        <TrackingContent>
          <TrackingOperate
            createDate={createDate}
            handleCancel={() => handleCancel(order)}
          />
        </TrackingContent>
      </div>
      {trackingStatus && (
        <TrackingStatus isSend={isSend} isArrival={isArrival} />
      )}
    </div>
  );
};

export default TrackingCard;
