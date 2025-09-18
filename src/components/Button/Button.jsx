import React from "react";
import { motion } from "framer-motion";

function buttonClass(variant, size) {
  const base =
    "flex items-ceneter justify-center rounded font-mueium transition duration-200 w-full";

  const variants = {
    variant: {
      primary: "bg-blue-300 text-white hover:bg-blue-400",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
      danger: "bg-red-600 text-white hover:bg-red-700",
      danger_ghost:
        "bg-gray-700 text-white hover:bg-white hover:text-red-600 hover:ring-1 hover:ring-red-600",
      success: "bg-green-600 text-white hover:bg-green-700",
      success_ghost:
        "bg-gray-600/50 font-bold text-green-600 ring-1 hover:text-green-300",
      info: "bg-slate-600 text-white hover:bg-slate-700e",
      ghost:
        "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
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
