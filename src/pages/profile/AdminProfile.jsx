import React from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

import Profile from "../../components/Profile";
// 後台行政單位 Profile

const AdminProfile = () => {
  const { user } = useSelector((state) => state.user);
  const { animate_I } = useSelector((state) => state.ui);
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={location.pathname}
        {...animate_I}
        className="profile relative h-full w-full"
      >
        <Profile />
      </motion.section>
    </AnimatePresence>
  );
};

export default AdminProfile;
