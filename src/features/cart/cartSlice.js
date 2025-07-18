import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

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
      const { product, amount } = action.payload;
      const updateItem = { ...product, amount: amount };
      const itemPrice = product.price * amount;
      console.log(itemPrice);
      state.totalAmount += itemPrice;
      state.totalQuatity += Number(amount);
      console.log(state.totalQuatity);
      state.items = [...state.items, updateItem];
    },
    // CartPage修正數量
    modifyAmount(state, action) {
      const item = action.payload;
      console.log(item);
    },
    // 刪除商品
    removeItem(state, action) {
      const item = action.payload;
      const updateItems = state.items.filter((i) => i.id !== item.id);
      state.items = updateItems;
    },
    // 清理購物車
    cleanCart(state, action) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuatity = 0;
    },
  },
});

export const { addItem, removeItem, cleanCart, modifyAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
