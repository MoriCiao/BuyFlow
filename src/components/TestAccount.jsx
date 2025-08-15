import React from "react";

const TestAccount = ({ account }) => {
  return (
    <div
      className={`absolute z-100 top-12 xl:left-1/2 left-0 xl:-translate-x-1/2 bg-black/50 text-white text-[1.25rem] flex flex-col items-start transition duration-500 ${
        account ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className=" py-2 px-4 flex gap-4">
        <label htmlFor="">會員帳號</label>
        <div>
          <p>user@example.com</p>
          <p>user123</p>
        </div>
      </div>
      <hr className="opacity-50 w-[95%] mx-auto" />
      <div className=" py-2 px-4 flex gap-4">
        <label htmlFor="">行政帳號</label>
        <div>
          <p>admin@example.com</p>
          <p>admin123</p>
        </div>
      </div>
      <hr className="opacity-50 w-[95%] mx-auto" />
      <div className=" py-2 px-4 flex gap-4">
        <label htmlFor="">員工帳號</label>
        <div>
          <p>staff@example.com</p>
          <p>staff321</p>
        </div>
      </div>
      <hr className="opacity-50 w-[95%] mx-auto" />
    </div>
  );
};

export default TestAccount;
