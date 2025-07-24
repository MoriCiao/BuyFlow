import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileSVG from "../../components/ProfileSVG";
import { motion } from "framer-motion";
// 會員資料瀏覽

const MoionLink = motion(Link);

const MenberProfile = () => {
  const { user, profile_bg } = useSelector((state) => state.user);

  return (
    <section className="profile relative w-[100%] md:grid md:grid-cols-2 sm:flex sm:flex-col gap-4 md:items-center sm:items-center justify-center">
      <div className="col-start-1 col-span-1 w-full h-full flex items-center justify-center md:block sm:hidden">
        <img
          src="/BuyFlow/user/user-bg-2.svg"
          alt="user-bg"
          className="xl:w-[90%]"
        />
      </div>

      <div className="col-start-2 col-span-1 flex flex-col items-center justify-start w-full h-full ">
        <div className="w-full xl:max-w-[350px]">
          <h1 className="text-[1.5rem] w-full">Menber Profile</h1>
          <div className="container flex flex-col items-center justify-center w-full min-h-[300px]">
            <ProfileSVG />

            <div className="user-detail w-full xl:max-w-[350px]">
              <table className="w-full xl:max-w-[350px]">
                <thead>
                  <tr className="border">
                    <th className="p-2 text-end">Name : </th>
                    <td className="px-4 text-start">
                      {user.name.toLocaleUpperCase()}
                    </td>
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

        <MoionLink
          initial={{ scale: 1 }}
          whileHover={{
            backgroundColor: "#333533",
            color: "#e8eddf",
            scale: 1.1,
          }}
          transition={{ duration: 0.5 }}
          to="/menber/ordertracking"
          className="p-2 my-2 font-bold text-center underline border w-full xl:max-w-[350px]"
        >
          🚚 Order Tracking
        </MoionLink>
      </div>
    </section>
  );
};

export default MenberProfile;
