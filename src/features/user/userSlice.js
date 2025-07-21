import { createSlice } from "@reduxjs/toolkit";
import { users } from "./mockusersDB";
const initialState = {
  // 存放登入後的使用者資訊
  user: null,
  // 核對是否登入
  isAuthenticated: false,
  profile_bg: "/BuyFlow/user/user-bg-2.svg",
  userList: users,
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
  },
});

export const { login, loginout, addmenber } = userSlice.actions;
// 匯出 reducer（給 store 使用）
export default userSlice.reducer;
