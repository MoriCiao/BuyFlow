// Tool

import { table } from "framer-motion/client";

// 計算總金額
export const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// 計算總數量
export const calculateTotalQuantity = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

// 核對商品是否在購物車內
export const isItemInCart = (items, id) => {
  return items.find((item) => item.id === id);
};

export const deleteItem = (items, delItem) => {
  return items.filter((i) => i.id !== delItem.id);
};

// 將登入者之前儲存資料，登入時抓取
export const loadCartFromStorage = (email) => {
  const saved = localStorage.getItem("");
};
