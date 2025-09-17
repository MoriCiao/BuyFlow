import React from "react";

const FormInput = ({ label, name, value, onChange }) => {
  return (
    <div className="login-item flex w-full flex-col items-center justify-center">
      <label
        htmlFor={name}
        className="login-label relative flex w-[80%] items-center justify-center"
      >
        <input
          className="peer h-[2.5rem] w-full border-b-2 bg-[#333533] indent-[0.5rem] text-white"
          id={name}
          name={name}
          type={name}
          placeholder=" "
          value={value}
          onChange={onChange}
        />
        <span className="peer-placeholder-shown:text-[white absolute -top-3 left-3 bg-[#333533] px-2 font-bold text-white transition-all duration-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base">
          {label}
        </span>
      </label>
    </div>
  );
};

export default FormInput;
