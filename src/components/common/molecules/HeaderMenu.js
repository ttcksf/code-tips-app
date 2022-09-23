import HeaderMenuBack from "../atoms/HeaderMenuBack";
import "./HeaderMenu.css";
import { useDispatch, useSelector } from "react-redux";
import MenuImg from "../../../images/dots.png";
import { menuOpen, menuClose } from "../../../features/menuSlice";
import ModalMenu from "./ModalMenu";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const HeaderMenu = ({ headerTitle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { menuToggle } = useSelector((state) => state.menu);

  const menuOpenHandler = () => {
    dispatch(menuOpen());
  };

  const menuCloseHandler = () => {
    dispatch(menuClose());
  };

  const logOut = () => {
    try {
      signOut(auth).then(() => {
        navigate("/");
      });
      dispatch(menuClose());
    } catch (error) {
      alert(error.code);
    }
  };

  return (
    <>
      <ModalMenu
        menuToggle={menuToggle}
        menuCloseHandler={menuCloseHandler}
        logOut={logOut}
        signOut={signOut}
      />
      <header className="modal-menu-header">
        <HeaderMenuBack />
        <div className="header-menu-title">
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
