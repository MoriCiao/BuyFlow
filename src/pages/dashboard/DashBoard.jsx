import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";

const DashBoard = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section className="dashboard relative flex h-full min-h-[90vh] w-full flex-col gap-4 rounded-md bg-zinc-800 p-8 lg:flex-row">
      {/* Dashboard Nav */}
      <nav className="dashboard-nav flex flex-col lg:flex-1">
        <ul className="flex w-full flex-wrap gap-4 lg:flex-col lg:justify-start">
          <li>
            <Button
              label="Staff List"
              size="lg"
              onClick={() => navigate("stafflist")}
            />
          </li>
          <li>
            {user?.role === "admin" ? (
              <Button
                label="Admin Profile"
                size="lg"
                onClick={() => navigate("admin")}
              />
            ) : (
              <Button
                label="Staff Profile"
                size="lg"
                onClick={() => navigate("staff")}
              />
            )}
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

      {/* Dashboard Container */}
      <div className="dashboard-container flex h-full w-full flex-4 overflow-auto text-white">
        {location.pathname === "/dashboard" ? (
          <div className="dashboard-bg relative h-full w-full">
            <img
              draggable="false"
              src="/BuyFlow/dashboard-text.svg"
              alt="dashboard-text"
              className="objcet-cover absolute left-1/2 z-10 w-180 -translate-x-1/2 rotate-[-20deg] opacity-80 select-none sm:top-25 md:top-45 xl:top-50"
            />
            <img
              draggable="false"
              src="/BuyFlow/dashboard-bg.svg"
              alt="dashboard-bg"
              className="objcet-cover m-auto opacity-30 select-none"
            />
          </div>
        ) : null}

        <Outlet />
      </div>
    </section>
  );
};

export default DashBoard;
