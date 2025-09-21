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

  const STYLE = {
    form: `login-from flex w-full max-w-[25rem] flex-col items-center justify-start gap-6 rounded-md border border-white/50 bg-zinc-800 py-8 shadow-lg backdrop-blur-md lg:w-[50%]`,
  };

  const handleSubmit = useCallback(
    async (e) => {
      console.log("handleSubmit 執行中");
      e.preventDefault();
      try {
        const userData = await mockLoginAPI({ email, password });
        // 確認回傳資料沒有password

        dispatch(login(userData)); // 將資料存入 Redux
        localStorage.setItem("buyflow_user", userData.email);

        // 登入後獲取此帳戶的購物車
        const savedCart = localStorage.getItem(
          `buyflow_cart-${userData.email}`,
        );
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
    },
    [dispatch, navigate],
  );

  const Logo = () => (
    <div className="w-full">
      <img
        src="/BuyFlow/logo_w.svg"
        alt="logo.svg"
        className="m-auto w-45 sm:w-60"
      />
    </div>
  );

  const FormInputContainer = ({ email, setEmail, password, setPassword }) => {
    const handleEamil = useCallback(
      (e) => {
        setEmail(e.target.value);
      },
      [setEmail],
    );
    const handlePassword = useCallback(
      (e) => {
        setPassword(e.target.value);
      },
      [setPassword],
    );
    return (
      <div className="flex w-full flex-col gap-8">
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleEamil}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
    );
  };

  const OperateBtn = () => (
    <div className="flex w-[80%] justify-between gap-4">
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
  );

  const CommunityLogin = () => (
    <div className="flex w-[80%] flex-col gap-4">
      <p className="border-b text-center">或者使用社交帳號登入</p>

      <div className="flex w-full justify-between gap-8">
        <Button label="Google" variant="danger" />
        <Button label="Facebook" variant="info" />
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className={STYLE.form}>
      <Logo />
      <FormInputContainer
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />

      <OperateBtn />

      <CommunityLogin />
    </form>
  );
};

export default LoginForm;
