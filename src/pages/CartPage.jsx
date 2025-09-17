import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  modifyAmount,
  removeItem,
  cleanCart,
} from "../features/cart/cartSlice";
import { useEffect } from "react";
import { div } from "framer-motion/client";
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
    <section className="cart-page m-auto min-h-[60vh] w-full text-center md:w-[80%]">
      {items.length === 0 ? (
        <div className="justify-cneter flex w-full flex-col items-center p-8 text-center text-[#333533]">
          <h1 className="flex h-[200px] items-center text-[1.25rem] font-bold sm:!text-[2rem]">
            There are currently no items <br className="hidden sm:block" />
            in your shopping cart...
          </h1>
          <button
            type="button"
            className="cursor-pointer rounded-md border-2 border-white bg-gradient-to-br from-black/20 via-black/50 to-black/20 px-8 py-2 font-bold tracking-wide text-white shadow-xl transition duration-500 select-none hover:from-yellow-200/50 hover:via-white/50 hover:to-yellow-200/50 hover:text-black sm:text-[2rem]"
            onClick={() => {
              navigate("/products");
            }}
          >
            Go Shopping
          </button>
        </div>
      ) : (
        <div className="cart flex flex-col gap-2">
          {items.map((i, index) => {
            return (
              <div
                className={`item-${i.id} relative flex h-full place-items-center gap-4 border border-black/20 bg-gradient-to-br from-white/20 via-white/50 to-white/20 py-4 backdrop-blur-sm`}
                key={index}
              >
                <div className="w-full flex-1">
                  <img
                    src={i.image}
                    alt={`item-${i.id}`}
                    className="m-auto w-20"
                  />
                </div>
                <div className="flex flex-2 flex-col items-start gap-2 sm:grid sm:grid-cols-3 sm:items-center">
                  <h3>
                    <strong>{i.name}</strong>
                  </h3>
                  <p>
                    <strong>{i.price} $</strong>
                  </p>
                  <div className="relative flex w-full items-center justify-between pr-2">
                    <div className="flex gap-4 border border-black/20">
                      <span
                        className="cursor-pointer bg-gray-200 px-1"
                        onClick={() => {
                          dispatch(
                            modifyAmount({ id: i.id, type: "decrement" }),
                          );
                        }}
                      >
                        ➖
                      </span>
                      <motion.strong
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className={`absolute -top-8 border bg-white/50 px-1 !text-[0.75rem] text-red-500 ${
                          i.quantity === i.stock ? "" : "hidden"
                        }`}
                      >
                        已達最大數量！
                      </motion.strong>
                      <strong>{i.quantity}</strong>
                      <span
                        className="cursor-pointer bg-gray-200 px-1"
                        onClick={() => {
                          dispatch(
                            modifyAmount({ id: i.id, type: "increment" }),
                          );
                        }}
                      >
                        ➕
                      </span>
                    </div>
                  </div>
                </div>
                <motion.button
                  className="absolute top-2 right-2 cursor-pointer rounded-sm select-none"
                  onClick={() => {
                    dispatch(removeItem(i));
                  }}
                >
                  ❌
                </motion.button>

                <strong className="absolute right-2 bottom-2 cursor-pointer rounded-sm select-none">
                  {i.quantity * i.price} $
                </strong>
              </div>
            );
          })}

          <div className="checkout flex flex-col py-4 sm:px-4">
            <div className="flex items-center justify-between">
              <motion.button
                initial={{}}
                whileHover={{ backgroundColor: "#333533", color: "#e8eddf" }}
                transition={{ duration: 0.5 }}
                className="rounded-sm border px-2 font-bold"
                onClick={() => navigate("/products")}
              >
                ◀Shopping
              </motion.button>
              <div>
                <div className="quantity flex flex-col items-end gap-2 sm:flex-row sm:items-center">
                  <p className="w-[150px] text-end">Total Quantity :</p>
                  <span className="text-black-500 w-[100px] px-2 text-end text-[1.15rem] font-bold">
                    {totalQuatity ?? 0}
                  </span>
                </div>
                <div className="amount flex flex-col items-end gap-2 sm:flex-row sm:items-center">
                  <p className="w-[150px] text-end">Total Amount : </p>
                  <span className="w-[100px] px-2 text-end text-[1.15rem] font-bold text-red-500">
                    {totalAmount ?? 0} $
                  </span>
                </div>
              </div>
            </div>

            <div className="flex w-[100%] flex-row items-center justify-between py-4">
              <motion.button
                initial={{ backgroundColor: "#333533", color: "#e8eddf" }}
                whileHover={{
                  backgroundColor: "rgba(255, 0, 0, 1)",
                  color: "rgba(255, 255, 255, 1)",
                }}
                transition={{ duration: 0.5 }}
                className="rounded-sm border px-2 font-bold"
                onClick={() => {
                  dispatch(cleanCart());
                }}
              >
                CleanCart
              </motion.button>
              <motion.button
                initial={{}}
                whileHover={{ backgroundColor: "#333533", color: "#e8eddf" }}
                transition={{ duration: 0.5 }}
                className="rounded-sm border px-2 font-bold"
                onClick={handleToCheckout}
              >
                CheckOut
              </motion.button>
            </div>
          </div>
          {/* <hr className="w-full" /> */}
        </div>
      )}
    </section>
  );
};

export default CartPage;
