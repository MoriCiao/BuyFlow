import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <section className="login-page flex flex-col items-center w-full h-auto p-4">
      <h1 className="text-[2rem]">Log in</h1>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
