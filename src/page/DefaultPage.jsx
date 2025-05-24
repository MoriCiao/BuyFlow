import React, { useContext } from "react";
import { ThemeContext } from "../CartBodyArea.jsx";
import { motion } from "framer-motion";
const DefaultPage = () => {
  const { fruit, daily, snack, divce, isOpen, dispatch } =
    useContext(ThemeContext);
  const allProducts = [...fruit, ...daily, ...snack, ...divce];
  return (
    <div
      className={`products_area h-screen grid gap-0 grid-cols-4 transition-all duration-300 pt-4 ${
        isOpen ? "w-3/4 " : "w-full"
      } `}
    >
      {allProducts.map((all) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key={all.id}
            className="product-container p-4"
          >
            <strong className="product-name block py-2">{all.name}</strong>
            <div className="img_container overflow-hidden  opacity-75 rounded-20">
              <span className=" text-[9rem]">{all.img}</span>
            </div>
            <div className="flex items-center mt-2 relative  w-full grid grid-cols-8 ">
              <p className="pb-0 w-4/3 block col-span-5">
                Price : <strong className="text-red-500">${all.price}</strong>
              </p>
              <button
                type="button"
                className="col-span-3"
                onClick={() => {
                  dispatch({
                    type: "ADD_Item",
                    payload: { id: all.id, name: all.name, price: all.price },
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

export default DefaultPage;
