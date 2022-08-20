import "./App.css";
import TipsDetail from "./screens/TipsDetail/TipsDetail";
import TipsList from "./screens/TipsList/TipsList";
import Auth from "./screens/Auth/Auth";
import MypostDelete from "./screens/MypostDelete/MypostDelete";
import AccountDelete from "./screens/AccountDelete/AccountDelete";
import NewPost from "./screens/NewPost/NewPost";

function App() {
  return (
    <>
      {/* <TipsDetail /> */}
      {/* <TipsList /> */}
      {/* <MypostDelete /> */}
      {/* <AccountDelete /> */}
      <NewPost />
      {/* <Auth /> */}
    </>
  );
  //useSelectorはストアの状態全体を引数として取り、値を読み取って結果を返す関数
  //ステートをpostsという名前のスライスのvalueの値に更新する
  // const postList = useSelector((state) => state.posts.value);
  // console.log(postList);
  // return (
  //   <div className="App">
  //     {postList.map((post) => (
  //       <div>
  //         <h1>{post.title}</h1>
  //         <p>{post.description}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default App;
