import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { addNewMenber } from "../../features/user/userSlice";
import UserList from "../../components/UserList";
import "./_Register.scss";
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
    <div className="register-form-item">
      <label htmlFor="" className="register-label">
        {label} :
      </label>
      <input
        className="register-input"
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

  const [isOpen, setIsOpen] = useState(false);

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
    dispatch(addNewMenber(addMenber));
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <AnimatePresence>
      <motion.section
        key={location.pathname}
        {...animate_I}
        className="register-page"
      >
        <button
          className="member-list"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Code
        </button>
        {isOpen && <UserList />}

        {/* 背景圖片 */}
        <div className="register-img">
          <img
            draggable="false"
            className="hidden w-[100%] 2xl:block"
            src="/BuyFlow/register.svg"
            alt="register.svg"
          />
        </div>

        <div className="register-form border-2 border-white shadow-xl backdrop-blur-sm">
          <img
            draggable="false"
            src="/BuyFlow/logo_w.svg"
            alt="logo_w.svg"
            loading="lazy"
          />
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              className="border2 mx-auto my-4 w-50 cursor-pointer rounded-sm border border-[#e8eddf] bg-gradient-to-br from-[#e8eddf]/50 via-[#333533]/80 to-[#e8eddf]/100 px-2 text-[1.5rem] font-bold tracking-widest text-[#e8eddf] transition duration-500 hover:scale-110 hover:from-[#e8eddf] hover:via-yellow-200 hover:to-[#e8eddf] hover:text-[#333533]"
              onClick={() => dispatch(addNewMenber(addMenber))}
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
