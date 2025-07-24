import { createSlice } from "@reduxjs/toolkit";
// 此 Slice 為dashboard 的資料
const initialState = {
  order: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    // 訂單部分
    addOrderToDashBoard(state, action) {
      const newOrder = action.payload;
      state.order = [...state.order, newOrder];

      //  更新資料至 Storage
      localStorage.setItem("dashboard-store", JSON.stringify(state.order));
    },
    cancelOrderFormDashBoard(state, action) {
      const cancelOrder = action.payload;
      // 篩選出不是該訂單的新list
      const updatedOrderList = state.order.filter(
        (o) => o.id !== cancelOrder.id
      );
      state.order = updatedOrderList;
      localStorage.setItem("dashboard-store", JSON.stringify(state.order));

      console.log("DashBoard資料已更新");
    },
    // 將資料載入至 dashboard
    reloadOrderFromStorage(state, action) {
      const key = action.payload;
      const savedData = localStorage.getItem(key);
      const storageData = savedData ? JSON.parse(savedData) : [];
      state.order = [...storageData];
    },
  },
});

export const {
  addOrderToDashBoard,
  cancelOrderFormDashBoard,
  reloadOrderFromStorage,
} = orderSlice.actions;
export default orderSlice.reducer;
