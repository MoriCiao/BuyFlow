import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isVisible: false,
  animate_I: {
    initial: { opacity: 0.5, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.5 },
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    isSearch(state, action) {
      const status = action.payload;
      state.isVisible = status;
    },
  },
});
export const { setLoading, isSearch } = uiSlice.actions;
export default uiSlice.reducer;
