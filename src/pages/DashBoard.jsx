import React from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

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
  return (
    <section className="dashboard relative w-full h-full grid grid-cols-4 gap-4 items-center justify-center">
      <div className="flex flex-col gap-4 col-start-1 col-span-1">
        <Link to="stafflist" className="">
          <motion.button {...motion_btn} className={btn_style}>
            Staff List
          </motion.button>
        </Link>
        <Link to="staff" className="">
          <motion.button {...motion_btn} className={btn_style}>
            Staff Profile
          </motion.button>
        </Link>
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
      </div>
      <div className="col-start-2 col-span-3 w-full h-full border flex p-4 overflow-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default DashBoard;
