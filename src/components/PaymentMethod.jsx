import React from "react";

const PaymentMethod = ({ label, name, value, checked, onChange }) => {
  return (
    <div className="payment">
      <input
        name={name}
        value={value}
        type="radio"
        checked={checked}
        onChange={(e) => onChange(name, e)}
      />
      <label htmlFor="" className="pl-1">
        {label}
      </label>
    </div>
  );
};

export default PaymentMethod;
