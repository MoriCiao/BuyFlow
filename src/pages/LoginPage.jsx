import React from "react";
import LoginForm from "../components/LoginForm";
import { motion, easeIn } from "framer-motion";
const img = "/BuyFlow/login.svg";
const LoginPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className="login-page md:grid md:grid-cols-2 sm:grid-cols-1  gap-4 items-center justify-center w-full h-auto p-4 xl:pb-20 overflow-hidden"
    >
      <div className="px-0 flex items-center justify-center w-full xl:relative xl:opacity-100 sm:absolute sm:top-20 sm:left-0 sm:opacity-50">
        <img src={img} alt="login" draggable="false" className="w-full" />
      </div>
      <div className="md:px-12 sm:px-6 flex flex-col xl:col-span-1  md:col-span-2 xl:items-end sm:items-center justify-center md:pt-0 sm:pt-20">
        <LoginForm />
      </div>
    </motion.section>
  );
};

export default LoginPage;
