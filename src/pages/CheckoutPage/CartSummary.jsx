import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
const CartSummary = () => {
  const { tempOrder } = useSelector((state) => state.user);
  const { items, totalQuatity } = tempOrder;
  return (
    <section className="cart-summary flex-1 space-y-4">
      <div className="flex justify-between">
        <p className="col-span-2 text-[1.15rem]">
          <strong>📦 您的商品</strong>
        </p>
        <div>
          <Button label={`${totalQuatity} 件商品`} variant="success" />
        </div>
      </div>
      <div className="m-auto flex grid w-full grid-cols-1 gap-4 overflow-y-auto xl:grid-cols-2">
        {items &&
          items.map((i, index) => {
            return (
              <div
                key={index}
                className="flex w-full items-start justify-between rounded-xl border border-white/20 p-4 transition duration-300 hover:border-white hover:bg-zinc-500"
              >
                <div className="flex items-center">
                  <div className="rounded-xl bg-zinc-600 p-4">
                    <img src={i.image} alt="items-image" className="w-10" />
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
    </section>
  );
};

export default CartSummary;
