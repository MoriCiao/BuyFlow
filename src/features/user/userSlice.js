import { createSlice } from "@reduxjs/toolkit";
import { users } from "./mockusersDB";
const loadFromStorage = (key) => {
  const saved_order = localStorage.getItem(key);
  console.log(JSON.parse(saved_order, null, 2));
  return JSON.parse(saved_order);
};

const savedToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const initialState = {
  // 存放登入後的使用者資訊
  user: null,
  // 核對是否登入
  isAuthenticated: false,
  profile_bg: "/BuyFlow/user/user-bg-2.svg",
  userList: users,
  allOrders: [],
};

const userSlice = createSlice({
  name: "auth", // 這個slice的名稱
  initialState, // 初始狀態
  reducers: {
    // 函式(配對 state 做修改)
    // 登入成功，將state變成user資料
    login(state, action) {
      state.user = action.payload;
      console.log(action.payload);
      state.isAuthenticated = true;
    },
    // 登出
    loginout(state, action) {
      state.user = null;
      state.isAuthenticated = false;
    },
    addmenber(state, action) {
      const NewUser = action.payload;
      console.log(NewUser);
    },
    // 創建訂單
    createOrder(state, action) {
      const newOrder = action.payload;

      // 新增訂單
      state.allOrders = [
        ...state.allOrders,
        { orderNo: state.allOrders.length + 1, ...newOrder },
      ];
      // 確認訂單新增後，將購物車內資訊清除
      state.items = [];
      state.totalAmount = 0;
      state.totalQuatity = 0;
    },
    // 取消訂單
    cancelOrder(state, action) {
      const select_order = action.payload;
      const updateOrderList = state.allOrders.filter(
        (o) => o.No !== select_order.No
      );
      state.allOrders = updateOrderList;
    },
    // 將 訂單依照不同的 user.email 傳至 localStorage
    savedOrderToLocalStorage(state, action) {
      const { key, order } = action.payload;

      savedToLocalStorage(key, order);
    },
    // loading Storage
    loadingOrderFromLocalStorage(state, action) {
      const key = action.payload;
      return loadFromStorage(key);
    },
  },
});

export const {
  login,
  loginout,
  addmenber,
  createOrder,
  cancelOrder,
  addAllOrder,
  loadingOrderFromLocalStorage,
  savedOrderToLocalStorage,
} = userSlice.actions;
// 匯出 reducer（給 store 使用）
export default userSlice.reducer;
