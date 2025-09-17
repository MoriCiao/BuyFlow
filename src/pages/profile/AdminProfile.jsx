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
        className="profile relative z-5 w-full items-center justify-center gap-4 sm:flex md:grid md:grid-cols-2"
      >
        <Profile title="Admin Profile" userRole={"admin"} />

        <div className="flex hidden h-full w-full items-center justify-center opacity-50 md:relative md:block">
          <img
            src={"/BuyFlow/user/user-bg-2.svg"}
            alt="user-bg"
            className="md:abosolute -buttom-10 w-full"
          />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default AdminProfile;
