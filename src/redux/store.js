import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productsSlice";
import userReducer from "../features/user/userSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    user: userReducer,
    ui: uiReducer,
  },
});
