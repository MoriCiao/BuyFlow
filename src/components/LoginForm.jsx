import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { mockLoginAPI } from "../features/user/mockAuthAPI.js";
// 登入表單
const LoginForm = () => {
  // console.log("mockLoginAPI", mockLoginAPI);
  // input輸入的值存儲起來，供 userReducer使用
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await mockLoginAPI({ email, password });
      // 確認回傳資料沒有password
      console.log("目前 userData :", userData);
      dispatch(login(userData)); // 將資料存入 Redux
      localStorage.setItem("buyflow_user", JSON.stringify(userData)); //
      navigate("/");
    } catch (err) {
      alert(err);
    }
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
