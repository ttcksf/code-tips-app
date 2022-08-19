import HeaderMenuBack from "../atoms/HeaderMenuBack";
import { useDispatch, useSelector } from "react-redux";
import MenuImg from "../../../images/dots.png";
import { menuToggle, menuClose } from "../../../features/uiSlice";
import ModalMenu from "./ModalMenu";

const HeaderMenu = ({ headerTitle }) => {
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
      <ModalMenu menuOpen={menuOpen} menuCloseHandler={menuCloseHandler} />
      <header className="modal-menu-header">
        {/* TipsList.jsでは無くす予定 */}
        <HeaderMenuBack />
        <div className="header-menu-title">
          {/* モーダルメニューではスタイルを変える予定 */}
          <p>{headerTitle}</p>
        </div>
        <div className="modal-menu-img" onClick={menuToggleHandler}>
          <img src={MenuImg} alt="menu" />
        </div>
      </header>
    </>
  );
};

export default HeaderMenu;
