import { createSlice } from "@reduxjs/toolkit";
import { products } from "./productsDB";
const initialState = { products: products, isFiltered: false, filtered: [] };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // 所有顯示商品

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
        console.log(state.filtered);
      } else {
        state.isFiltered = false;
      }
    },

    // 顯示分類商品
    active(state, action) {
      // 點及分類按鈕，顯示對應的商品
      const active = action.payload.toLowerCase();
      console.log(active);
      if (active !== "所有商品" && active !== "熱銷商品") {
        state.isFiltered = true;
        state.filtered = state.products.filter(
          (i) => i.category.toLowerCase() === active.toLowerCase()
        );
      } else if (active === "所有商品") {
        state.isFiltered = false;
        state.filtered = [];
      } else if (active === "熱銷商品") {
        state.isFiltered = true;
        state.filtered = state.products.filter((i) => i.rating >= 4.5);
      }
    },
  },
});

export const { search, active } = productsSlice.actions;
export default productsSlice.reducer;
