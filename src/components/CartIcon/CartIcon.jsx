import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CartIconBtn from "./CartIconBtn";
import CartIconContent from "./CartIconContent";
import CartIconOperate from "./CartIconOperate";

const STYLE = {
  cart_icon_container: `cart-Icon fixed top-0 right-5 z-100 block select-none lg:top-30`,

  cart_icon_content: `cart-icon-container flex min-h-100 flex-col justify-between gap-4 rounded-xl border border-white/50 bg-zinc-800 p-4 text-white shadow-xl`,
};

const CartIcon = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { items, totalAmount, totalQuatity } = useSelector(
    (state) => state.cart,
  );
  const { isAuthenticated } = useSelector((state) => state.user);

  const handleOpen = () => {
    if (!isAuthenticated) {
      alert("登入後開啟此功能。");
      navigate("/login");
    } else {
      setOpen(!isOpen);
    }
  };

  const headnleToCheckout = () => {
    if (items.length === 0) return;
    navigate("/cart");
    setOpen(!isOpen);
  };

  return (
    <section className={STYLE.cart_icon_container}>
      {/* Icon Btn */}
      <CartIconBtn handleOpen={handleOpen} />

      {isOpen && user && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.5, x: 100 }}
            transition={{ duration: 0.5 }}
            className={STYLE.cart_icon_content}
          >
            <p className="text-[1.25rem]">🛒 您的商品</p>

            <CartIconContent items={items} />

            <CartIconOperate
              handleOpen={handleOpen}
              headnleToCheckout={headnleToCheckout}
              totalAmount={totalAmount}
              totalQuatity={totalQuatity}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default CartIcon;
