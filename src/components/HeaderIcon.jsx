import { useState } from "react";
import { loginout } from "../features/user/userSlice";
import { HeaderBtn, HeaderLink, HeaderHr_sm } from "./HeaderItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const HeaderIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const { user, isAuthenticated } = useSelector((state) => state.user);

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

      <ol
        className={`${
          isOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-60 opacity-0 pointer-events-none"
        } flex flex-col gap-2 justify-start text-[1.5rem] py-5 items-center cursor-pointer bg-[#333533]/50 min-w-50 min-h-[15rem] -translate-y-2 h-full mt-5 transition duration-500`}
      >
        {!isAuthenticated ? (
          <>
            <li
              className="hover:text-yellow-500 transtion duration-500"
              onClick={handleToggle}
            >
              <HeaderLink text="Login" link="/login" />
            </li>
            <HeaderHr_sm />
          </>
        ) : (
          <>
            <span className="hover:text-yellow-500 hover:font-bold transtion duration-500">
              Hi! {user.name}
            </span>
            <HeaderHr_sm />
            {(user.role === "admin" || user.role === "staff") && (
              <>
                <HeaderLink text="DashBoard" link="/dashboard" />
                <HeaderHr_sm />
              </>
            )}
            <HeaderBtn
              text="Logout"
              variant="Logout"
              className={
                "px-2 hover:text-yellow-500 hover:font-bold transtion duration-500"
              }
              onClick={() => {
                dispatch(loginout());
                navigate("/");
              }}
            />
            <HeaderHr_sm />
          </>
        )}
        <>
          <li
            className="hover:text-yellow-500 transtion duration-500"
            onClick={handleToggle}
          >
            <HeaderLink text="Member Center" link="/menber" />
          </li>
          <HeaderHr_sm />

          <li
            className="hover:text-yellow-500 transtion duration-500"
            onClick={handleToggle}
          >
            <HeaderLink text="Cart" link="/cart" />
          </li>
          <HeaderHr_sm />

          {!isAuthenticated && (
            <>
              <li
                className="hover:text-yellow-500 transtion duration-500"
                onClick={handleToggle}
              >
                <HeaderLink text="Register" link="/register" />
              </li>
              <HeaderHr_sm />
            </>
          )}
        </>
      </ol>
    </section>
  );
};

export default HeaderIcon;
