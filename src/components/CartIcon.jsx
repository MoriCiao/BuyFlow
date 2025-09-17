import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const CartIcon = () => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const { items, totalAmount, totalQuatity } = useSelector(
    (state) => state.cart,
  );
  const { isAuthenticated } = useSelector((state) => state.user);

  const handleOpen = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      setOpen(!isOpen);
    }
  };

  const headnleToCheckout = () => {
    if (items.length === 0) return;

    navigate("/checkout");
  };

  return (
    <section className="cartIcon fixed top-0 right-5 z-100 block select-none sm:top-30">
      <div className="flex justify-end select-none">
        <motion.button
          initial={{ fontSize: "1.5rem" }}
          animate={{ rotate: ["0deg", "20deg", "0deg"] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="my-4 cursor-pointer rounded-full bg-white/75 p-2 text-[1.5rem] select-none"
          onClick={handleOpen}
        >
          🛒
        </motion.button>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } relative min-h-[500px] w-[300px] bg-black/70 p-4 text-white sm:h-[600px]`}
      >
        <div>
          <p>Cart : 🛒</p>
          <hr className="py-1" />
          <div className="grid grid-cols-3 border-white/50 px-4">
            <p>Name</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>
        </div>
        <div className="flex h-[400px] flex-col gap-2 overflow-y-auto">
          {items &&
            items.map((i, index) => {
              return (
                <motion.div
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className="justity-center grid cursor-pointer grid-cols-3 items-center gap-2 rounded-sm border border-white/50 p-4 py-4"
                >
                  <p className="col-span-1">{i.name}</p>
                  <p className="col-span-1">{i.quantity}</p>
                  <p className="col-span-1">{i.price} $</p>

                  <hr className="col-span-3" />
                  <div className="col-span-3 text-end">
                    <strong className="text-red-500">
                      {i.price * i.quantity} $
                    </strong>
                  </div>
                </motion.div>
              );
            })}
        </div>

        <div className="absolute right-0 bottom-5 w-full px-4">
          <hr className="pb-1" />
          <p className="flex justify-end pb-1">
            Total Quatity :{" "}
            <strong className="block w-[5rem] px-2 text-center text-[1.05rem] text-red-500">
              {totalQuatity}
            </strong>
          </p>
          <p className="flex justify-end pb-1">
            Total Amount :{" "}
            <strong className="block w-[5rem] px-2 text-center text-[1.05rem] text-red-500">
              {totalAmount} $
            </strong>
          </p>
          <div className="flex justify-end pt-2">
            {" "}
            <motion.button
              whileHover={{
                backgroundColor: "#e8eddf",
                color: "#333533",
                boxShadow: "0 0 10px #e8eddf",
              }}
              type="button"
              className="cursor-pointer rounded-full border px-2"
              onClick={() => {
                (headnleToCheckout(), handleOpen());
              }}
            >
              CheckOut
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartIcon;
