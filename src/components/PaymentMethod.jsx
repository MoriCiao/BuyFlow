const STYLE = {
  pament: `payment-icon flex aspect-square w-full flex-col items-center justify-center rounded transition duration-300 `,
};

const PaymentMethod = ({ emoji, label, onClick, activePayment }) => {
  return (
    <div
      className={`${STYLE.pament} ${activePayment === label ? "bg-green-600" : "bg-zinc-600"}`}
      onClick={onClick}
    >
      <span>{emoji}</span>
      <p>{label}</p>
    </div>
  );
};

export default PaymentMethod;
