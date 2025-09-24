import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mockLoginAPI } from "../../features/user/mockAuthAPI.js";
import { login } from "../../features/user/userSlice.js";
import { setSavedItems } from "../../features/cart/cartSlice.js";
import Button from "../Button/Button.jsx";
import FormInputContainer from "./FormInputContainer.jsx";

const STYLE = {
  form: `login-from flex w-full max-w-[25rem] flex-col items-center justify-start gap-6 rounded-md border border-white/50 bg-zinc-800 py-8 shadow-lg backdrop-blur-md lg:w-[50%]`,
};

const Logo = memo(() => (
  <div className="w-full">
    <img
      src="/BuyFlow/logo_w.svg"
      alt="logo.svg"
      className="m-auto w-45 sm:w-60"
    />
  </div>
));

const LoginForm = ({ handleScrolltoRegister }) => {
  // input輸入的值存儲起來，供 userReducer使用
  const [email, setEmail] = useState("staff@example.com");
  const [password, setPassword] = useState("staff321");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEamil = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const handlePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await mockLoginAPI({ email, password });
      // 確認回傳資料沒有password
      dispatch(login(userData)); // 將資料存入 Redux
      dispatch(setSavedItems(userData.email)); // 將購物車資料存入 Redux
      if (userData.role === "menber") {
        // 根據取得的 userDate身分去做個別的導入頁面
        navigate("/products");
      } else if (userData.role === "staff" || userData.role === "admin") {
        navigate("/products");
      }
    } catch (err) {
      alert(err);
    }
  };

  const OperateBtn = () => (
    <div className="flex w-[80%] justify-between gap-4">
      <div>
        <Button
          label="Register"
          size="sm"
          type="button"
          onClick={handleScrolltoRegister}
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

      <div className="flex justify-between">
        <div className="">
          <Button label="Google" variant="danger" />
        </div>
        <div className="">
          <Button label="Facebook" variant="info" />
        </div>
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className={STYLE.form}>
      <Logo />

      <FormInputContainer
        email={email}
        onEmail={handleEamil}
        password={password}
        onPassword={handlePassword}
      />

      <OperateBtn />

      <CommunityLogin />
    </form>
  );
};

export default LoginForm;
