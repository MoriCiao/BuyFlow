import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { loginout } from "../../features/user/userSlice";
import { isSearch } from "../../features/ui/uiSlice";
import { cleanCart } from "../../features/cart/cartSlice";
import { search } from "../../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import HeaderIcon from "./HeaderIcon";

const STYLE = {
  header_container: `header-container fixed top-0 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center rounded bg-white/20 px-6 shadow-xl backdrop-blur-sm md:mt-4 md:w-[80%]`,

  header_nav: `header-nav realtive flex h-full w-full flex-col items-center justify-center py-2 select-none md:flex-row xl:justify-between`,

  header_opreate: `header-operate hidden h-full items-center gap-4 text-white lg:flex`,
};

const HeaderPin = ({ handleToggle }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { isVisible } = useSelector((state) => state.ui);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [keyword, setKeyWord] = useState("");

  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      dispatch(isSearch(false));
    } else {
      dispatch(isSearch(true));
    }
  }, [location.pathname]);
  return (
    <div className={STYLE.header_container}>
      <nav className={STYLE.header_nav}>
        <HeaderIcon handleToggle={handleToggle} />
        <div>
          <Button label="HomePage" onClick={() => navigate("/")} />
        </div>
        <div className={STYLE.header_opreate}>
          <SearchBar />

          <ul className="items-center gap-4 text-white lg:flex">
            {/* ----------登入邏輯---------- */}
            {!isAuthenticated ? (
              <li>
                <Button label="Login" onClick={() => navigate("/login")} />
              </li>
            ) : (
              <>
                <li>
                  <p className="w-20">Hi! {user.name}</p>
                </li>
                <li>
                  {(user.role === "admin" || user.role === "staff") && (
                    <Button
                      label="DashBoard"
                      onClick={() => navigate("/dashboard")}
                    />
                  )}
                </li>
                <li>
                  <Button
                    label="Logout"
                    onClick={() => {
                      dispatch(loginout());
                      dispatch(cleanCart());
                      navigate("/");
                    }}
                  />
                </li>
              </>
            )}
            <>
              <li>
                <Button label="Member" onClick={() => navigate("/menber")} />
              </li>
              <li>
                <Button label="Cart" onClick={() => navigate("/cart")} />
              </li>

              {!isAuthenticated && (
                <>
                  <li>
                    <Button
                      label="Register"
                      onClick={() => navigate("/register")}
                    />
                  </li>
                </>
              )}
            </>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderPin;
