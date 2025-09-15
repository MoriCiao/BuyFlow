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
        className="bg-[#333533] text-[#e8eddf] px-2 py-1 mb-2 rounded-sm sm:w-auto w-full"
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
          className="staffs sm:flex flex-wrap grid grid-cols-2 sm:gap-8 gap-2 w-full sm:items-start sm:justify-start items-center justify-center "
        >
          {staffFiltered &&
            staffFiltered.map((user, index) => {
              return (
                <div
                  key={index}
                  className="user-card border sm:max-h-[250px] sm:w-[200px] min-w-[100px] p-4 bg-gradient-to-br from-white/20 via-white/20 to-black/10 backdrop-blur-sm sm:hover:-translate-x-2 sm:hover:-translate-y-2 transition duration-500 shadow-xl"
                >
                  <div className="w-full sm:h-[150px] p-4 flex">
                    <img
                      src={user.role === "staff" ? img.staff : img.admin}
                      alt="userImg"
                      className="w-full "
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
