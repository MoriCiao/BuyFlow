import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { motion, easeIn } from "framer-motion";
import TestAccount from "../components/TestAccount";
const img = "/BuyFlow/login.svg";
const LoginPage = () => {
  const [account, setAccount] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className="login-page h-auto w-full items-center justify-center gap-4 overflow-hidden p-4 sm:grid-cols-1 md:grid md:grid-cols-2 xl:pb-20"
    >
      <div className="absolute top-20 left-0 flex w-full items-center justify-center px-0 opacity-50 xl:relative xl:opacity-100">
        <img src={img} alt="login" draggable="false" className="w-full" />
      </div>
      <div className="relative flex flex-col items-center justify-center sm:px-6 sm:pt-20 md:col-span-2 md:px-12 md:pt-0 xl:col-span-1 xl:items-end">
        <LoginForm />
      </div>

      <button
        className="absolute top-0 left-0 z-100 cursor-pointer rounded-full border bg-red-500/20 px-4 font-bold text-red-500 hover:bg-red-500 hover:text-white xl:left-1/2 xl:-translate-x-1/2"
        onClick={() => setAccount((prev) => !prev)}
      >
        Test Account
      </button>
      <TestAccount account={account} />
    </motion.section>
  );
};

export default LoginPage;
