import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";

const DashBoard = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  const STYLE = {
    dashboard: `dashboard relative flex h-full min-h-[90vh] w-full flex-col gap-4 rounded-md bg-zinc-800 p-8 lg:flex-row`,

    dashboard_ul: `flex w-full flex-wrap gap-4 lg:flex-col lg:justify-start`,

    dashboard_container: `dashboard-container flex h-auto w-full flex-4 overflow-auto text-white`,

    dashboard_bg_container: `dashboard-bg-container flex h-full w-full items-center`,

    dashboard_bg: `dashboard-bg objcet-cover w-full opacity-30 select-none`,
  };

  const DashboardNav = () => (
    <nav className="dashboard-nav flex flex-col lg:flex-1">
      <ul className={STYLE.dashboard_ul}>
        <li>
          <Button
            label="Staff List"
            size="lg"
            onClick={() => navigate("stafflist")}
          />
        </li>
        <li>
          {/* {user?.role === "admin" ? (
            <Button
              label="Admin Profile"
              size="lg"
              onClick={() => navigate("admin")}
            />
          ) : ( */}
          <Button
            label="Staff Profile"
            size="lg"
            onClick={() => navigate("staff")}
          />
          {/* )} */}
        </li>
        <li>
          <Button
            label="Products List"
            size="lg"
            onClick={() => navigate("productslist")}
          />
        </li>
        <li>
          <Button
            label="Menber List"
            size="lg"
            onClick={() => navigate("menberlist")}
          />
        </li>
        <li>
          <Button
            label="Order List"
            size="lg"
            onClick={() => navigate("orderlist")}
          />
        </li>
      </ul>
    </nav>
  );

  const DashBoardBg = () => (
    <div className={STYLE.dashboard_bg_container}>
      <img
        draggable="false"
        src="/BuyFlow/dashboard-bg.svg"
        alt="dashboard-bg"
        className={STYLE.dashboard_bg}
      />
    </div>
  );
  return (
    <section className={STYLE.dashboard}>
      {/* Dashboard Nav */}
      <DashboardNav />

      {/* Dashboard Container */}
      <div className={STYLE.dashboard_container}>
        {location.pathname === "/dashboard" ? <DashBoardBg /> : null}

        <Outlet />
      </div>
    </section>
  );
};

export default DashBoard;
