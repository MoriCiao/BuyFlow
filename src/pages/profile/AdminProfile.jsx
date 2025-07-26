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
        className="profile relative z-5 md:grid md:grid-cols-2 sm:flex w-full gap-4 items-center justify-center "
      >
        <Profile title="Admin Profile" userRole={"admin"} />

        <div className="w-full h-full flex items-center justify-center md:relative  md:relative sm:absolute sm:z-0 sm:opacity-50">
          <img
            src={"/BuyFlow/user/user-bg-2.svg"}
            alt="user-bg"
            className="sm:w-[80%] md:w-[100%]"
          />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default AdminProfile;
