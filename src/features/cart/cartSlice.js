import { createSlice } from "@reduxjs/toolkit";

import {
  calculateTotalAmount,
  calculateTotalQuantity,
  isItemInCart,
  deleteItem,
} from "./cartUtils";
const initialState = {
  items: [], // <<< 每個商品的細項 {id, name... }
  totalAmount: 0, // <<< 所有商品總金額
  totalQuatity: 0, // <<< 所有商品總件數
  deliveryPayment: {
    delivery: "",
    payment: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 新增商品
    addItem(state, action) {
      const { product, quantity, deliveryMethod } = action.payload;
      const updateItem = {
        ...product,
        quantity: quantity,
        deliveryMethod: deliveryMethod,
      };
      const itemPrice = product.price * quantity;

      state.totalAmount += itemPrice;
      state.totalQuatity += Number(quantity);

      state.items = [...state.items, updateItem];
    },
    // CartPage修正數量
    modifyAmount(state, action) {
      const { id, type } = action.payload;
      const item = isItemInCart(state.items, id);

      if (!item) return;
      item.quantity =
        type === "increment"
          ? Math.min(item.quantity + 1, item.stock)
          : Math.max(item.quantity - 1, 1);

      state.totalQuatity = calculateTotalQuantity(state.items);
      state.totalAmount = calculateTotalAmount(state.items);
    },
    // 刪除商品
    removeItem(state, action) {
      const item = action.payload;

      state.totalQuatity -= item.quantity;
      state.totalAmount -= item.quantity * item.price;

      const updateItems = deleteItem(state.items, item);
      state.items = updateItems;
    },
    // 清理購物車
    cleanCart(state, action) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuatity = 0;
      state.deliveryPayment = {
        delivery: "",
        payment: "",
      };
      console.warn("購物車已清空!");
    },
    // 將選取的商品導入購物車
    setCartItems(state, action) {
      state.items = action.payload;
      console.log(action.payload);
      let quantity = 0;
      let amount = 0;
      state.items.forEach((i) => {
        quantity += i.quantity;
        amount = i.quantity * i.price;
      });
      state.totalQuatity = quantity;
      state.totalAmount = amount;
    },
    // 設定配送方式
    setDeliveryPayment(state, action) {
      const { deliveryPayment } = action.payload;
      state.deliveryPayment = deliveryPayment;
    },
  },
});

export const {
  addItem,
  removeItem,
  cleanCart,
  modifyAmount,
  setCartItem,
  setDeliveryPayment,
} = cartSlice.actions;
export default cartSlice.reducer;
