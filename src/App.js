import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TipsDetail from "./screens/TipsDetail/TipsDetail";
import TipsList from "./screens/TipsList/TipsList";
import Auth from "./screens/Auth/Auth";
import MyPostDelete from "./screens/MyPostDelete/MyPostDelete";
import AccountDelete from "./screens/AccountDelete/AccountDelete";
import NewPost from "./screens/NewPost/NewPost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/tipsList" element={<TipsList />}></Route>
          <Route path="tips/:tipsId" element={<TipsDetail />}></Route>
          <Route path="/newPost" element={<NewPost />}></Route>
          <Route path="/postDelete" element={<MyPostDelete />}></Route>
          <Route path="/accountDelete" element={<AccountDelete />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
