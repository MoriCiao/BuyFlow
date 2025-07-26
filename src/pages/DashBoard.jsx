import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const motion_btn = {
  initial: { backgroundColor: "rgba(51, 53, 51, 0)", color: "#333533" },
  whileHover: {
    backgroundColor: "rgba(51, 53, 51, 1)",
    color: "#FFD700",
    borderColor: "rgba(51, 53, 51, 0)",
  },
  transition: { duration: 0.5 },
};

const btn_style =
  "w-full border-2 uppercase tracking-wider font-bold text-center py-4 cursor-pointer";

const DashBoard = () => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  return (
    <section className="dashboard relative w-full h-full xl:grid xl:grid-cols-4 sm:flex sm:flex-col gap-4 items-start justify-start ">
      {/* Dashboard Nav */}
      <nav className="dashboard-nav xl:flex xl:flex-col xl:pt-12 sm:flex sm:flex-col sm:w-full gap-6 xl:col-start-1 xl:col-span-1 justify-start  ">
        <Link to="stafflist" className="text-[1.25rem] bg-[#e8eddf]/70">
          <motion.button {...motion_btn} className={btn_style}>
            Staff List
          </motion.button>
        </Link>
        {user?.role === "admin" ? (
          <Link to="admin" className="text-[1.25rem] bg-[#e8eddf]/70">
            <motion.button {...motion_btn} className={btn_style}>
              Admin Profile
            </motion.button>
          </Link>
        ) : (
          <Link to="staff" className="text-[1.25rem] bg-[#e8eddf]/70">
            <motion.button {...motion_btn} className={btn_style}>
              Staff Profile
            </motion.button>
          </Link>
        )}

        <Link to="productslist" className="text-[1.25rem] bg-[#e8eddf]/70">
          <motion.button {...motion_btn} className={btn_style}>
            Products List
          </motion.button>
        </Link>
        <Link to="menberlist" className="text-[1.25rem] bg-[#e8eddf]/70">
          <motion.button {...motion_btn} className={btn_style}>
            Menber
          </motion.button>
        </Link>
        <Link to="orderlist" className="text-[1.25rem] bg-[#e8eddf]/70">
          <motion.button {...motion_btn} className={btn_style}>
            Order List
          </motion.button>
        </Link>
      </nav>
      {/* Dashboard Container */}

      <div className="dashboard-container xl:col-start-2 xl:col-span-3 w-full flex px-4 overflow-auto pb-8">
        {location.pathname === "/dashboard" ? (
          <div className="dashboard-bg relative w-full h-full ">
            <img
              draggable="false"
              src="/BuyFlow/dashboard-text.svg"
              alt="dashboard-text"
              className="select-none objcet-cover opacity-80 absolute z-10 w-180  xl:top-50 md:top-45 sm:top-25 left-1/2 -translate-x-1/2 rotate-[-20deg]"
            />
            <img
              draggable="false"
              src="/BuyFlow/dashboard-bg.svg"
              alt="dashboard-bg"
              className="select-none objcet-cover opacity-30 m-auto"
            />
          </div>
        ) : null}

        <Outlet />
      </div>
    </section>
  );
};

export default DashBoard;
