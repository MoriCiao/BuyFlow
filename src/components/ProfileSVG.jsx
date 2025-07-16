import React from "react";

const ProfileSVG = () => {
  return (
    <div className="user-photo relative flex items-center justify-center border w-full h-[200px]">
      <img
        className="w-[150px]"
        src="/BuyFlow/profile_photo.svg"
        alt="profile_photo"
      />
    </div>
  );
};

export default ProfileSVG;
