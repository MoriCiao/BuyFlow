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
    (state) => state.cart
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
    <section className="cart-page md:w-[80%] w-full min-h-[60vh] text-center m-auto ">
      {items.length === 0 ? (
        <div className="w-full text-center text-[#333533] p-8 flex flex-col items-center justify-cneter ">
          <h1 className="sm:!text-[2rem] text-[1.25rem] font-bold h-[200px] flex items-center">
            There are currently no items <br className="sm:block hidden" />
            in your shopping cart...
          </h1>
          <button
            type="button"
            className="sm:text-[2rem] text-white font-bold border-2 border-white select-none cursor-pointer px-8 py-2 rounded-md  bg-gradient-to-br from-black/20 via-black/50 to-black/20  shadow-xl tracking-wide hover:text-black hover:from-yellow-200/50 hover:via-white/50 hover:to-yellow-200/50 transition duration-500"
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
                className={`item-${i.id} relative h-full flex place-items-center py-4 gap-4 border border-black/20 bg-gradient-to-br from-white/20 via-white/50 to-white/20 backdrop-blur-sm`}
                key={index}
              >
                <div className="w-full flex-1">
                  <img
                    src={i.image}
                    alt={`item-${i.id}`}
                    className="w-20 m-auto"
                  />
                </div>
                <div className="flex-2 sm:grid sm:grid-cols-3 sm:items-center flex flex-col items-start  gap-2">
                  <h3>
                    <strong>{i.name}</strong>
                  </h3>
                  <p>
                    <strong>{i.price} $</strong>
                  </p>
                  <div className="relative flex items-center justify-between  w-full pr-2">
                    <div className="flex gap-4 border border-black/20">
                      <span
                        className="px-1 cursor-pointer bg-gray-200"
                        onClick={() => {
                          dispatch(
                            modifyAmount({ id: i.id, type: "decrement" })
                          );
                        }}
                      >
                        ➖
                      </span>
                      <motion.strong
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className={`absolute bg-white/50 text-red-500 -top-8 px-1 !text-[0.75rem] border ${
                          i.quantity === i.stock ? "" : "hidden"
                        }`}
                      >
                        已達最大數量！
                      </motion.strong>
                      <strong>{i.quantity}</strong>
                      <span
                        className="px-1 cursor-pointer bg-gray-200"
                        onClick={() => {
                          dispatch(
                            modifyAmount({ id: i.id, type: "increment" })
                          );
                        }}
                      >
                        ➕
                      </span>
                    </div>
                  </div>
                </div>
                <motion.button
                  className="absolute right-2 top-2 select-none cursor-pointer rounded-sm"
                  onClick={() => {
                    dispatch(removeItem(i));
                  }}
                >
                  ❌
                </motion.button>

                <strong className="absolute right-2 bottom-2 select-none cursor-pointer rounded-sm">
                  {i.quantity * i.price} $
                </strong>
              </div>
            );
          })}

          <div className="checkout flex flex-col sm:px-4 py-4 ">
            <div className="flex justify-between items-center">
              <motion.button
                initial={{}}
                whileHover={{ backgroundColor: "#333533", color: "#e8eddf" }}
                transition={{ duration: 0.5 }}
                className="px-2 border rounded-sm font-bold "
                onClick={() => navigate("/products")}
              >
                ◀Shopping
              </motion.button>
              <div>
                <div className="quantity flex sm:flex-row flex-col sm:items-center items-end gap-2 ">
                  <p className="w-[150px] text-end">Total Quantity :</p>
                  <span className="text-black-500 font-bold text-[1.15rem] text-end px-2 w-[100px]">
                    {totalQuatity ?? 0}
                  </span>
                </div>
                <div className="amount flex sm:flex-row flex-col sm:items-center items-end gap-2">
                  <p className="w-[150px] text-end">Total Amount : </p>
                  <span className="text-red-500 font-bold text-[1.15rem] text-end px-2 w-[100px]">
                    {totalAmount ?? 0} $
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[100%] flex flex-row items-center justify-between py-4">
              <motion.button
                initial={{ backgroundColor: "#333533", color: "#e8eddf" }}
                whileHover={{
                  backgroundColor: "rgba(255, 0, 0, 1)",
                  color: "rgba(255, 255, 255, 1)",
                }}
                transition={{ duration: 0.5 }}
                className="px-2 border rounded-sm font-bold"
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
                className="px-2 border rounded-sm font-bold"
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
