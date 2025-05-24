import React from "react";
import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../CartBodyArea.jsx";
const ProductFruit = () => {
  const { isOpen, fruit, dispatch } = useContext(ThemeContext);

  return (
    <div
      className={`products_area h-screen grid gap-0 grid-cols-4 transition-all duration-300 pt-4 ${
        isOpen ? "w-3/4 " : "w-full"
      } `}
    >
      {fruit.map((f) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key={f.id}
            className="product-container p-4"
          >
            <strong className="product-name block py-2">{f.name}</strong>
            <div className="img_container overflow-hidden  opacity-75 rounded-20">
              <span className=" text-[9rem]">{f.img}</span>
            </div>
            <div className="flex items-center mt-2 relative  w-full grid grid-cols-8 ">
              <p className="pb-0 w-4/3 block col-span-5">
                Price : <strong className="text-red-500">${f.price}</strong>
              </p>
              <button
                type="button"
                className="col-span-3"
                onClick={() => {
                  dispatch({
                    type: "ADD_Item",
                    payload: { id: f.id, name: f.name, price: f.price },
                  });
                }}
              >
                <span>Add</span>
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductFruit;
