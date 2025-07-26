import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { modify } from "../../features/products/productsSlice";
import Modify from "../../components/Modify";
const opt = ["All", "ID", "Rating", "Price >", "Price <", "Stock"];

const ProductsList = () => {
  const { products, isModify } = useSelector((state) => state.products);
  const { animate_I } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const [keyword, setKeyWord] = useState("");
  const [option, setOption] = useState("all");
  const handleChange = (e) => {
    setOption(e.target.value);
    setKeyWord("");
  };
  const filtered = products.filter((p) => {
    const itemID = String(p.id).toLowerCase();
    const itemName = String(p.name).toLowerCase();
    const itemRating = Number(p.rating);
    const itemCate = String(p.category).toLowerCase();
    const itemPrice = Number(p.price);
    const itemStock = Number(p.stock);
    const itemDes = String(p.description).toLowerCase();

    if (option === "All") {
      return (
        itemName.includes(String(keyword).toLowerCase()) ||
        itemCate.includes(String(keyword).toLowerCase()) ||
        itemDes.includes(String(keyword).toLowerCase())
      );
    } else if (option === "ID") {
      return itemID.includes(String(keyword).toLowerCase());
    } else if (option === "Rating") {
      return itemRating >= keyword;
    } else if (option === "Price >") {
      return itemPrice >= keyword;
    } else if (option === "Price <") {
      return itemPrice <= keyword;
    } else if (option === "Stock") {
      return itemStock >= keyword;
    }
  });

  const currentData = filtered.length === 0 ? products : filtered;
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={location.pathname}
        {...animate_I}
        className="products-list w-full h-full text-center flex flex-col gap-4 mt-2 sm:mt-8 relative"
      >
        <div className="flex justify-center items-center rounded-full border m-auto min-w-100 sm:absolute sm:top-0 sm:left-0">
          <select
            name=""
            id=""
            className="rounded-l-full h-[2rem] min-w-30 px-2 tracking-widest font-bold text-[#333533] text-center "
            onChange={handleChange}
          >
            {opt &&
              opt.map((o, index) => {
                return (
                  <option
                    key={index}
                    value={o}
                    className="bg-[#e8eddf]/70 font-bold tracking-widest text-[#333533]"
                  >
                    {o.toUpperCase()}
                  </option>
                );
              })}
          </select>
          <input
            type="text"
            placeholder="商品搜尋..."
            className="search-input w-full rounded-r-full h-[2rem] indent-[1rem] border-0"
            value={keyword}
            onChange={(e) => setKeyWord(e.target.value)}
          />
        </div>
        <div className=" min-w-[1000px] xl:max-h-[450px] py-4 mb-8 overflow-auto sm:mt-12">
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
              {currentData &&
                currentData.map((p) => {
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
      </motion.section>
    </AnimatePresence>
  );
};

export default ProductsList;
