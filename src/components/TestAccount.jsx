import React from "react";

const TestAccount = ({ account }) => {
  return (
    <div
      className={`absolute top-12 left-0 z-100 flex flex-col items-start bg-black/50 text-[1.25rem] text-white transition duration-500 xl:left-1/2 xl:-translate-x-1/2 ${
        account ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex gap-4 px-4 py-2">
        <label htmlFor="">會員帳號</label>
        <div>
          <p>user@example.com</p>
          <p>user123</p>
        </div>
      </div>
      <hr className="mx-auto w-[95%] opacity-50" />
      <div className="flex gap-4 px-4 py-2">
        <label htmlFor="">行政帳號</label>
        <div>
          <p>admin@example.com</p>
          <p>admin123</p>
        </div>
      </div>
      <hr className="mx-auto w-[95%] opacity-50" />
      <div className="flex gap-4 px-4 py-2">
        <label htmlFor="">員工帳號</label>
        <div>
          <p>staff@example.com</p>
          <p>staff321</p>
        </div>
      </div>
      <hr className="mx-auto w-[95%] opacity-50" />
    </div>
  );
};

export default TestAccount;
