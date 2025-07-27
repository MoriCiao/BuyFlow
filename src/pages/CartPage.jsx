import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  modifyAmount,
  removeItem,
  cleanCart,
} from "../features/cart/cartSlice";
import { useEffect } from "react";
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
    <section className="cart-page w-full min-h-[60vh] text-center ">
      <div className="grid grid-cols-12 border py-2 mb-4 text-black/50">
        <div className=" col-start-4 col-span-2">Name</div>
        <div className=" col-start-6 col-span-2">Price</div>
        <div className=" col-start-8 col-span-4">Quantity </div>

        <div className=" col-start-12 col-span-1">Delete</div>
      </div>

      {items.length === 0 ? (
        <div className="w-full text-center text-[#333533] p-8 flex flex-col items-center justify-cneter ">
          <h1 className="!text-[2rem] font-bold h-[200px] flex items-center">
            There are currently no items <br />
            in your shopping cart...
          </h1>
          <button
            type="button"
            className="text-[2rem] text-white font-bold border-2 border-white select-none cursor-pointer px-8 py-2 rounded-md  bg-gradient-to-br from-black/20 via-black/50 to-black/20  shadow-xl tracking-wide hover:text-black hover:from-yellow-200/50 hover:via-white/50 hover:to-yellow-200/50 transition duration-500"
            onClick={() => {
              navigate("/products");
            }}
          >
            Go Shopping
          </button>
        </div>
      ) : (
        <div className="cart">
          {items.map((i, index) => {
            return (
              <div
                key={index}
                className={`item-${i.id} w-full grid grid-cols-12 items-center justify-center`}
              >
                <img
                  src={i.image}
                  alt={`item-${i.id}`}
                  className="col-start-2 col-span-2"
                />

                <div className=" col-start-4 col-span-2">
                  <h3>{i.name}</h3>
                </div>
                <div className=" col-start-6 col-span-2">
                  <p>{i.price} $</p>
                </div>
                <div className=" col-start-8 col-span-4  flex gap-4 justify-center select-none">
                  <div className="relative border border-black/50 flex gap-4 justify-center w-fit">
                    <span
                      className="px-1 cursor-pointer"
                      onClick={() => {
                        dispatch(modifyAmount({ id: i.id, type: "decrement" }));
                      }}
                    >
                      ➖
                    </span>
                    <motion.strong
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className={`absolute bg-white/50 text-red-500 -top-8 w-35 px-1 !text-[1rem] border ${
                        i.quantity === i.stock ? "" : "hidden"
                      }`}
                    >
                      已達最大數量！
                    </motion.strong>
                    <p>{i.quantity}</p>
                    <span
                      className="px-1 cursor-pointer"
                      onClick={() => {
                        dispatch(modifyAmount({ id: i.id, type: "increment" }));
                      }}
                    >
                      ➕
                    </span>
                  </div>
                </div>

                <div className=" col-start-12 col-span-1 w-full h-full flex items-center justify-center">
                  <motion.button
                    initial={{
                      backgroundColor: "#333533",
                      color: "#e8eddf",
                    }}
                    whileHover={{
                      backgroundColor: "rgba(255, 0, 0, 1)",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="border px-2 select-none cursor-pointer rounded-sm"
                    onClick={() => {
                      dispatch(removeItem(i));
                    }}
                  >
                    Delete
                  </motion.button>
                </div>

                <hr className="col-start-1 col-span-12 my-4" />
              </div>
            );
          })}

          <div className="checkout flex flex-col px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.button
                initial={{}}
                whileHover={{ backgroundColor: "#333533", color: "#e8eddf" }}
                transition={{ duration: 0.5 }}
                className="px-2 py-2 border rounded-sm font-bold "
                onClick={() => navigate("/products")}
              >
                ◀ Go Back Shpping
              </motion.button>
              <div>
                <div className="quantity flex flex-row items-center gap-2 ">
                  <p className="w-[150px] text-end">Total Quantity :</p>
                  <span className="text-black-500 font-bold text-[1.15rem] text-end px-2 w-[100px]">
                    {totalQuatity ?? 0}
                  </span>
                </div>
                <div className="amount flex flex-row items-center gap-2">
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
          <hr className="w-full" />
        </div>
      )}
    </section>
  );
};

export default CartPage;
