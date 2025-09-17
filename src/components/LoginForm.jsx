import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user/userSlice";
import { setCartItem } from "../features/cart/cartSlice.js";
import { useNavigate } from "react-router-dom";
import { mockLoginAPI } from "../features/user/mockAuthAPI.js";
// 登入表單
const LoginForm = () => {
  // input輸入的值存儲起來，供 userReducer使用
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("admin123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await mockLoginAPI({ email, password });
      // 確認回傳資料沒有password

      dispatch(login(userData)); // 將資料存入 Redux
      localStorage.setItem("buyflow_user", userData.email);

      // 登入後獲取此帳戶的購物車
      const savedCart = localStorage.getItem(`buyflow_cart-${userData.email}`);
      if (savedCart) {
        dispatch(setCartItem(JSON.parse(savedCart)));
      }

      // 根據取得的 userDate身分去做個別的導入頁面
      if (userData.role === "menber") {
        navigate("/");
      } else if (userData.role === "staff" || userData.role === "admin") {
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="login-from mt-2 flex flex-col items-center gap-6 bg-[#333533] pt-8 backdrop-blur-md"
    >
      <img
        draggable="false"
        className="login_profile absolute top-[-5rem] rounded-full select-none"
        src="/BuyFlow/profile_photo.svg"
        alt=""
      />
      <svg>
        <rect className="svg-border"></rect>
      </svg>
      <div className="login-item flex w-full flex-col items-center justify-center">
        <label
          htmlFor="email"
          className="login-label relative flex w-[80%] items-center justify-center"
        >
          <input
            className="peer h-[2.5rem] w-full rounded-sm border-2 bg-[#333533] indent-[0.5rem] text-[#e8eddf]"
            id="email"
            name="email"
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="absolute -top-3 left-3 bg-[#333533] px-1 font-bold text-[#e8eddf] transition-all duration-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#e8eddf]">
            Email
          </span>
        </label>
      </div>
      <div className="login-item flex w-full flex-col items-center justify-center">
        <label
          htmlFor="password"
          className="login-label relative flex w-[80%] items-center justify-center"
        >
          <input
            className="peer h-[2.5rem] w-full rounded-sm border-2 bg-[#333533] indent-[0.5rem] text-[#e8eddf]"
            id="password"
            name="password"
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="absolute -top-3 left-3 bg-[#333533] px-1 font-bold text-[#e8eddf] transition-all duration-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#e8eddf]">
            Password
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="login-svg text-md cursor-pointer px-2 text-[#e8eddf] sm:text-[1.5rem]"
      >
        <svg>
          <rect></rect>
        </svg>
        Login
      </button>
      <img
        src="/BuyFlow/logo_w.svg"
        alt="logo.svg"
        className="relative w-25 py-6 sm:z-10 sm:w-60 xl:z-11"
      />
    </form>
  );
};

export default LoginForm;
