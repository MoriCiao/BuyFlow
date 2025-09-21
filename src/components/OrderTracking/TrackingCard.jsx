import { useState } from "react";
import Button from "../Button/Button";
import TrackingContainer from "./TrackingContainer";
import ReceivingInformation from "./ReceivingInformation";
import DeliveryInformation from "./DeliveryInformation";
import OrderItems from "./OrderItems";
import TrackingOperate from "./TrackingOperate";
import TrackingStatus from "./TrackingStatus";

const STYLE = {
  card: `tracking-card relative flex flex-col rounded-md border border-white/50 bg-zinc-800 text-white shadow-xl transition duration-300 hover:-translate-y-2`,

  header: `flex flex-col items-center justify-between gap-4 p-4 sm:flex-row`,

  buttonContainer: `w-full min-w-30 sm:w-auto`,

  contents: `grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4`,
};

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

  const ShippingButton = () => (
    <div
      className={STYLE.buttonContainer}
      onClick={() => setTrackingStatus((prev) => !prev)}
    >
      {isSend ? (
        <Button label={"已出貨"} variant="success" />
      ) : (
        <Button label={"未出貨"} variant="danger" />
      )}
    </div>
  );

  const TrackingContents = () => (
    <div className={STYLE.contents}>
      <TrackingContainer>
        <OrderItems items={items} totalQuatity={totalQuatity} />
      </TrackingContainer>
      <TrackingContainer>
        <ReceivingInformation user={user} />
      </TrackingContainer>
      <TrackingContainer>
        <DeliveryInformation
          totalAmount={totalAmount}
          deliveryPayment={deliveryPayment}
        />
      </TrackingContainer>
      <TrackingContainer>
        <TrackingOperate
          createDate={createDate}
          handleCancel={() => handleCancel(order)}
        />
      </TrackingContainer>
    </div>
  );

  return (
    <article className={STYLE.card}>
      {/* 標題區域 */}
      <div className={STYLE.header}>
        <p className="w-full text-[1.25rem] lg:w-auto">📋 {orderID}</p>

        <ShippingButton />
      </div>
      {/* 內容區域 */}
      <TrackingContents />
      {/* 追蹤狀態 */}
      {trackingStatus && (
        <TrackingStatus
          isSend={isSend}
          isArrival={isArrival}
          setTrackingStatus={setTrackingStatus}
        />
      )}
    </article>
  );
};

export default TrackingCard;
