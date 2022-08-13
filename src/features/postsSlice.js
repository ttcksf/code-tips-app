import { createSlice } from "@reduxjs/toolkit";
//テスト用のデータ
import { postsData } from "../data/postData";

const initialState = {
  value: [],
};
const postsSlice = createSlice({
  //スライスの名前
  name: "posts",
  //ステートの初期設定
  initialState,
  //投稿するReducer
  reducers: {
    //アクション名
    addPost: (state, action) => {
      //前のステートの配列（value）にプッシュしていく
      state.value.push(action.payload);
    },
  },
});

//postsSliceのReducerをエクスポート
export default postsSlice.reducer;
