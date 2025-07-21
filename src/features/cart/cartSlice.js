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
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /*
        這邊會定義 reducer 
          addItem 新增商品
          removeItem 移除商品
          cleanCart 清理購物車的函式
    */
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

      // 更新購物車裡的總件數及金額
      // let quantity = ;
      // let amount = ;

      state.totalQuatity = calculateTotalQuantity(state.items);
      state.totalAmount = calculateTotalAmount(state.items);
    },
    // 刪除商品
    removeItem(state, action) {
      const item = action.payload;

      state.totalQuatity -= item.quantity;
      state.totalAmount -= item.quantity * item.price;

      const updateItems = deleteItem(state.items);
      state.items = updateItems;
    },
    // 清理購物車
    cleanCart(state, action) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuatity = 0;
    },

    setCartItems(state, action) {
      state.items = action.payload;

      let quantity = 0;
      let amount = 0;
      state.items.forEach((i) => {
        quantity += i.quantity;
        amount = i.quantity * i.price;
      });
      state.totalQuatity = quantity;
      state.totalAmount = amount;
    },
  },
});

export const { addItem, removeItem, cleanCart, modifyAmount, setCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
