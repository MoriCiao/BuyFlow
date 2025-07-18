import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginout } from "../features/user/userSlice";
import { useNavigate, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const HeaderHr = () => {
  return <hr className="h-full border" />;
};

const Header = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section className="header  w-full min-h-[10vh] flex flex-col justify-center items-center ">
      <div className="w-full fixed z-100 top-0 left-0 flex justify-center bg-[#333533]">
        <nav className="nav flex justify-between w-[80%] h-full py-2  text-[#e8eddf] select-none">
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
          <ol className="flex gap-4 justify-end items-center cursor-pointer">
            {/* ----------登入邏輯---------- */}
            {!isAuthenticated ? (
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            ) : (
              <>
                <span>Hi! {user.name}</span>
                {user.role === "user" && <Link to={"/menber"}>Profile</Link>}
                {user.role === "admin" && (
                  <Link to={"/dashboard"}>DashBoard</Link>
                )}
                <button
                  className="cursor-pointer border px-2"
                  type="button"
                  onClick={() => dispatch(loginout())}
                >
                  Logout
                </button>
              </>
            )}

            <HeaderHr />
            <li>
              <Link to="/menber">Member Center</Link>
            </li>
            <HeaderHr />
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <HeaderHr />
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ol>
        </nav>
      </div>

      <div className="header-left w-[80%] min-h-[100px] flex gap-8 justify-between items-center pt-12 pb-8 mt-4">
        <SearchBar />
      </div>
    </section>
  );
};

export default Header;
