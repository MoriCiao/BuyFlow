import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { motion, easeIn } from "framer-motion";
import TestAccount from "../components/TestAccount";

const STYLE = {
  container: `login-page flex h-full w-full flex-col items-center rounded-md p-10 text-white`,
};
const LoginPage = () => {
  const [account, setAccount] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className={STYLE.container}
    >
      <LoginForm />

      {/* <TestAccount account={account} /> */}
    </motion.section>
  );
};

export default LoginPage;
