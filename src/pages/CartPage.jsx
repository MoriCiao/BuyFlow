import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  modifyAmount,
  removeItem,
  cleanCart,
} from "../features/cart/cartSlice";
const CartPage = () => {
  const { items, totalAmount, totalQuatity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="cart-page w-full min-h-[60vh]">
      {items.length === 0 ? (
        <div className="w-full text-center p-8 flex flex-col items-center justify-cneter">
          <h1 className="!text-[2rem] font-bold h-[200px] flex items-center">
            There are currently no items <br />
            in your shopping cart...
          </h1>
          <button
            type="button"
            className="text-[1.5rem] border select-none cursor-pointer px-2 rounded-md"
            onClick={() => {
              navigate("/products");
            }}
          >
            GO Shopping
          </button>
        </div>
      ) : (
        <div className="cart">
          {items.map((i) => {
            const totalPrice = i.price * i.amount;

            return (
              <div
                key={i.id}
                className={`item-${i.id} w-full grid grid-cols-6 gap-4 px-4 py-4`}
              >
                <img
                  src={i.image}
                  alt={`item-${i.id}`}
                  className="col-start-1 col-span-1"
                />
                <div className="item-detail col-start-2 col-span-5">
                  <h3>{i.name}</h3>
                  <div>
                    <p>Price : {i.price} $</p>
                    <p>Quantity : {i.amount} </p>
                    <p>Total Price is : {totalPrice} $</p>
                    <div>
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
                  </div>
                </div>
                <hr className="col-start-1 col-span-6" />
              </div>
            );
          })}

          <div className="checkout flex flex-col items-end px-4 py-4">
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
              >
                CheckOut
              </motion.button>
            </div>
            <hr className="w-full" />
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
