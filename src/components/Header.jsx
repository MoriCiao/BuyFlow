import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { loginout } from "../features/user/userSlice";
import { isSearch } from "../features/ui/uiSlice";
import { useNavigate, Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { HeaderHr, HeaderBtn, HeaderLink, HeaderHr_sm } from "./HeaderItem";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { isVisible } = useSelector((state) => state.ui);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      dispatch(isSearch(false));
    } else {
      dispatch(isSearch(true));
    }
  }, [location.pathname]);

  return (
    <motion.section
      // whileHover={{ fontSize: "1.1rem" }}
      className={`header w-full ${
        isVisible ? "min-h-[5vh]" : "min-h-[10vh]"
      } flex flex-col justify-center items-center `}
    >
      <div className="w-full fixed z-99 top-0 left-0 flex justify-center bg-gradient-to-b from-[#333533] via-[#333533] to-[#333533]/80 shadow-xl">
        <nav className="nav xl:flex xl:flex-row md:flex md:flex-row xl:justify-between sm:justify-center sm:flex-col w-[80%] h-full py-2 text-[#e8eddf] select-none ">
          <HeaderBtn
            text="HomePage"
            variant="homepage"
            onClick={() => navigate("/")}
            className={""}
          />

          <ol className="flex gap-4 justify-end items-center cursor-pointer xl:pt-0 md:pt-0 sm:pt-4 xl:flex sm:hidden ">
            {/* ----------登入邏輯---------- */}
            {!isAuthenticated ? (
              <li>
                <HeaderLink text="Login" link="/login" />
              </li>
            ) : (
              <>
                <span>Hi! {user.name}</span>
                {(user.role === "admin" || user.role === "staff") && (
                  <HeaderLink text="DashBoard" link="/dashboard" />
                )}
                <HeaderBtn
                  text="Logout"
                  variant="Logout"
                  className={"px-2"}
                  onClick={() => {
                    dispatch(loginout());
                    navigate("/");
                  }}
                />
              </>
            )}
            <>
              <HeaderHr />
              <li>
                <HeaderLink text="Member Center" link="/menber" />
              </li>
              <HeaderHr />
              <li>
                <HeaderLink text="Cart" link="/cart" />
              </li>

              {!isAuthenticated && (
                <>
                  <HeaderHr />
                  <li>
                    <HeaderLink text="Register" link="/register" />
                  </li>
                </>
              )}
            </>
          </ol>
        </nav>
      </div>
      <HeaderIcon isOpen={isOpen} handleToggle={handleToggle} />
      <div
        className={`text-white absolute z-99 left-0 transition duration-500 top-8 ${
          isOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-60 opacity-0 pointer-events-none"
        }`}
      >
        <ol
          className={` flex flex-col gap-2 justify-start text-[1.5rem] py-5 items-center cursor-pointer bg-[#333533]/50 min-w-50 min-h-[15rem] -translate-y-2 h-full mt-5 `}
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
      </div>
      {isVisible && (
        <div
          className={` header w-[80%] min-h-[100px] flex gap-8 justify-between items-center md:pt-12 sm:pt-30 pb-8 mt-4`}
        >
          <SearchBar />
        </div>
      )}
    </motion.section>
  );
};

export default Header;
