import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
import Button from "../Button/Button";

const STYLE = {
  profile_user_operate: `profile-user-operate flex flex-1 flex-col justify-between gap-4 rounded-md bg-zinc-800 p-4 shadow-lg sm:flex-row lg:flex-col`,
};

const ProfileOperate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={STYLE.profile_user_operate}>
      {/* 導向訂單追蹤 */}
      <Button
        label="🚚 Tracking"
        size="lg"
        variant="success"
        onClick={() => {
          navigate("/menber/ordertracking");
        }}
      />
      <Button
        label="🛒 Cart"
        size="lg"
        className=""
        onClick={() => {
          navigate("/cart");
        }}
      />
      <Button
        label="Logout"
        variant="danger"
        size="lg"
        onClick={() => dispatch(logout())}
      />
    </div>
  );
};

export default ProfileOperate;
