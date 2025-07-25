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
      <div className="user-photo relative flex items-center justify-center border w-full h-[200px]">
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
          ? "flex flex-col items-center justify-center"
          : "col-start-2 col-span-1 flex flex-col items-center justify-start w-full h-full "
      }
    >
      <h1 className="text-[1.5rem] w-[350px] indent-[1rem]">{title} </h1>
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
