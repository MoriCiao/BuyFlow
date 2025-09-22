const STYLE = {
  item_container: `item-container flex max-h-[400px] min-h-80 flex-col gap-2 overflow-y-auto`,

  item_card: `flex w-full items-start justify-between shadow-sm rounded-md border border-white/20 gap-4 transition duration-300 hover:bg-zinc-700 p-2`,
};

const CartIconContent = ({ items }) => {
  return (
    <div className={STYLE.item_container}>
      {items &&
        items.map((i, index) => {
          return (
            <div key={index} className={STYLE.item_card}>
              <img src={i.image} alt="items-image" className="w-5" />
              <p>{i.name}</p>
              <p>* {i.quantity} 個</p>
              <p>{i.quantity * i.price} $</p>
            </div>
          );
        })}
    </div>
  );
};

export default CartIconContent;
