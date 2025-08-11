import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { motion, easeIn } from "framer-motion";
const img = "/BuyFlow/login.svg";
const LoginPage = () => {
  const [account, setAccount] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className="login-page md:grid md:grid-cols-2 sm:grid-cols-1  gap-4 items-center justify-center w-full h-auto p-4 xl:pb-20 overflow-hidden border"
    >
      <div className="px-0 flex items-center justify-center w-full xl:relative xl:opacity-100 sm:absolute sm:top-20 sm:left-0 sm:opacity-50">
        <img src={img} alt="login" draggable="false" className="w-full" />
      </div>
      <div className="md:px-12 sm:px-6 flex flex-col xl:col-span-1  md:col-span-2 xl:items-end sm:items-center justify-center md:pt-0 sm:pt-20">
        <LoginForm />
      </div>

      <button
        className="absolute top-4 left-4 font-bold border rounded-full px-4 hover:bg-red-500 hover:text-white cursor-pointer"
        onClick={() => setAccount((prev) => !prev)}
      >
        Account
      </button>
      <div
        className={`absolute top-12 left-4  bg-black/50 text-white text-[1.25rem] flex flex-col items-start transition duration-500 ${
          account ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className=" py-2 px-4 flex gap-4">
          <label htmlFor="">會員帳號</label>
          <div>
            <p>user@example.com</p>
            <p>user123</p>
          </div>
        </div>
        <hr className="opacity-50 w-[95%] mx-auto" />
        <div className=" py-2 px-4 flex gap-4">
          <label htmlFor="">行政帳號</label>
          <div>
            <p>admin@example.com</p>
            <p>admin123</p>
          </div>
        </div>
        <hr className="opacity-50 w-[95%] mx-auto" />
        <div className=" py-2 px-4 flex gap-4">
          <label htmlFor="">員工帳號</label>
          <div>
            <p>staff@example.com</p>
            <p>staff321</p>
          </div>
        </div>
        <hr className="opacity-50 w-[95%] mx-auto" />
      </div>
    </motion.section>
  );
};

export default LoginPage;
