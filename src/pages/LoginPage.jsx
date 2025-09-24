import React, { useEffect, useRef, useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { motion, easeIn } from "framer-motion";
import TestAccount from "../components/TestAccount";
import Register from "./Register/Register";

const STYLE = {
  login_page_container: `login-page-container flex h-full w-full flex-col items-center gap-20 rounded-md p-4 text-white lg:p-10 xl:flex-row xl:gap-0`,

  login_side: `login-side flex h-full w-full flex-1 flex-col items-center justify-start gap-4 transition-all duration-500 lg:p-8`,
};
const LoginPage = () => {
  const [isSide, setIsSide] = useState("");
  const registerRef = useRef(null);
  const handleSideChange = (side) => {
    setIsSide(side);
  };

  const handleScrolltoRegister = () => {
    if (registerRef.current) {
      setIsSide("right");
      registerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSide("left");
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className={STYLE.login_page_container}
    >
      <div
        className={`${STYLE.login_side} ${isSide === "left" ? "flex-2" : "flex-1 bg-transparent brightness-30"}`}
        onMouseEnter={() => handleSideChange("left")}
      >
        <h3 className="border-b p-2 text-5xl">登入</h3>
        <LoginForm handleScrolltoRegister={handleScrolltoRegister} />
      </div>

      <div
        ref={registerRef}
        className={`${STYLE.login_side} ${isSide === "right" ? "flex-2" : "flex-1 bg-transparent brightness-30"}`}
        onMouseEnter={() => handleSideChange("right")}
      >
        <h3 className="border-b p-2 text-5xl">註冊</h3>
        <Register />
      </div>

      {/* <TestAccount account={account} /> */}
    </motion.section>
  );
};

export default LoginPage;
