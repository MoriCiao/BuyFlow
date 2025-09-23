import { createSlice } from "@reduxjs/toolkit";
import { users } from "./mockusersDB";

const initialState = {
  // 存放登入後的使用者資訊
  user: null,
  // 核對是否登入
  isAuthenticated: false,
  profile_bg: "/BuyFlow/user/user-bg-2.svg",
  userList: users,
  tempOrder: {},
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

      state.isAuthenticated = true;
    },
    // 登出
    loginout(state, action) {
      state.user = null;
      state.isAuthenticated = false;
    },
    // 新會員資料新增
    addNewMenber(state, action) {
      const newUser = action.payload;

      state.userList.push({
        ...newUser,
        image: "/BuyFlow/user/user-menber.svg",
      });
    },
    checkOrder(state, action) {
      state.tempOrder = action.payload;
    },
    // 創建訂單
    createOrder(state, action) {
      const newOrder = action.payload;

      // 新增訂單
      state.allOrders = [...state.allOrders, newOrder];
      // 確認訂單新增後，將購物車內資訊清除
      localStorage.setItem(
        `order-${state.user.email}`,
        JSON.stringify(state.allOrders),
      );

      state.items = [];
      state.totalAmount = 0;
      state.totalQuatity = 0;
      console.warn("已將訂單新增至使用者allOrders", newOrder);
    },
    // 取消訂單
    cancelOrder(state, action) {
      const select_order = action.payload;
      const updateOrderList = state.allOrders.filter(
        (o) => o.No !== select_order.No,
      );
      state.allOrders = updateOrderList;
    },
  },
});

export const {
  login,
  loginout,
  addNewMenber,
  checkOrder,
  createOrder,
  cancelOrder,
  addAllOrder,
  sentOut,
} = userSlice.actions;
// 匯出 reducer（給 store 使用）
export default userSlice.reducer;
