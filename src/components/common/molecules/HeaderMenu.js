import HeaderMenuBack from "../atoms/HeaderMenuBack";
import { useDispatch, useSelector } from "react-redux";
import MenuImg from "../../../images/dots.png";
import { menuOpen, menuClose } from "../../../features/menuSlice";
import ModalMenu from "./ModalMenu";

const HeaderMenu = ({ headerTitle }) => {
  const dispatch = useDispatch();
  const { menuToggle } = useSelector((state) => state.menu);
  console.log(menuToggle);

  const menuOpenHandler = () => {
    dispatch(menuOpen());
  };

  const menuCloseHandler = () => {
    dispatch(menuClose());
  };
  return (
    <>
      <ModalMenu menuToggle={menuToggle} menuCloseHandler={menuCloseHandler} />
      <header className="modal-menu-header">
        {/* TipsList.jsでは無くす予定 */}
        <HeaderMenuBack />
        <div className="header-menu-title">
          {/* モーダルメニューではスタイルを変える予定 */}
          <p>{headerTitle}</p>
        </div>
        <div className="modal-menu-img" onClick={menuOpenHandler}>
          <img src={MenuImg} alt="menu" />
        </div>
      </header>
    </>
  );
};

export default HeaderMenu;
