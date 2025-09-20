// Tool

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
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const date = ` ${year} / ${month}/ ${day}  ${hours}: ${minutes}: ${seconds}`;
  return date;
};
