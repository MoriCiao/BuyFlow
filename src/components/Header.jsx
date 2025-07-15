import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginout } from "../features/user/userSlice";
import { useNavigate, Link } from "react-router-dom";

const HeaderHr = () => {
  return <hr className="h-full border" />;
};

const Header = () => {
  const navigate = useNavigate();

  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <section className="header w-full min-h-[10vh] flex flex-col justify-center items-center ">
      <div className="w-full flex justify-center bg-[#333533]">
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
                <Link to={"/login"}>Login / Sign up</Link>
              </li>
            ) : (
              <>
                <span>Hi! {user.name || "旅客"}</span>
                <button
                  className="cursor-pointer"
                  type="button"
                  onClick={() => dispatch(loginout())}
                >
                  Logout
                </button>
              </>
            )}

            <HeaderHr />
            <li>
              <Link to="/profile">Member Center</Link>
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

      <div className="header-left w-[80%] flex gap-8 justify-between py-2">
        <img
          src="./logo.svg"
          alt="LOGO"
          className="col-start-1 w-[300px] h-[100px] select-none "
        />

        <div className="serach max-w-[40rem] w-full h-full p-4">
          <div className=" flex justify-center items-center rounded-full border overflow-hidden my-2">
            <input
              type="text"
              placeholder="搜尋商品..."
              className="search-input w-full h-[2rem] indent-[1rem] "
            />
            <button
              type="button"
              className="select-none cursor-pointer flex items-center h-[2rem] px-4 bg-[#333533] text-white"
            >
              <span>🔍</span>
              Search
            </button>
          </div>
        </div>
        <img
          src="./logo.svg"
          alt="LOGO"
          className="col-start-1 w-[300px] h-[100px] select-none "
        />
      </div>
    </section>
  );
};

export default Header;
