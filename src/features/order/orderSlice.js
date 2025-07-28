import { createSlice } from "@reduxjs/toolkit";
import { newDate } from "../cart/cartUtils";
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
    },
    // 將資料載入至 dashboard
    reloadOrderFromStorage(state, action) {
      const key = action.payload;
      const savedData = localStorage.getItem(key);
      const storageData = savedData ? JSON.parse(savedData) : [];
      state.order = [...storageData];
    },
    sendOrder(state, action) {
      // 將確認出貨的訂單通知客人
      const target = action.payload;
      // 為此訂單添加新的屬性，標示已出貨
      const updatedOrder = {
        ...target,
        sendDate: newDate(),
        isSend: true,
      };
      const index = state.order.findIndex((o) => o.id === target.id);
      //更新對應INDEX的訂單
      if (index !== -1) {
        // 更新廠商的訂單
        state.order[index] = updatedOrder;
        // 更新客戶端的訂單
        const userKey = `order-${target.user.email}`;
        const prevOrder = localStorage.getItem(userKey);
        const data = JSON.parse(prevOrder);
        const dataIndex = data.findIndex((d) => d.id === target.id);
        data[dataIndex] = updatedOrder;
        localStorage.setItem(userKey, JSON.stringify(data));
      }
    },
  },
});

export const {
  addOrderToDashBoard,
  cancelOrderFormDashBoard,
  reloadOrderFromStorage,
  sendOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
