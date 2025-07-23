import React from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useLocation } from "react-router-dom";
const MenberList = () => {
  const { userList } = useSelector((state) => state.user);
  const { animate_I } = useSelector((state) => state.ui);
  const location = useLocation();
  const menberFiltered = userList.filter((p) => p.role === "menber");
  console.log(menberFiltered);

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={location.pathname}
        {...animate_I}
        className="menber-list w-full h-full text-center"
      >
        <table className="w-full border border-collapse">
          <thead>
            <tr className="border ">
              <th className="border ">No.</th>
              <th className="border ">Name</th>
              <th className="border ">Email</th>
              <th className="border ">Role</th>
            </tr>
          </thead>
          <tbody>
            {menberFiltered &&
              menberFiltered.map((m, index) => {
                console.log(m);
                return (
                  <motion.tr
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
      </motion.section>
    </AnimatePresence>
  );
};

export default MenberList;
MenberList;
