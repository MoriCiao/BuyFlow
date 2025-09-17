import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/user/userSlice.js";
import { setCartItem } from "../../features/cart/cartSlice.js";
import { useNavigate } from "react-router-dom";
import { mockLoginAPI } from "../../features/user/mockAuthAPI.js";
import Button from "../Button/Button.jsx";
import FormInput from "./FormInput.jsx";
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
      className="login-from mt-2 flex flex-col items-center justify-start gap-6 border border-white/20 bg-[#333533] pt-0 backdrop-blur-md"
    >
      <div className="w-full">
        <img
          src="/BuyFlow/logo_w.svg"
          alt="logo.svg"
          className="relative m-auto w-45 py-6 sm:z-10 sm:w-60 xl:z-11"
        />
      </div>

      <FormInput
        label="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormInput
        label="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="items-between flex w-[80%] justify-between gap-4">
        <div>
          <Button
            label="Register"
            size="sm"
            type="button"
            onClick={() => navigate("/register")}
            className="relative z-10"
          />
        </div>

        <div>
          <Button
            label="Login"
            size="sm"
            type="submit"
            onClick={handleSubmit}
            className="relative z-10"
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
