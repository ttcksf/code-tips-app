import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

//テスト用のローディング
export const tipsStatus = Object.freeze({
  tipsIdling: "idle",
  tipsLoading: "loading",
  tipsError: "error",
});

const tipsSlice = createSlice({
  //スライスの名前
  name: "tips",
  //ステートの初期設定
  initialState: {
    data: [],
    status: tipsStatus.tipsIdling,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTips.pending, (state) => {
        state.status = tipsStatus.tipsLoading;
      })
      .addCase(fetchTips.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = tipsStatus.tipsIdling;
      })
      .addCase(fetchTips.rejected, (state) => {
        state.status = tipsStatus.tipsError;
      });
  },
});

//tipsSliceのReducerをエクスポート
export default tipsSlice.reducer;

//firebase
export const fetchTips = createAsyncThunk("tips/fetch", async () => {
  let fetchTipsData = [];
  const tipsCollectionRef = await collection(db, "tips");
  const sortedTipsCollectionRef = query(
    tipsCollectionRef,
    orderBy("timestamp", "desc")
  );
  await getDocs(sortedTipsCollectionRef).then((querySnapshot) => {
    querySnapshot.docs.forEach((doc) =>
      fetchTipsData.push({
        ...doc.data(),
        tipsId: doc.id,
      })
    );
  });
  return fetchTipsData;
});
