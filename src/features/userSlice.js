import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
};

const userSlice = createSlice({
  //スライスの名前
  name: "user",
  //ステートの初期設定
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setLogOut: (state) => {
      state.email = null;
      state.password = null;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchTips.pending, (state, action) => {
  //       state.status = tipsStatus.tipsLoading;
  //     })
  //     .addCase(fetchTips.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //       state.status = tipsStatus.tipsIdling;
  //     })
  //     .addCase(fetchTips.rejected, (state, action) => {
  //       state.status = tipsStatus.tipsError;
  //     });
  // },
});

//userSliceのReducerをエクスポート
export default userSlice.reducer;
