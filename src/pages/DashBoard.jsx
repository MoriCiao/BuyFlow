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

  return (
    <section className="dashboard relative w-full h-full grid grid-cols-4 gap-4 items-center justify-center">
      {/* Dashboard Nav */}
      <nav className="dashboard-nav flex flex-col gap-4 col-start-1 col-span-1">
        <Link to="stafflist" className="">
          <motion.button {...motion_btn} className={btn_style}>
            Staff List
          </motion.button>
        </Link>
        {user.role === "admin" ? (
          <Link to="admin" className="">
            <motion.button {...motion_btn} className={btn_style}>
              Admin Profile
            </motion.button>
          </Link>
        ) : (
          <Link to="staff" className="">
            <motion.button {...motion_btn} className={btn_style}>
              Staff Profile
            </motion.button>
          </Link>
        )}

        <Link
          to="productslist"
          className=""
          onClick={() => console.log("Click")}
        >
          <motion.button {...motion_btn} className={btn_style}>
            Products List
          </motion.button>
        </Link>
        <Link to="menberlist" className="" onClick={() => console.log("Click")}>
          <motion.button {...motion_btn} className={btn_style}>
            Menber
          </motion.button>
        </Link>
      </nav>
      {/* Dashboard Container */}

      <div className="dashboard-container col-start-2 col-span-3 w-full h-full flex p-4 overflow-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default DashBoard;
