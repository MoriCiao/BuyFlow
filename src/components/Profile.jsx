import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";
import { loginout } from "../features/user/userSlice";
const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={"profile flex w-full flex-col gap-4 bg-zinc-600 p-4"}>
      <h1 className="border-b border-white/50 text-[1.5rem]">👤 基本資料 </h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col rounded-md bg-zinc-800 p-4 shadow-lg">
          <div className="user-detail w-full md:text-[1.25rem]">
            <div className="flex w-full justify-between border-b border-white/50 py-2">
              <p>姓名：</p>
              <p>{user.name.toLocaleUpperCase()}</p>
            </div>
            {user.role === "member" ? null : (
              <div className="flex w-full justify-between border-b border-white/50 py-2">
                <p>ID</p>
                <p>{user.staff_id}</p>
              </div>
            )}
            <div className="flex w-full justify-between border-b border-white/50 py-2">
              <p>Email：</p>
              <p>{user.email}</p>
            </div>
            <div className="flex w-full justify-between border-b border-white/50 py-2">
              <p>Role：</p>
              <p>{user.role}</p>
            </div>
            <div className="flex w-full justify-between border-b border-white/50 py-2">
              <p>Token：</p>
              <p>{user.token}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-4 rounded-md bg-zinc-800 p-4 shadow-lg sm:flex-row lg:flex-col">
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
            onClick={() => dispatch(loginout())}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
{
}
