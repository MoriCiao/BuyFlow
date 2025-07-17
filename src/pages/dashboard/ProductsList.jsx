import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const ProductsList = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <section className="products-list w-full h-full text-center ">
      <div className="overflow-auto max-w-[1000px] max-h-[500px]">
        <table className="w-full border border-collapse w-[100%] ">
          <thead>
            <tr className="border ">
              <th className="border px-4">ID</th>
              <th className="border px-4">Name</th>
              <th className="border px-4">Rating</th>
              <th className="border px-4">Category</th>
              <th className="border px-4">Price</th>
              <th className="border px-4">Stock</th>
              <th className="border px-4">Description</th>
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
    </section>
  );
};

export default ProductsList;
