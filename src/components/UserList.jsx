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
      className="user-list shadow-xl "
    >
      <pre>{JSON.stringify(userList, null, 2)}</pre>
    </motion.div>
  );
};

export default UserList;
