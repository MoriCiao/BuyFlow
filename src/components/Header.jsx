import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginout } from "../features/user/userSlice";
import { isSearch } from "../features/ui/uiSlice";
import { useNavigate, Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
const HeaderHr = () => {
  return <hr className="h-[30px] border" />;
};

const btn_style = "h-[30px]  block text-center px-2 py-1";

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
    <section
      className={`header w-full ${
        isVisible ? "min-h-[5vh]" : "min-h-[10vh]"
      } flex flex-col justify-center items-center `}
    >
      <div className="w-full fixed z-99 top-0 left-0 flex justify-center bg-[#333533]">
        <nav className="nav xl:flex xl:flex-row md:flex md:flex-row  justify-between sm:flex-col w-[80%] h-full py-2  text-[#e8eddf] select-none">
          <div className="home-svg cursor-pointer">
            <svg>
              <rect></rect>
            </svg>
            <button
              className="cursor-pointer"
              type="button"
              onClick={() => {
                navigate("/");
              }}
            >
              HomePage
            </button>
          </div>
          <ol className="flex gap-4 justify-end items-center cursor-pointer xl:pt-0 md:pt-0 sm:pt-4">
            {/* ----------登入邏輯---------- */}
            {!isAuthenticated ? (
              <li>
                <Link to={"/login"} className={btn_style}>
                  Login
                </Link>
              </li>
            ) : (
              <>
                <span>Hi! {user.name}</span>
                {user.role === "user" && <Link to={"/menber"}>Profile</Link>}
                {(user.role === "admin" || user.role === "staff") && (
                  <Link to={"/dashboard"} className={btn_style}>
                    DashBoard
                  </Link>
                )}
                <button
                  className="cursor-pointer  px-2"
                  type="button"
                  onClick={() => dispatch(loginout(), navigate("/"))}
                >
                  Logout
                </button>
              </>
            )}
            <>
              <HeaderHr />
              <li>
                <Link to="/menber" className={btn_style}>
                  Member Center
                </Link>
              </li>
              <HeaderHr />
              <li>
                <Link to="/cart" className={btn_style}>
                  Cart
                </Link>
              </li>

              {!isAuthenticated && (
                <>
                  <HeaderHr />
                  <li>
                    <Link to="/register" className={btn_style}>
                      Register
                    </Link>
                  </li>
                </>
              )}
            </>
          </ol>
        </nav>
      </div>
      {isVisible && (
        <div
          className={` header w-[80%] min-h-[100px] flex gap-8 justify-between items-center md:pt-12 sm:pt-30 pb-8 mt-4`}
        >
          <SearchBar />
        </div>
      )}
    </section>
  );
};

export default Header;
