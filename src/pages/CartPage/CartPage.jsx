import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  modifyAmount,
  removeItem,
  cleanCart,
} from "../../features/cart/cartSlice";
import { useEffect } from "react";
import Button from "../../components/Button/Button";
import ShoppingCart from "./ShoppingCart";
import CratTotal from "./CratTotal";
const CartPage = () => {
  const { items, totalAmount, totalQuatity } = useSelector(
    (state) => state.cart,
  );

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleToCheckout = () => {
    if (items.length === 0) {
      alert("請選擇商品加入購物車內，再前往付款頁面...");
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
    <section className="cart-page m-auto w-full border px-8 text-center text-white md:px-0">
      {!items.length === 0 ? (
        <div className="justify-cneter flex w-full flex-col items-center p-8 text-center">
          <h1 className="flex h-[200px] items-center text-[1.25rem] font-bold sm:!text-[2rem]">
            There are currently no items <br className="hidden sm:block" />
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
        <div className="cart flex h-full flex-row border">
          <div className="flex h-full flex-2 flex-col items-center justify-center gap-4 p-8">
            <div className="flex h-full max-h-[60vh] w-full flex-col items-center justify-start gap-4 overflow-y-auto">
              {items.map((i, index) => {
                return <ShoppingCart i={i} key={index} />;
              })}
            </div>
            <div className="flex w-[80%] justify-between">
              <div>
                <Button
                  label="◀ Shopping"
                  onClick={() => {
                    navigate("/products");
                  }}
                />
              </div>

              <CratTotal
                totalQuatity={totalQuatity}
                totalAmount={totalAmount}
              />
              <div>
                <Button
                  label="CleanCart"
                  variant="danger"
                  onClick={() => {
                    dispatch(cleanCart());
                  }}
                />
              </div>
            </div>
          </div>
          <div className="checkout flex flex-1 flex-col justify-between border py-4 sm:px-4">
            <div className="flex w-[100%] flex-row items-center justify-between py-4"></div>
            <Button
              label="CheckOut"
              variant="success"
              onClick={handleToCheckout}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
