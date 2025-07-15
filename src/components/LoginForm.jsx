import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const mockUserAPI = ({ email, password }) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@example.com" && password === "admin123") {
        resolve({
          name: "Admin",
          email: email,
          role: "admin",
          token: "adminToken",
        });
      } else if (email === "user@example.com" && password === "user123") {
        resolve({
          name: "User",
          email: email,
          role: "user",
          token: "userToken",
        });
      } else {
        reject("帳號密碼錯誤...");
      }
    }, 500);
  });
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = ({ email, password }) => {
      if (email === "admin@example.com" && password === "admin123") {
        return {
          name: "Admin",
          email: email,
          role: "admin",
          token: "adminToken",
        };
      } else if (email === "user@example.com" && password === "user123") {
        return {
          name: "User",
          email: email,
          role: "user",
          token: "userToken",
        };
      }
    };

    const loginUser = userData({ email, password });
    console.log(loginUser);

    dispatch(login(loginUser));
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="login-from flex flex-col gap-6 items-center p-8 mt-2 border"
    >
      <div className="login-item">
        <label htmlFor="email" className="login-label relative  select-none">
          <input
            // className="min-w-[300px] border indent-[0.5rem] h-[2rem] rounded-sm"
            className="peer min-w-[300px] border-2 indent-[0.5rem] h-[2.5rem] rounded-sm "
            id="email"
            name="email"
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="absolute left-3 -top-7 font-bold transition-all duration-500 text-black px-1 bg-[#e8eddf] peer-placeholder-shown:text-base peer-placeholder-shown:top-[-0.1rem] peer-placeholder-shown:text-black/50  ">
            Email
          </span>
        </label>
      </div>
      <div className="login-item">
        <label htmlFor="password" className="login-label relative select-none">
          <input
            className="peer min-w-[300px] border-2 indent-[0.5rem] h-[2.5rem] rounded-sm"
            id="password"
            name="password"
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="absolute left-3 -top-7 font-bold transition-all duration-500 text-black px-1 bg-[#e8eddf] peer-placeholder-shown:text-base peer-placeholder-shown:top-[-0.1rem] peer-placeholder-shown:text-black/50">
            Password
          </span>
        </label>
      </div>
      <button type="submit" className="login-svg px-2 cursor-pointer">
        <svg>
          <rect></rect>
        </svg>
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
