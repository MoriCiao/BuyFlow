import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import StaffListCard from "./StaffListCard";

const StaffList = () => {
  const { userList } = useSelector((state) => state.user);
  const { animate_I } = useSelector((state) => state.ui);
  const [selectedRole, setSelectedRole] = useState("all");

  const staffFiltered = userList.filter((p) => {
    if (selectedRole === "all") {
      return p.role === "staff" || p.role === "admin";
    } else if (selectedRole === "staff") {
      return p.role === "staff";
    } else if (selectedRole === "admin") {
      return p.role === "admin";
    }
  });
  return (
    <section className="staff-list flex h-full w-full flex-col gap-4 px-4">
      <select
        className="w-full rounded-sm bg-[#333533] px-4 py-2 sm:w-20"
        name=""
        id=""
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="all">ALL</option>
        <option value="staff">Staff</option>
        <option value="admin">Admin</option>
      </select>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedRole}
          {...animate_I}
          className="staff-list grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5"
        >
          {staffFiltered &&
            staffFiltered.map((user, index) => {
              return <StaffListCard key={index} user={user} />;
            })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default StaffList;
