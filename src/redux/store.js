import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productsSlice";
import userReducer from "../features/user/userSlice";
import uiReducer from "../features/ui/uiSlice";
import orderReducer from "../features/order/orderSlice";
// 對應的 Reducer 名稱可以自己取

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    user: userReducer,
    ui: uiReducer,
    order: orderReducer,
  },
});
