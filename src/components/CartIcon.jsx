import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const CartIcon = () => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const { items, totalAmount, totalQuatity } = useSelector(
    (state) => state.cart
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
    <section className="cartIcon fixed top-30 right-5 z-100 sm:hidden md:block select-none">
      <div className="select-none flex justify-end">
        <motion.button
          initial={{ fontSize: "1.5rem" }}
          animate={{ rotate: ["0deg", "20deg", "0deg"] }}
          transition={{ duration: 3, repeat: Infinity }}
          className=" text-[1.5rem] bg-white/50 rounded-full p-2 select-none cursor-pointer my-4"
          onClick={handleOpen}
        >
          🛒
        </motion.button>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } bg-black/70 w-[300px] h-[600px] text-white p-4 relative`}
      >
        <div>
          <p>Cart : 🛒</p>
          <hr className="py-1" />
          <div className="grid grid-cols-3  px-4  border-white/50">
            <p>Name</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 h-[400px] overflow-y-auto">
          {items &&
            items.map((i, index) => {
              return (
                <motion.div
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className="py-4 grid grid-cols-3 gap-2 items-center justity-center border border-white/50 rounded-sm p-4 cursor-pointer"
                >
                  <p className=" col-span-1">{i.name}</p>
                  <p className=" col-span-1">{i.quantity}</p>
                  <p className=" col-span-1">{i.price} $</p>

                  <hr className="col-span-3" />
                  <div className="col-span-3 text-end ">
                    <strong className="text-red-500">
                      {i.price * i.quantity} $
                    </strong>
                  </div>
                </motion.div>
              );
            })}
        </div>

        <div className="absolute bottom-5 right-0 w-full px-4">
          <hr className="pb-1" />
          <p className="flex justify-end pb-1">
            Total Quatity :{" "}
            <strong className="text-center text-[1.05rem] block w-[5rem] px-2 text-red-500">
              {totalQuatity}
            </strong>
          </p>
          <p className="flex justify-end pb-1">
            Total Amount :{" "}
            <strong className="text-center text-[1.05rem] block w-[5rem] px-2 text-red-500">
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
              className="border px-2 rounded-full cursor-pointer"
              onClick={() => {
                headnleToCheckout(), handleOpen();
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
