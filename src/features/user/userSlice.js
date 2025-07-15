import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
  },
});

export const { login, loginout } = userSlice.actions;
export default userSlice.reducer;
