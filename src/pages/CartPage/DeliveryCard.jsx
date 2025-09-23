const STYLE = {
  delivery_card: `delivery-card flex aspect-square w-1/2 cursor-pointer flex-col items-center justify-center gap-2 rounded p-2 transition duration-300 select-none hover:scale-105 md:p-4`,
};

const DeliveryCard = ({ emoji, delivery, day, onClick, activeDelivery }) => {
  return (
    <div
      className={`${STYLE.delivery_card} ${activeDelivery === delivery ? "bg-green-600" : "bg-zinc-600"}`}
      onClick={onClick}
    >
      <span className="text-sm sm:text-[2rem] xl:text-[1.5rem]">{emoji}</span>
      <p className="text-sm sm:text-[2rem] xl:text-[1.5rem]">{delivery}</p>
      <p>{day}個工作天</p>
    </div>
  );
};

export default DeliveryCard;
