import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import tipsReducer from "./features/tipsSlice";
import menuReducer from "./features/menuSlice";
import userReducer from "./features/userSlice";

const store = configureStore({
  //reducerを作る
  reducer: {
    //postsSliceのReducerをtipsReducerという名前でインポート
    tips: tipsReducer,
    menu: menuReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* ストアをどのコンポーネントからでもアクセスできるようにする */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
