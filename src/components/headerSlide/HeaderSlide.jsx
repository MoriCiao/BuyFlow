import "./_HeaderSlide.scss";
import { HeaderBtn, HeaderHr_sm, HeaderLink } from "../HeaderItem";
const HeaderSlide = ({ isOpen, isAuthenticated, user, handleToggle }) => {
  return (
    <div
      className={`headerSlide ${
        isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "-translate-x-60 opacity-0 pointer-events-none"
      }`}
    >
      <ol>
        {!isAuthenticated ? (
          <>
            <li onClick={handleToggle}>
              <HeaderLink text="Login" link="/login" />
              <HeaderHr_sm />
            </li>
          </>
        ) : (
          <>
            <span className="">
              Hi! {user.name}
              <HeaderHr_sm />
            </span>
            {(user.role === "admin" || user.role === "staff") && (
              <li>
                <HeaderLink text="DashBoard" link="/dashboard" />
                <HeaderHr_sm />
              </li>
            )}
            <li>
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
            </li>
          </>
        )}
        <>
          <li
            className="hover:text-yellow-500 transtion duration-500"
            onClick={handleToggle}
          >
            <HeaderLink text="Member Center" link="/menber" />
            <HeaderHr_sm />
          </li>

          <li
            className="hover:text-yellow-500 transtion duration-500"
            onClick={handleToggle}
          >
            <HeaderLink text="Cart" link="/cart" />
            <HeaderHr_sm />
          </li>

          {!isAuthenticated && (
            <>
              <li
                className="hover:text-yellow-500 transtion duration-500"
                onClick={handleToggle}
              >
                <HeaderLink text="Register" link="/register" />
                <HeaderHr_sm />
              </li>
            </>
          )}
        </>
      </ol>
    </div>
  );
};

export default HeaderSlide;
