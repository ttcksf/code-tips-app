import { createSlice } from "@reduxjs/toolkit";
//テスト用のデータ
import { postsData } from "../data/postData";

const initialState = {
  value: postsData,
};
const postsSlice = createSlice({
  //スライスの名前
  name: "posts",
  //ステートの初期設定
  initialState,
  //Reduxの特定のアクションタイプを処理するための関数(switchのcase文と同じ）が入ったオブジェクト
  //オブジェクト内のキーは、アクションを生成するために使用されcreateReducerに渡される
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
