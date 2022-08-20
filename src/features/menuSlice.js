import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuToggle: false,
  },
  reducers: {
    menuOpen(state) {
      state.menuToggle = true;
    },
    menuClose(state) {
      state.menuToggle = false;
    },
  },
});

//postsSliceのReducerをエクスポート
export default menuSlice.reducer;
export const { menuOpen, menuClose } = menuSlice.actions;
