import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
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
  //Reduxの特定のアクションタイプを処理するための関数(switchのcase文と同じ）が入ったオブジェクト
  //オブジェクト内のキーは、アクションを生成するために使用されcreateReducerに渡される
  // reducers: {
  //   //アクション名
  //   addPost: (state, action) => {
  //     //前のステートの配列（value）にプッシュしていく
  //     state.tipsData.push(action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTips.pending, (state, action) => {
        state.status = tipsStatus.tipsLoading;
      })
      .addCase(fetchTips.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = tipsStatus.tipsIdling;
      })
      .addCase(fetchTips.rejected, (state, action) => {
        state.status = tipsStatus.tipsError;
      });
  },
});

//tipsSliceのReducerをエクスポート
export default tipsSlice.reducer;

//firebase
export const fetchTips = createAsyncThunk("tips/fetch", async () => {
  const tipsCollectionRef = await collection(db, "tips");
  let fetchTipsData = [];
  await getDocs(tipsCollectionRef).then((querySnapshot) => {
    querySnapshot.docs.forEach((doc) => {
      fetchTipsData.push({
        ...doc.data(),
        tipsId: doc.id,
      });
    });
  });
  return fetchTipsData;
});
