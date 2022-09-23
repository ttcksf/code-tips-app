import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

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
    uid: null,
    email: null,
    password: null,
    status: userStatus.userIdling,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = userStatus.userLoading;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = userStatus.userIdling;
        state.uid = action.payload.uid;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = userStatus.userError;
      });
  },
});

export const fetchUser = createAsyncThunk("user/fetch", async () => {
  let currentUserData = await auth.currentUser;
  console.log("currentUserData: ");
  console.log(currentUserData);
  return currentUserData;
});

//userSliceのReducerをエクスポート
export default userSlice.reducer;
