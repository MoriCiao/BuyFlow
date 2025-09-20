import Button from "../Button/Button";

const DeliveryInformation = ({ totalAmount, deliveryPayment }) => {
  return (
    <div className="delivery-information flex flex-col gap-4">
      <p>🚚 配送資訊</p>
      <div className="flex flex-col gap-2">
        <div className="flex h-1/2 flex-col gap-2">
          <div className="flex justify-between border-b border-white/50">
            <p>配送方式</p>
            <p>{deliveryPayment.delivery}</p>
          </div>
          <div className="flex justify-between border-b border-white/50">
            <p>付款方式</p>
            <p>{deliveryPayment.payment}</p>
          </div>
        </div>
        <div>
          <Button
            variant="success_ghost"
            size="lg"
            label={`總消費金額 ${
              deliveryPayment.delivery === "超商配送"
                ? `${totalAmount + 60} $`
                : `${totalAmount} $`
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInformation;
