import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";

const STYLE = {
  cart_icon_btn_container: `cart-icon-btn-container flex items-center justify-end gap-4 select-none`,
  cart_icon_btn: `cart-icon-btn my-4 cursor-pointer rounded-full bg-zinc-900 p-2 text-[1.5rem] select-none`,
};

const CartIconBtn = ({ handleOpen }) => {
  const { items } = useSelector((state) => state.cart);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    setUpdate(true);
    const timer = setTimeout(() => {
      setUpdate(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [items]);
  return (
    <div className={STYLE.cart_icon_btn_container}>
      <div
        className={`overflow-hidden rounded-md ${update ? "translate-x-0" : "translate-x-100"}`}
      >
        <Button label="購物車已更新" variant="info" />
      </div>
      <motion.button
        initial={{ fontSize: "1.5rem" }}
        animate={{ rotate: ["0deg", "20deg", "0deg"] }}
        whileHover={{ boxShadow: "0 0 10px white" }}
        transition={{ rotate: { duration: 3, repeat: Infinity } }}
        className={STYLE.cart_icon_btn}
        onClick={handleOpen}
      >
        🛒
      </motion.button>
    </div>
  );
};

export default CartIconBtn;
