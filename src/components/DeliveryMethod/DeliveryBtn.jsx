import React from "react";

const DeliveryBtn = ({ id, value, label, image, isActive, onClick }) => {
  return (
    <button
      type="button"
      className={`delivery_btn select-none ${isActive ? "active" : ""}`}
      value={value}
      onClick={(e) => onClick(id, e)}
    >
      <img
        src={image}
        className="mt-2 w-50 object-cover sm:h-50"
        alt={`delivery-${id}`}
      />
      <p className="mt-2 text-center text-[1.1rem]">{label}</p>
    </button>
  );
};

export default DeliveryBtn;
