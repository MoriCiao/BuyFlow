import { useNavigate } from "react-router-dom";
import { loginout } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import SearchBar from "./SearchBar";

const STYLE = {
  header_slide_container: `header-slide-container fixed top-0 left-0 z-49 block h-screen min-w-60 bg-black/50 py-20 transition duration-500 md:py-30 lg:hidden`,

  header_slide_list: `mt-4 flex w-full flex-col items-center gap-4 text-white`,
};

const HeaderSlide = ({ isOpen, isAuthenticated, user, handleToggle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className={`${STYLE.header_slide_container} ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-60 opacity-0"}`}
    >
      <div className="px-4">
        <SearchBar />
      </div>

      <ul className={STYLE.header_slide_list}>
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
              <Button label={`Hi! ${user.name}`} variant="info" />
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
          {isAuthenticated && (
            <li className="w-full px-4">
              <Button
                label="Logout"
                variant="danger"
                onClick={() => {
                  dispatch(loginout());
                  navigate("/");
                  handleToggle();
                }}
              />
            </li>
          )}
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
