import React from "react";
import LoginForm from "../components/LoginForm";
import { motion, AnimatePresence, easeIn } from "framer-motion";
const img = "./login.svg";
const LoginPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className="login-page grid grid-cols-2 items-center justify-center w-full h-auto p-4"
    >
      <div className="px-12 flex items-center justify-center">
        <img src={img} alt="login" />
      </div>
      <div className="px-12 flex flex-col items-center justify-center">
        <h1 className="text-[2rem]">Log in</h1>
        <LoginForm />
      </div>
    </motion.section>
  );
};

export default LoginPage;
