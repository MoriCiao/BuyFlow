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
    <section className="staff-list w-full">
      <select
        className="mb-2 w-full rounded-sm bg-[#333533] px-2 py-1 text-[#e8eddf] sm:w-auto"
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
          className="staffs grid w-full grid-cols-2 flex-wrap items-center justify-center gap-2 sm:flex sm:items-start sm:justify-start sm:gap-8"
        >
          {staffFiltered &&
            staffFiltered.map((user, index) => {
              return (
                <div
                  key={index}
                  className="user-card min-w-[100px] border bg-gradient-to-br from-white/20 via-white/20 to-black/10 p-4 shadow-xl backdrop-blur-sm transition duration-500 sm:max-h-[250px] sm:w-[200px] sm:hover:-translate-x-2 sm:hover:-translate-y-2"
                >
                  <div className="flex w-full p-4 sm:h-[150px]">
                    <img
                      src={user.role === "staff" ? img.staff : img.admin}
                      alt="userImg"
                      className="w-full"
                    />
                  </div>
                  <div className="user-data text-center">
                    <p className="font-bold">{user.role.toUpperCase()}</p>
                    <p>{user.name}</p>
                    <p className="w-full break-all">{user.email}</p>
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
