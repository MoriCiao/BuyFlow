import Button from "../../components/Button/Button";
import DeliveryCard from "./DeliveryCard";

const SelectDelivery = ({ deliveryPayment, setDeliveryPayment }) => {
  const activeDelivery = deliveryPayment.delivery;
  return (
    <div className="flex w-full flex-col items-center justify-start gap-2">
      <div className="flex w-full px-4">
        <h3 className="text-[1rem] font-bold">
          <span>🚚</span> 配送方式
        </h3>
      </div>
      <div className="flex w-full gap-2 px-4 md:gap-8 lg:justify-between">
        <DeliveryCard
          emoji={"⚡"}
          delivery={"超商配送"}
          day="1-2"
          onClick={() =>
            setDeliveryPayment((prev) => ({ ...prev, delivery: "超商配送" }))
          }
          activeDelivery={activeDelivery}
        />
        <DeliveryCard
          emoji={"🏠"}
          delivery={"廠商宅配"}
          day="2-3"
          onClick={() =>
            setDeliveryPayment((prev) => ({ ...prev, delivery: "廠商宅配" }))
          }
          activeDelivery={activeDelivery}
        />
      </div>
      {/* $
      {activeDelivery === null
        ? "bg-zinc-600"
        : "border bg-zinc-600/50 text-green-600"} */}
      <div className={`w-full px-4`}>
        <Button
          label={`✓您選擇配送方式為： 
          ${
            deliveryPayment.delivery === "廠商宅配"
              ? `${deliveryPayment.delivery} (免運費)`
              : `${deliveryPayment.delivery} (運費60$)` || "尚未選擇"
          }`}
          variant="success_ghost"
          disabled={true}
        />
      </div>
    </div>
  );
};

export default SelectDelivery;
