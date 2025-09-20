import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanCart } from "../../features/cart/cartSlice";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import ShoppingCart from "./ShoppingCart";
import { checkOrder } from "../../features/user/userSlice";
import { nanoid } from "nanoid";
import CheckoutInformation from "./CheckoutInformation";

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
    <section className="cart-page h-full w-full border-white/50 text-center text-white md:px-0">
      <div className="cart flex h-full flex-col gap-8 xl:flex-row xl:gap-0">
        <div className="flex h-full flex-col items-center justify-between gap-4 lg:flex-2">
          <div className="w-full">
            <h3 className="w-full text-start text-[2rem]">
              🛒 Your Shopping Cart
            </h3>
          </div>

          <div className="flex h-full w-full flex-col items-center justify-start gap-4 overflow-y-auto lg:max-h-[80vh]">
            {items.length === 0 ? (
              <div className="justify-cneter flex w-full flex-col items-center p-8 text-center">
                <h1 className="flex h-[200px] items-center text-[1.25rem] font-bold sm:!text-[2rem]">
                  There are currently no items{" "}
                  <br className="hidden sm:block" />
                  in your shopping cart...
                </h1>
                <div>
                  <Button
                    label="Go Shopping"
                    size="lg"
                    onClick={() => {
                      navigate("/products");
                    }}
                  />
                </div>
              </div>
            ) : (
              items.map((i, index) => {
                return <ShoppingCart i={i} key={index} />;
              })
            )}
          </div>

          <div className="flex w-full flex-col justify-between gap-4 px-4 md:flex-row xl:h-[5%] xl:w-full">
            <Button
              label="◀ Shopping"
              onClick={() => {
                navigate("/products");
              }}
            />

            <Button
              label="CleanCart"
              variant="danger"
              onClick={() => {
                if (confirm("確定要刪除購物車內所有商品?")) {
                  dispatch(cleanCart());
                }
              }}
            />

            <Button
              label={`${totalQuatity ?? 0} 件`}
              variant="success_ghost"
              disabled={true}
            />
            <Button
              label={` ${totalAmount ?? 0} $`}
              variant="success_ghost"
              disabled={true}
            />
          </div>
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
