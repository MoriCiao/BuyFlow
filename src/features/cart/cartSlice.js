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
      const item = state.items.find((i) => i.id === id);
      if (!item) return;
      if (type === "increment") {
        if (item.quantity >= item.stock) {
          alert("此商品選取數量已達目前庫存量...");
          return;
        }
        item.quantity += 1;
      } else if (type === "decrement") {
        item.quantity = Math.max(item.quantity - 1, 1);
      }

      // 更新購物車裡的總件數及金額
      let quantity = 0;
      let amount = 0;
      state.items.forEach((i) => {
        quantity += item.quantity;
        amount += item.quantity * item.price;
      });
      state.totalQuatity = quantity;
      state.totalAmount = amount;
    },
    // 刪除商品
    removeItem(state, action) {
      const item = action.payload;
      console.log(item);

      state.totalQuatity -= item.quantity;
      state.totalAmount -= item.quantity * item.price;

      const updateItems = state.items.filter((i) => i.id !== item.id);
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
