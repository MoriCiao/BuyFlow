import React from "react";
import { useSelector } from "react-redux";

const StaffList = () => {
  const { userList } = useSelector((state) => state.user);

  const staffFiltered = userList.filter(
    (p) => p.role === "staff" || p.role === "admin"
  );

  return (
    <section className="staff-list grid grid-cols-3 gap-4">
      {staffFiltered.map((user) => {
        return (
          <div className="user-card">
            <div className="border w-[150px] h-[150px]">
              <img
                src={
                  user.role === "staff"
                    ? "./user/user-staff.svg"
                    : "./user/user-admin.svg"
                }
                alt="userImg"
                className="w-full h-full"
              />
            </div>
            <div className="user-data text-center">
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
