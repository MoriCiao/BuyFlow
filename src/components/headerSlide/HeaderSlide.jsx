import "./_HeaderSlide.scss";
import { HeaderBtn, HeaderHr_sm, HeaderLink } from "../HeaderItem";
const HeaderSlide = ({ isOpen, isAuthenticated, user, handleToggle }) => {
  return (
    <div
      className={`headerSlide ${
        isOpen
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none -translate-x-60 opacity-0"
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
                  "transtion px-2 duration-500 hover:font-bold hover:text-yellow-500"
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
            className="transtion duration-500 hover:text-yellow-500"
            onClick={handleToggle}
          >
            <HeaderLink text="Member Center" link="/menber" />
            <HeaderHr_sm />
          </li>

          <li
            className="transtion duration-500 hover:text-yellow-500"
            onClick={handleToggle}
          >
            <HeaderLink text="Cart" link="/cart" />
            <HeaderHr_sm />
          </li>

          {!isAuthenticated && (
            <>
              <li
                className="transtion duration-500 hover:text-yellow-500"
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
