import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
const img = {
  staff: "/BuyFlow/user/user-staff.svg",
  admin: "/BuyFlow/user/user-admin.svg",
};

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

  const handleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <section className="staff-list">
      <select
        className="bg-[#333533] text-[#e8eddf] px-2 py-1 mb-2 rounded-sm"
        name=""
        id=""
        onChange={handleChange}
      >
        <option value="all">ALL</option>
        <option value="staff">Staff</option>
        <option value="admin">Admin</option>
      </select>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedRole}
          {...animate_I}
          className="staffs grid grid-cols-3 gap-4"
        >
          {staffFiltered &&
            staffFiltered.map((user, index) => {
              return (
                <div key={index} className="user-card border max-h-[250px] p-4">
                  <div className="w-[150px] h-[150px] p-4">
                    <img
                      src={user.role === "staff" ? img.staff : img.admin}
                      alt="userImg"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="user-data text-center">
                    <p>{user.role}</p>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </div>
                </div>
              );
            })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default StaffList;
