import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileOperate from "./ProfileOperate";
import ProfileUserData from "./ProfileUserData";

const STYLE = {
  profile_container: `profile-container flex w-full flex-col gap-4 bg-zinc-600 p-4`,

  profile_user_data: `profile-user-data w-full md:text-[1.25rem] flex flex-1 flex-col rounded-md bg-zinc-800 p-4 shadow-lg`,
};

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={STYLE.profile_container}>
      <h1 className="border-b border-white/50 text-[1.5rem]">👤 基本資料 </h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className={STYLE.profile_user_data}>
          <ProfileUserData
            title="姓名"
            userData={user.name.toLocaleUpperCase()}
          />
          {user.role === "member" ? null : (
            <ProfileUserData title="Staff ID" userData={user.staff_id} />
          )}

          <ProfileUserData title="Email" userData={user.email} />

          <ProfileUserData title="Role" userData={user.role} />

          <ProfileUserData title="Token" userData={user.token} />
        </div>
        <ProfileOperate />
      </div>
    </div>
  );
};

export default Profile;
{
}
