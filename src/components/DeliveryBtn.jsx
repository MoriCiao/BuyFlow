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
        className="w-50 sm:h-50 object-over mt-2"
        alt={`delivery-${id}`}
      />
      <p className="text-center text-[1.1rem] mt-2">{label}</p>
    </button>
  );
};

export default DeliveryBtn;
