import React from "react";
import { motion } from "framer-motion";

function buttonClass(variant, size) {
  const base =
    "flex items-ceneter justify-center rounded font-mueium transition duration-200 w-full ";

  const variants = {
    variant: {
      primary: "bg-blue-500 text-white hover:bg-blue-900",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
      danger: "bg-red-600 text-white hover:bg-red-700",
      danger_ghost: "bg-red-900 text-white",
      success: "bg-green-600 text-white hover:bg-green-700",
      success_ghost:
        "bg-gray-600/50 font-bold text-green-600 ring-1 hover:text-green-300",
      info: "bg-sky-600 text-white hover:bg-sky-700",
      ghost:
        "bg-transparent text-zinc-900 hover:text-white hover:bg-zinc-900 focus:ring-gray-500 cursor-not-allowed border",
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
