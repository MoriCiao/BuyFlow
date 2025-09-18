const DeliveryCard = ({ emoji, delivery, day, onClick, activeDelivery }) => {
  return (
    <div
      className={`w-1/2 cursor-pointer rounded p-2 transition duration-300 select-none md:p-8 ${activeDelivery === delivery ? "bg-green-600" : "bg-zinc-600"}`}
      onClick={onClick}
    >
      <span className="lg:text-[1.5rem]">{emoji}</span>
      <p className="lg:text-[1.5rem]">{delivery}</p>
      <p>{day}個工作天</p>
    </div>
  );
};

export default DeliveryCard;
