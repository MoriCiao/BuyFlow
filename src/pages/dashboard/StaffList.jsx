import React from "react";
import { useSelector } from "react-redux";

const img = {
  staff: "/BuyFlow/user/user-staff.svg",
  admin: "/BuyFlow/user/user-admin.svg",
};

const StaffList = () => {
  const { userList } = useSelector((state) => state.user);

  const staffFiltered = userList.filter(
    (p) => p.role === "staff" || p.role === "admin"
  );

  return (
    <section className="staff-list grid grid-cols-3 gap-4">
      {staffFiltered.map((user) => {
        return (
          <div className="user-card border max-h-[250px] p-4">
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
    </section>
  );
};

export default StaffList;
