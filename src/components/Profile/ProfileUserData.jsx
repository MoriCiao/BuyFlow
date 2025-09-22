import React from "react";

const STYLE = {
  profile_user_data: `profile-user-data flex w-full justify-between border-b border-white/50 py-2`,
};

const ProfileUserData = ({ title, userData }) => (
  <div className={STYLE.profile_user_data}>
    <p>{title}：</p>
    <p>{userData}</p>
  </div>
);

export default ProfileUserData;
