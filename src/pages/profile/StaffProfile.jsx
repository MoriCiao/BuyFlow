import React from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import ProfileSVG from "../../components/ProfileSVG";
import { useLocation } from "react-router-dom";
// 員工資料瀏覽

const StaffProfile = () => {
  const { user, profile_bg } = useSelector((state) => state.user);
  const { animate_I } = useSelector((state) => state.ui);
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={location.pathname}
        {...animate_I}
        className="profile relative grid grid-cols-2 gap-4 items-center justify-center "
      >
        <div className="w-full h-full flex items-center justify-center">
          <img src={"/BuyFlow/user/user-bg-2.svg"} alt="user-bg" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[1.5rem] w-[350px] indent-[1rem]">
            Staff Profile
          </h1>
          <div className="container flex flex-col items-center justify-center w-[350px] min-h-[200px]">
            <ProfileSVG />
            <div className="user-detail w-full">
              <table className="w-full">
                <thead>
                  <tr className="border border-t-0">
                    <th className="p-2 text-end">Name : </th>
                    <td className="px-4 text-start">
                      {user.name.toLocaleUpperCase()}
                    </td>
                  </tr>
                  <tr className="border">
                    <th className="p-2 text-end">Staff ID :</th>
                    <td className="px-4 text-start">{user.staff_id}</td>
                  </tr>
                  <tr className="border">
                    <th className="p-2 text-end">Email :</th>
                    <td className="px-4 text-start">{user.email}</td>
                  </tr>
                  <tr className="border">
                    <th className="p-2 text-end">Role :</th>
                    <td className="px-4 text-start">
                      {user.role.toLocaleUpperCase()}
                    </td>
                  </tr>
                  <tr className="border">
                    <th className="p-2 text-end">Token :</th>
                    <td className="px-4 text-start">{user.token}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default StaffProfile;
