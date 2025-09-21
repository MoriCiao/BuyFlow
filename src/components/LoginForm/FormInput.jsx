import React, { memo } from "react";

const STYLE = {
  formInput: `formInput flex w-full flex-col items-center justify-center`,

  label: `login-label relative flex w-[80%] items-center justify-center`,

  input: `peer h-[2.5rem] w-full border-b-2 indent-[0.5rem] text-white`,

  title: `absolute -top-4 left-3 bg-zinc-800 px-2 font-bold text-white transition-all duration-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white`,
};

const FormInput = memo(({ label, name, type, value, onChange }) => {
  return (
    <div className={STYLE.formInput}>
      <label htmlFor={name} className={STYLE.label}>
        <input
          className={STYLE.input}
          id={name}
          name={name}
          type={type}
          placeholder=" "
          value={value || ""}
          onChange={onChange}
        />
        <span className={STYLE.title}>{label}</span>
      </label>
    </div>
  );
};

export default FormInput;
