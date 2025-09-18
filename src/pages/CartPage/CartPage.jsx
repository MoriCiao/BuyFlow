import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  modifyAmount,
  removeItem,
  cleanCart,
} from "../../features/cart/cartSlice";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import ShoppingCart from "./ShoppingCart";
import SelectPay from "./SelectPay";
import SelectDelivery from "./SelectDelivery";

const CartPage = () => {
  const { items, totalAmount, totalQuatity } = useSelector(
    (state) => state.cart,
  );
  const { user } = useSelector((state) => state.user);
  const [deliveryPayment, setDeliveryPayment] = useState({
    delivery: "",
    payment: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleToCheckout = () => {
    if (items.length === 0) {
      alert("請選擇商品加入購物車內，再前往付款頁面...");
    } else if (
      deliveryPayment.delivery === "" ||
      deliveryPayment.payment === ""
    ) {
      alert("請您選擇配送方式 或 付款方式");
    } else {
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
    <section className="cart-page h-full w-full border-white/50 text-center text-white md:px-0 xl:border">
      <div className="cart flex h-full flex-col gap-8 xl:flex-row xl:gap-0">
        <div className="flex h-full flex-col items-center justify-between gap-4 lg:flex-2 lg:p-8">
          <div className="flex h-full w-full flex-col items-center justify-start gap-4 overflow-y-auto">
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

          <div className="flex w-full flex-col justify-between gap-4 px-4 md:flex-row lg:px-0 xl:h-[5%] xl:w-full">
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

        <div className="checkout flex h-full flex-col justify-between gap-2 bg-zinc-800 lg:flex-1">
          <div className="justtify-center flex w-full flex-col items-center bg-zinc-600 py-2">
            <h3 className="m-auto text-center text-[2rem]">結帳資訊</h3>
            <p>請選擇您的結帳方式</p>
          </div>

          <SelectDelivery
            deliveryPayment={deliveryPayment}
            setDeliveryPayment={setDeliveryPayment}
          />

          <SelectPay
            deliveryPayment={deliveryPayment}
            setDeliveryPayment={setDeliveryPayment}
          />

          <Button
            label={`CheckOut 金額  
                ${totalAmount + (deliveryPayment.delivery === "超商配送" ? 60 : 0)} $ 
                ${deliveryPayment.delivery === "超商配送" ? "(+60 $)" : ""}`}
            variant="success"
            size="lg"
            onClick={handleToCheckout}
          />
        </div>
      </div>
      {/* )} */}
    </section>
  );
};

export default CartPage;
