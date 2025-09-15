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
      className="login-from flex flex-col gap-6 items-center pt-8 mt-2 backdrop-blur-md bg-[#333533]"
    >
      <img
        draggable="false"
        className="login_profile select-none absolute top-[-5rem] rounded-full"
        src="/BuyFlow/profile_photo.svg"
        alt=""
      />
      <svg>
        <rect className="svg-border"></rect>
      </svg>
      <div className="login-item w-full flex flex-col items-center justify-center">
        <label
          htmlFor="email"
          className="login-label relative w-[80%] flex items-center justify-center"
        >
          <input
            className="peer w-full  border-2 indent-[0.5rem] h-[2.5rem] rounded-sm bg-[#333533] text-[#e8eddf]"
            id="email"
            name="email"
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="absolute left-3 -top-3 font-bold transition-all duration-500 text-[#e8eddf]  px-1 bg-[#333533] peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-[#e8eddf] ">
            Email
          </span>
        </label>
      </div>
      <div className="login-item w-full flex flex-col items-center justify-center">
        <label
          htmlFor="password"
          className="login-label relative w-[80%] flex items-center justify-center"
        >
          <input
            className="peer w-full  border-2 indent-[0.5rem] h-[2.5rem] rounded-sm bg-[#333533] text-[#e8eddf]"
            id="password"
            name="password"
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="absolute left-3 -top-3 font-bold transition-all duration-500 text-[#e8eddf]  px-1 bg-[#333533] peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-[#e8eddf] ">
            Password
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="login-svg px-2 cursor-pointer text-[#e8eddf] sm:text-[1.5rem] text-md"
      >
        <svg>
          <rect></rect>
        </svg>
        Login
      </button>
      <img
        src="/BuyFlow/logo_w.svg"
        alt="logo.svg"
        className="sm:w-60 w-25 py-6 relative xl:z-11 sm:z-10"
      />
    </form>
  );
};

export default LoginForm;
