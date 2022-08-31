import HeaderMenuBack from "../atoms/HeaderMenuBack";
import { useDispatch, useSelector } from "react-redux";
import MenuImg from "../../../images/dots.png";
import { menuOpen, menuClose } from "../../../features/menuSlice";
import ModalMenu from "./ModalMenu";
import { useLocation } from "react-router-dom";

const HeaderMenu = ({ headerTitle }) => {
  const location = useLocation();
  console.log("location: ", location);
  const dispatch = useDispatch();
  const { menuToggle } = useSelector((state) => state.menu);

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
