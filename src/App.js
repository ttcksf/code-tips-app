import "./App.css";
import { useSelector } from "react-redux";
import HeaderMenu from "./components/common/molecules/HeaderMenu";
import ModalMenu from "./components/common/molecules/ModalMenu";
import Auth from "./screens/Auth/Auth";

function App() {
  return (
    <div className="inner">
      {/* <HeaderMenu headerTitle="Tips詳細" /> */}
      {/* <h1>test</h1> */}
      <Auth />
    </div>
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
