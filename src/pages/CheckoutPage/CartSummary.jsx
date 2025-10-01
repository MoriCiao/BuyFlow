import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
const STYLE = {
  cart_summary_container: `cart-summary-container grid flex grid-cols-1 gap-4 overflow-y-auto rounded-xl border border-white/50 bg-zinc-600 p-4 shadow-xl md:max-h-[40vh] xl:grid-cols-2`,

  cart_summary_card: `cart-summary-card flex w-full items-center justify-between gap-2 rounded-xl border border-white/50 bg-zinc-800 p-2 shadow-xl transition duration-300 hover:border-white hover:bg-zinc-900`,
};
const CartSummaryContainer = ({ items }) => (
  <div className={STYLE.cart_summary_container}>
    {items &&
      items.map((i, index) => {
        return (
          <div key={index} className={STYLE.cart_summary_card}>
            <div className="rounded-xl bg-zinc-700 p-2 lg:p-4">
              <img src={i.image} alt="items-image" className="w-10" />
            </div>

            <p>
              {i.name}* {i.quantity}
            </p>

            <p className="text-start">
              <strong>{i.quantity * i.price} $</strong>
            </p>
          </div>
        );
      })}
  </div>
);

const CartSummary = ({ items, totalQuatity }) => {
  return (
    <section className="cart-summary flex flex-1 flex-col space-y-4">
      <div className="flex items-center justify-between">
        <p className="col-span-2 text-[1.15rem]">
          <strong>📦 您的商品</strong>
        </p>
        <div>
          <Button label={`${totalQuatity} 件商品`} variant="success" />
        </div>
      </div>
      <CartSummaryContainer items={items} />
    </section>
  );
};

export default CartSummary;
