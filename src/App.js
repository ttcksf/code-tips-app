import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import HeaderMenu from "./components/common/molecules/HeaderMenu";
import ModalMenu from "./components/common/molecules/ModalMenu";
import { menuClose, menuToggle } from "./features/uiSlice";

function App() {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state) => state.ui);
  console.log(menuOpen);

  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  const menuCloseHandler = () => {
    if (menuOpen) dispatch(menuClose());
  };
  return (
    <>
      <div className="inner" style={style.inner}>
        <div className="container">
          <HeaderMenu
            headerTitle="Tips詳細"
            menuToggleHandler={menuToggleHandler}
          />
          <h1>test</h1>
        </div>
      </div>
      <ModalMenu menuOpen={menuOpen} menuCloseHandler={menuCloseHandler} />
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

const style = {
  inner: {
    boxSizing: "border-box",
    width: "100%",
    overflow: "hidden",
  },
};

export default App;
