import React from "react";
import { motion } from "framer-motion";

function buttonClass(variant, size) {
  const base =
    "flex items-ceneter justify-center rounded font-mueium transition duration-200 w-full";

  const variants = {
    variant: {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      secondary: "bg-gray-600 hover:bg-gray-700 text-white",
      danger: "bg-red-600 hover:bg-red-700 text-white",
      danger_ghost:
        "bg-gray-700 hover:bg-white text-white hover:text-red-600 hover:ring-1 hover:ring-red-600",
      success: "bg-green-600 hover:bg-green-700 text-white",
      ghost:
        "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500",
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
  };
  return `${base} ${variants.variant[variant]} ${variants.size[size]}`;
}

const Button = ({
  type = "button",
  label = "預設按鈕",
  variant = "secondary",
  size = "md",
  onClick = () => null,
  className = "",
  disabled = false,
}) => {
  return (
    <motion.button
      className={` ${buttonClass(variant, size)} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </motion.button>
  );
};

export default Button;
