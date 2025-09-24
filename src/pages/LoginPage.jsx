import React, { useRef, useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { motion, easeIn } from "framer-motion";
import TestAccount from "../components/TestAccount";
import Register from "./Register/Register";

const STYLE = {
  container: `login-page flex h-full w-full flex-col items-center gap-20 rounded-md p-4 text-white lg:p-10 xl:flex-row xl:gap-0`,
};
const LoginPage = () => {
  const [isSide, setIsSide] = useState("");
  const registerRef = useRef(null);
  const handleSideChange = (side) => {
    setIsSide(side);
  };

  const handleScrolltoRegister = () => {
    if (registerRef.current) {
      registerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className={STYLE.container}
    >
      <div
        className={`flex h-full w-full flex-1 flex-col items-center justify-start gap-4 transition-all duration-500 lg:p-8 xl:border-r ${isSide === "right" ? "flex-2" : "flex-1 bg-transparent brightness-60"}`}
        onMouseEnter={() => handleSideChange("right")}
      >
        <h3 className="border-b p-2 text-5xl">登入</h3>
        <LoginForm handleScrolltoRegister={handleScrolltoRegister} />
      </div>

      <div
        ref={registerRef}
        className={`flex h-full w-full flex-1 flex-col items-center justify-start gap-4 transition-all duration-500 lg:p-8 xl:border-l ${isSide === "left" ? "flex-2" : "flex-1 bg-transparent brightness-60"}`}
        onMouseEnter={() => handleSideChange("left")}
      >
        <h3 className="border-b p-2 text-5xl">註冊</h3>

        <Register />
      </div>

      {/* <TestAccount account={account} /> */}
    </motion.section>
  );
};

export default LoginPage;
