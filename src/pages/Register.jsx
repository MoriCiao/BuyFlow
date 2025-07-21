import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { addmenber } from "../features/user/userSlice";
// tel email name  password
// role
const RegisterItem = ({
  label,
  name,
  type,
  required,
  onChange,
  value,
  pattern,
  title,
  ref,
}) => {
  return (
    <div className="flex gap-4 justify-end">
      <label htmlFor="" className="font-bold">
        {label} :
      </label>
      <input
        className="w-[50%] indent-[1rem] bg-[#333533] text-[#e8eddf] border rounded-sm"
        type={type}
        placeholder={name}
        step={type === "number" ? "1" : undefined}
        min={type === "number" ? "1" : undefined}
        max={type === "number" ? "100" : undefined}
        required={required}
        onChange={onChange}
        value={value}
        pattern={type === "tel" ? pattern : undefined}
        title={type === "tel" ? title : undefined}
        ref={name === "Name..." ? ref : undefined}
      />
    </div>
  );
};

const Register = () => {
  const { animate_I } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const location = useLocation();
  const inputRef = useRef(null);
  const [addMenber, setAddMenber] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    password: "",
    checkpassword: "",
    role: "menber",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 預防錯誤資料傳送至Slice
    // 預防phone
    if (!/^09\d{8}$/.test(addMenber.phone)) {
      alert("您輸入的手機格式錯誤，請重新輸入。");
      return;
    }
    // 預防password & checkpassword
    if (addMenber.password !== addMenber.checkpassword) {
      alert("您輸入的密碼與二次確認密碼不一致，請重新輸入。");
      return;
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <AnimatePresence>
      <motion.section
        key={location.pathname}
        {...animate_I}
        className="register-page w-full h-full p-4 relative"
      >
        <img
          className="w-[60%]"
          src="/BuyFlow/register.svg"
          alt="register.svg"
        />
        <div className="register-area absolute top-1/2 right-20  min-w-[400px] min-h-[500px] -translate-y-1/2 p-4 bg-[#333533]/70 text-[#e8eddf]">
          <svg>
            <rect></rect>
          </svg>
          <img
            src="/BuyFlow/logo_w.svg"
            alt="logo_w.svg"
            className="p-8 pt-2"
          />
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
            <RegisterItem
              label="Name"
              name="Name..."
              type="text"
              required={true}
              value={addMenber.name}
              onChange={(e) =>
                setAddMenber({ ...addMenber, name: e.target.value })
              }
              ref={inputRef}
            />
            <RegisterItem
              label="Age"
              name="Age..."
              type="number"
              required={true}
              value={addMenber.age}
              onChange={(e) =>
                setAddMenber({ ...addMenber, age: e.target.value })
              }
            />
            <RegisterItem
              label="Email"
              name="Email..."
              type="email"
              required={true}
              value={addMenber.email}
              onChange={(e) =>
                setAddMenber({ ...addMenber, email: e.target.value })
              }
            />
            <RegisterItem
              label="Phone"
              name="Phone..."
              type="tel"
              required={true}
              value={addMenber.phone}
              onChange={(e) =>
                setAddMenber({ ...addMenber, phone: e.target.value })
              }
              pattern="^09\d{8}$"
              title="請輸入正確的台灣手機號碼（例如：0912345678）"
            />
            <RegisterItem
              label="Password"
              name="Password..."
              type="password"
              required={true}
              value={addMenber.password}
              onChange={(e) =>
                setAddMenber({ ...addMenber, password: e.target.value })
              }
            />
            <RegisterItem
              label="Check Password"
              name="Check Password..."
              type="password"
              required={true}
              value={addMenber.checkpassword}
              onChange={(e) =>
                setAddMenber({ ...addMenber, checkpassword: e.target.value })
              }
            />

            <button
              type="submit"
              className="border rounded-full px-2 w-20 m-auto cursor-pointer"
              onClick={() => dispatch(addmenber(addMenber))}
            >
              Submit
            </button>
          </form>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Register;
