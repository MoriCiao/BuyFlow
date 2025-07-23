import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileSVG from "../../components/ProfileSVG";

// 會員資料瀏覽
const MenberProfile = () => {
  const { user, profile_bg } = useSelector((state) => state.user);

  return (
    <section className="profile relative w-full grid grid-cols-2 gap-4 items-start justify-cneter">
      <div className="col-start-1 col-span-1 w-full h-full flex items-center justify-center">
        <img
          src="/BuyFlow/user/user-bg-2.svg"
          alt="user-bg"
          className="w-[90%]"
        />
      </div>

      <div className="col-start-2 col-span-1 flex flex-col items-center justify-start">
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

        <Link
          to="/menber/ordertracking"
          className="p-2 my-2 font-bold underline "
        >
          🚚 Order Tracking
        </Link>
      </div>
    </section>
  );
};

export default MenberProfile;
