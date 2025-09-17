import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { loginout } from "../features/user/userSlice";
import { isSearch } from "../features/ui/uiSlice";
import { useNavigate, Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { HeaderHr, HeaderBtn, HeaderLink } from "./HeaderItem";
import HeaderIcon from "./headerIcon/HeaderIcon";
import HeaderSlide from "./headerSlide/HeaderSlide";

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
      className={`header w-full ${
        isVisible ? "min-h-[5vh]" : "min-h-[10vh]"
      } flex flex-col items-center justify-center`}
    >
      <div className="fixed top-0 left-0 z-99 flex w-full justify-center bg-gradient-to-b from-[#333533] via-[#474747] to-[#333533] shadow-xl">
        <nav className="nav flex h-full w-[80%] flex-col items-center justify-center py-2 text-[#e8eddf] select-none md:flex-row xl:justify-between">
          <HeaderBtn
            text="HomePage"
            variant="homepage"
            onClick={() => navigate("/")}
            className={""}
          />

          <ol className="flex hidden cursor-pointer items-center justify-end gap-4 sm:pt-4 md:pt-0 xl:block xl:flex xl:pt-0">
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
                <HeaderLink text="Member" link="/menber" />
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
      {/* 1024px 以下顯示 */}
      <HeaderIcon isOpen={isOpen} handleToggle={handleToggle} />
      <HeaderSlide
        isOpen={isOpen}
        isAuthenticated={isAuthenticated}
        user={user}
        handleToggle={handleToggle}
      />

      {isVisible && (
        <div
          className={`header mt-4 flex min-h-[100px] w-[80%] items-center justify-between gap-8 pt-12 pb-8`}
        >
          <SearchBar />
        </div>
      )}
    </motion.section>
  );
};

export default Header;
