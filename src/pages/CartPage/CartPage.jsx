import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkOrder } from "../../features/user/userSlice";
import { nanoid } from "nanoid";
import ShoppingCart from "./ShoppingCart";
import CheckoutInformation from "./CheckoutInformation";
import NoItems from "./Noitmes";
import CartFooter from "./CartFooter";

const STYLE = {
  section: `cart-page h-full w-full border-white/50 text-center text-white md:px-0`,

  cart_container: `cart-container flex h-full flex-col gap-8 xl:flex-row xl:gap-0`,

  cart_content_header: `cart-content-header flex h-full flex-col items-center justify-between gap-4 lg:flex-2`,

  cart_content: `cart-content flex h-full w-full flex-col items-center justify-start overflow-y-auto`,
};

const CartPage = () => {
  const { items, totalAmount, totalQuatity } = useSelector(
    (state) => state.cart,
  );
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deliveryPayment, setDeliveryPayment] = useState({
    delivery: "",
    payment: "",
  });
  const handleToCheckout = () => {
    if (items.length === 0) {
      alert("請選擇商品加入購物車內，再前往付款頁面...");
    } else if (
      deliveryPayment.delivery === "" ||
      deliveryPayment.payment === ""
    ) {
      alert("請您選擇配送方式 或 付款方式");
    } else {
      //
      const newOrder = {
        createDate: new Date().toLocaleString(),
        isSend: false,
        isArrival: false,
        user: user,
        orderID: nanoid(),
        items: items,
        totalAmount: totalAmount,
        totalQuatity: totalQuatity,
        deliveryPayment: deliveryPayment,
      };
      dispatch(checkOrder(newOrder));
      navigate("/checkout");
    }
  };

  // 每次購物車變動時，將帳戶選取的商品儲存到localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem(`Cart_${user.email}`, JSON.stringify(items));
    }
    // 依賴對應 user 和 user的購物車
  }, [items, user]);

  return (
    <section className={STYLE.section}>
      <div className={STYLE.cart_container}>
        <div className={STYLE.cart_content_header}>
          <div className="w-full">
            <h3 className="w-full text-start text-[2rem]">
              🛒 Your Shopping Cart
            </h3>
          </div>
          <div className={STYLE.cart_content}>
            {items.length === 0 ? (
              <NoItems />
            ) : (
              items.map((i, index) => {
                return <ShoppingCart i={i} key={index} />;
              })
            )}
          </div>
          <CartFooter totalAmount={totalAmount} totalQuatity={totalQuatity} />
        </div>

        <CheckoutInformation
          deliveryPayment={deliveryPayment}
          setDeliveryPayment={setDeliveryPayment}
          totalAmount={totalAmount}
          handleToCheckout={handleToCheckout}
        />
      </div>
    </section>
  );
};

export default CartPage;
