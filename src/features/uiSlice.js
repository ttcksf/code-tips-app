import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    menuOpen: false,
  },
  reducers: {
    menuToggle(state) {
      state.menuOpen = !state.menuOpen;
    },
    menuClose(state) {
      state.menuOpen = false;
    },
  },
});

//postsSliceのReducerをエクスポート
export default uiSlice.reducer;
export const { menuToggle, menuClose } = uiSlice.actions;
