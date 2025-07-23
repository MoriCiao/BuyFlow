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

export const newDate = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const date = ` ${year} / ${month}/ ${day} - ${hours}: ${minutes}: ${seconds}`;
  return date;
};
// // 將登入者之前儲存資料，登入時抓取
// export const loadCartFromStorage = (key) => {
//   const saved_order = localStorage.getItem(key);
//   console.log(JSON.parse(saved_order, null, 2));
//   return JSON.parse(saved_order);
// };

// export const savedToLocalStorage = (key, data) => {
//   localStorage.setItem(key, JSON.stringify(data));
// };
