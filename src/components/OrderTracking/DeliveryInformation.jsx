import Button from "../Button/Button";
const STYLE = {
  deliveryInfo: `delivery-information flex flex-col gap-4`,
  delivery_content: `delivery-content flex justify-between border-b border-white/50`,
};

const DeliveryInformation = ({ totalAmount, deliveryPayment }) => {
  const DeliveryContent = ({ title, text }) => (
    <div className={STYLE.delivery_content}>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );

  return (
    <div className={STYLE.deliveryInfo}>
      <p>🚚 配送資訊</p>
      <div className="flex flex-col gap-2">
        <div className="flex h-1/2 flex-col gap-2">
          <DeliveryContent title={`配送方式`} text={deliveryPayment.delivery} />
          <DeliveryContent title={`付款方式`} text={deliveryPayment.payment} />
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
