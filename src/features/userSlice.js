import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

//テスト用のローディング
export const userStatus = Object.freeze({
  userIdling: "idle",
  userLoading: "loading",
  userError: "error",
});

const userSlice = createSlice({
  //スライスの名前
  name: "user",
  //ステートの初期設定
  initialState: {
    data: [],
    status: userStatus.userIdling,
  },
  reducers: {
    logIn: (state, action) => {
      state.data = action.payload;
    },
    logOut: (state) => {
      state.data = null;
    },
  },
});
//userSliceのReducerをエクスポート
export default userSlice.reducer;

export const { logIn, logOut } = userSlice.actions;
