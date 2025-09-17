import React from "react";

const CratTotal = ({ totalQuatity, totalAmount }) => {
  return (
    <div className="flex gap-4">
      <div className="quantity flex flex-col items-end gap-2 sm:flex-row sm:items-center">
        <label className="text-end">Total Quantity :</label>
        <span className="text-black-500 px-2 text-end text-[1.15rem] font-bold">
          {totalQuatity ?? 0}
        </span>
      </div>
      <div className="amount flex flex-col items-end gap-2 sm:flex-row sm:items-center">
        <label className="text-end">Total Amount : </label>
        <span className="px-2 text-end text-[1.15rem] font-bold text-red-500">
          {totalAmount ?? 0} $
        </span>
      </div>
    </div>
  );
};

export default CratTotal;
