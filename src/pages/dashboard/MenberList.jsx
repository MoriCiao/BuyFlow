import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
const MenberList = () => {
  const { userList } = useSelector((state) => state.user);
  const { animate_I } = useSelector((state) => state.ui);
  const location = useLocation();
  const menberFiltered = userList.filter((p) => p.role === "menber");

  const [keyword, setKeyWord] = useState("");

  const filtered = menberFiltered.filter((p) => {
    const userName = String(p.name).toLowerCase();

    return userName.includes(keyword.toLowerCase());
  });
  const currentUser = filtered.length === 0 ? menberFiltered : filtered;

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={location.pathname}
        {...animate_I}
        className="menber-list w-full h-full text-center flex flex-col gap-4"
      >
        <div className="w-full sm:mt-8">
          <input
            type="text"
            className="border rounded-full w-full h-[2rem] indent-[0.5rem]"
            placeholder="搜尋會員姓名..."
            value={keyword}
            onChange={(e) => setKeyWord(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full border border-collapse ">
            <thead>
              <tr className="border ">
                <th className="border ">No.</th>
                <th className="border ">Name</th>
                <th className="border ">Email</th>
                <th className="border ">Role</th>
              </tr>
            </thead>
            <tbody>
              {currentUser &&
                currentUser.map((m, index) => {
                  return (
                    <motion.tr
                      key={index}
                      whileHover={{
                        backgroundColor: "#333533",
                        color: "#e8eddf",
                      }}
                      transition={{ duration: 0.5 }}
                      className="h-[2rem] border"
                    >
                      <td className="border ">{index}</td>
                      <td className="border ">{m.name}</td>
                      <td className="border ">{m.email}</td>
                      <td className="border ">{m.role}</td>
                    </motion.tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default MenberList;
MenberList;
