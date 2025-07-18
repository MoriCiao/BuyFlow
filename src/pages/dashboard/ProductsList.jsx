import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { modify } from "../../features/products/productsSlice";
import Modify from "../../components/modify";
const ProductsList = () => {
  const { products, isModify } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <section className="products-list w-full h-full text-center ">
      <div className=" min-w-[1000px] max-h-[500px] ">
        <table className="w-full border border-collapse w-[100%] ">
          <thead>
            <tr className="border ">
              <th className="border px-8"></th>
              <th className="border px-8">ID</th>
              <th className="border px-8">Name</th>
              <th className="border px-8">Rating</th>
              <th className="border px-8">Category</th>
              <th className="border px-8">Price</th>
              <th className="border px-8">Stock</th>
              <th className="border max-w-[300px]">Description</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((p) => {
                return (
                  <motion.tr
                    whileHover={{
                      backgroundColor: "#333533",
                      color: "#e8eddf",
                    }}
                    transition={{ duration: 0.5 }}
                    key={p.id}
                    className="h-[2rem] border"
                  >
                    <td className="border ">
                      <span
                        className="select-none cursor-pointer"
                        onClick={() => {
                          dispatch(modify(p));
                        }}
                      >
                        💾
                      </span>
                    </td>
                    <td className="border ">{p.id}</td>
                    <td className="border ">{p.name}</td>
                    <td className="border ">{p.rating}</td>
                    <td className="border ">{p.category}</td>
                    <td className="border ">{p.price}</td>
                    <td className="border ">{p.stock}</td>
                    <td className="border ">{p.description}</td>
                  </motion.tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {isModify && <Modify />}
    </section>
  );
};

export default ProductsList;
