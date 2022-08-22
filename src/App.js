import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import TipsDetail from "./screens/TipsDetail/TipsDetail";
import TipsList from "./screens/TipsList/TipsList";
import Auth from "./screens/Auth/Auth";
import MypostDelete from "./screens/MypostDelete/MypostDelete";
import AccountDelete from "./screens/AccountDelete/AccountDelete";
import NewPost from "./screens/NewPost/NewPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/tipslist" element={<TipsList />}></Route>
          <Route path="/tips/:id" element={<TipsDetail />}></Route>
          <Route path="/newpost" element={<NewPost />}></Route>
          <Route path="/postdelete" element={<MypostDelete />}></Route>
          <Route path="/accountdelete" element={<AccountDelete />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <TipsDetail /> */}
      {/* <TipsList /> */}
      {/* <MypostDelete /> */}
      {/* <AccountDelete /> */}
      {/* <NewPost /> */}
      {/* <Auth /> */}
    </>
  );
}

export default App;
