import HeaderMenuBack from "../atoms/HeaderMenuBack";
import MenuImg from "../../../images/dots.png";

const HeaderMenu = ({ headerTitle, menuToggleHandler }) => {
  return (
    <>
      <header className="modal-menu-header">
        <HeaderMenuBack />
        <div className="header-menu-title">
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
