import { useState } from "react";
import { loginout } from "../features/user/userSlice";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const HeaderIcon = ({ isOpen, handleToggle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section className="header-icon sm:fixed -translate-x-5 sm:top-0 sm:left-5 text-white z-99 xl:hidden w-auto">
      {/* Menu Icon */}
      <button
        onClick={handleToggle}
        className="flex translate-x-5 translate-y-2 "
      >
        <div
          className={`flex flex-col gap-1 p-2 w-8 h-8 border-1 border-[#e8eddf] rounded-full items-center justify-center cursor-pointer transition duration-500${
            isOpen ? " border-2 border-yellow-500/50" : ""
          }`}
        >
          <hr
            className={`border rounded-full w-4 h-[0.1rem] transition duration-500 ${
              isOpen
                ? "text-yellow-500/50 bg-yellow-500/50"
                : "text-[#e8eddf] bg-[#e8eddf]"
            } `}
          />
          <hr
            className={`border rounded-full w-4 h-[0.1rem] transition duration-500 ${
              isOpen
                ? "text-yellow-500/50 bg-yellow-500/50"
                : "text-[#e8eddf] bg-[#e8eddf]"
            } `}
          />
          <hr
            className={`border rounded-full w-4 h-[0.1rem] transition duration-500 ${
              isOpen
                ? "text-yellow-500/50 bg-yellow-500/50"
                : "text-[#e8eddf] bg-[#e8eddf]"
            } `}
          />
        </div>
      </button>
    </section>
  );
};

export default HeaderIcon;
