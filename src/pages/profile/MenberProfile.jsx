import React from "react";
import { useSelector } from "react-redux";
import ProfileSVG from "../../components/ProfileSVG";

// 會員資料瀏覽
const MenberProfile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <section className="profile relative flex flex-col items-center justify-center">
      <h1 className="text-[1.5rem] w-[350px]">Menber Profile</h1>

      <div className="container flex flex-col items-center justify-center w-[350px] min-h-[200px]">
        <ProfileSVG />

        <div className="user-detail w-full">
          <table className="w-full">
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
    </section>
  );
};

export default MenberProfile;
