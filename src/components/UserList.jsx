import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const UserList = () => {
  const { userList } = useSelector((state) => state.user);
  useEffect(() => {}, [userList]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="absolute left-0 border border-white shadow-xl w-150 h-200 overflow-auto text-[1.1rem] bg-white/50 tracking-widest font-[700] p-8 "
    >
      <pre>{JSON.stringify(userList, null, 2)}</pre>
    </motion.div>
  );
};

export default UserList;
