import { useNavigate } from "react-router-dom";
import { loginout } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import SearchBar from "./SearchBar";
const HeaderSlide = ({ isOpen, isAuthenticated, user, handleToggle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className={` ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-60 opacity-0"} fixed top-0 left-0 z-98 block h-screen min-w-60 bg-black/50 py-20 transition duration-500 md:py-30 lg:hidden`}
    >
      <div className="px-4">
        <SearchBar />
      </div>

      <ul className="mt-4 flex w-full flex-col items-center gap-4 text-[#e8eddf]">
        {/* ----------登入邏輯---------- */}
        {!isAuthenticated ? (
          <li className="w-full px-4">
            <Button
              label="Login"
              onClick={() => {
                navigate("/login");
                handleToggle();
              }}
            />
          </li>
        ) : (
          <>
            <li className="w-full px-4">
              <p className="w-full text-center text-xl">Hi! {user.name}</p>
            </li>
            <li className="w-full px-4">
              {(user.role === "admin" || user.role === "staff") && (
                <Button
                  label="DashBoard"
                  onClick={() => {
                    navigate("/dashboard");
                    handleToggle();
                  }}
                />
              )}
            </li>
            <li className="w-full px-4">
              <Button
                label="Logout"
                onClick={() => {
                  dispatch(loginout());
                  navigate("/");
                  handleToggle();
                }}
              />
            </li>
          </>
        )}
        <>
          <li className="w-full px-4">
            <Button
              label="Member"
              onClick={() => {
                navigate("/menber");
                handleToggle();
              }}
            />
          </li>
          <li className="w-full px-4">
            <Button
              label="Cart"
              onClick={() => {
                navigate("/cart");
                handleToggle();
              }}
            />
          </li>

          {!isAuthenticated && (
            <li className="w-full px-4">
              <Button
                label="Register"
                onClick={() => {
                  navigate("/register");
                  handleToggle();
                }}
              />
            </li>
          )}
        </>
      </ul>
    </div>
  );
};

export default HeaderSlide;
