import { createSlice } from "@reduxjs/toolkit";
import { products } from "./productsDB";
const initialState = {
  products: products,
  isFiltered: false,
  filtered: [],
  isModify: false,
  modify_list: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // 搜尋商品
    search(state, action) {
      const keyword = action.payload.toLowerCase();
      if (keyword.length !== 0) {
        state.isFiltered = true;
        state.filtered = state.products.filter((i) => {
          const itemName = i.name.toLowerCase();
          const itemDes = i.description.toLowerCase();
          const itemCate = i.category.toLowerCase();
          return (
            itemName.includes(keyword) ||
            itemDes.includes(keyword) ||
            itemCate.includes(keyword)
          );
        });
      } else {
        state.isFiltered = false;
      }
    },

    // 顯示分類商品
    active(state, action) {
      // 點及分類按鈕，顯示對應的商品
      const active = action.payload.toLowerCase();

      if (active !== "所有商品" && active !== "熱銷商品") {
        state.isFiltered = true;
        state.filtered = state.products.filter(
          (i) => i.category.toLowerCase() === active.toLowerCase(),
        );
      } else if (active === "所有商品") {
        state.isFiltered = false;
        state.filtered = [];
      } else if (active === "熱銷商品") {
        state.isFiltered = true;
        state.filtered = state.products.filter((i) => i.rating >= 4.5);
      }
    },

    modify(state, action) {
      const item = action.payload;
      state.isModify = true;
      state.modify_list = { ...item };
    },

    updateProduct(state, action) {
      const { id, updatedData } = action.payload;

      const index = state.products.findIndex((p) => p.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedData };
      }

      state.isModify = false;
    },

    closeView(state, action) {
      state.isModify = false;
    },
  },
});

export const { search, active, modify, updateProduct, closeView } =
  productsSlice.actions;
export default productsSlice.reducer;
