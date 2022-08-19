import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    menuOpen: false,
  },
  reducers: {
    menuToggle: (state) => {
      state.menuOpen = !state.menuOpen;
      console.log("click");
    },
    menuClose: (state) => {
      state.menuOpen = false;
    },
  },
});

export const { menuToggle, menuClose } = uiSlice.actions;
export default uiSlice.reducer;
