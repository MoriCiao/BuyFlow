import React from "react";
import { useSelector } from "react-redux";

const Profile = ({ title, userRole, children }) => {
  const { user } = useSelector((state) => state.user);
  const ProfileSVG = () => {
    const imgData = {
      menber: "/BuyFlow/user/user-menber.svg",
      staff: "/BuyFlow/user/user-staff.svg",
      admin: "/BuyFlow/user/user-admin.svg",
    };

    return (
      <div className="user-photo relative flex w-full items-center justify-center border py-4 sm:h-[200px]">
        <img
          className="w-[150px]"
          src={imgData[userRole]}
          alt="profile_photo"
        />
      </div>
    );
  };
  return (
    <div
      className={
        userRole !== "menber"
          ? "relative z-5 mx-auto flex flex-col items-center justify-center gap-2"
          : "col-span-1 col-start-2 flex h-full w-full flex-col items-center justify-start gap-2"
      }
    >
      <h1 className="w-[350px] indent-[1rem] text-[1.5rem]">{title} </h1>
      <div className="to-whtie/20 container flex min-h-[200px] w-full flex-col items-center justify-center bg-gradient-to-br from-white/20 via-white/50">
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
              {user.role === "menber" ? null : (
                <tr className="border">
                  <th className="p-2 text-end">Staff ID :</th>
                  <td className="px-4 text-start">{user.staff_id}</td>
                </tr>
              )}

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
      {children}
    </div>
  );
};

export default Profile;
{
}
