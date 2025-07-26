import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { loginout } from "../features/user/userSlice";
import { isSearch } from "../features/ui/uiSlice";
import { useNavigate, Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { HeaderHr, HeaderBtn, HeaderLink } from "./HeaderItem";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { isVisible } = useSelector((state) => state.ui);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

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
      <div className="w-full fixed z-99 top-0 left-0 flex justify-center bg-[#333533]">
        <nav className="nav xl:flex xl:flex-row md:flex md:flex-row xl:justify-between md:justify-center sm:flex-col w-[80%] h-full py-2  text-[#e8eddf] select-none">
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
      <HeaderIcon />
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
