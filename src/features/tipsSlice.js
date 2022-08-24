import { createSlice } from "@reduxjs/toolkit";
//テスト用のデータ
import { tipsData } from "../data/tipsData";

// const initialState = {
//   value: tipsData,
// };
const tipsSlice = createSlice({
  //スライスの名前
  name: "tips",
  //ステートの初期設定
  initialState: { value: tipsData },
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
export default tipsSlice.reducer;
