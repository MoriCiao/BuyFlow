import { createSlice } from "@reduxjs/toolkit";

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
    addItem(state, action) {},

    removeItem(state, action) {},

    cleanCart(state, action) {},
  },
});

export const { addItem, removeItem, cleanCart } = cartSlice.actions;
export default cartSlice.reducer;
