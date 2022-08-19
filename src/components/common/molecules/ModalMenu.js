import React from "react";
import HeaderMenuBack from "../atoms/HeaderMenuBack";
import TipsListImg from "../../../images/home.png";
import NewPostImg from "../../../images/pencil.png";
import LogOutImg from "../../../images/door.png";
import SignOutImg from "../../../images/human.png";

const ModalMenu = ({ menuOpen, menuCloseHandler }) => {
  return (
    <>
      <div className="modal-area" style={menuOpen ? { left: 0 } : {}}>
        <header className="modal-menu-header">
          <div onClick={menuCloseHandler}>
            <HeaderMenuBack />
          </div>
          <div>
            <p>メニュー</p>
          </div>
          <div></div>
        </header>
        <main className="modal-menu-list">
          <ul>
            <li>
              <a href="#">
                <img src={TipsListImg} alt="TipsList" />
                <span>Tips一覧</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={NewPostImg} alt="NewPost" />
                <span>Tips作成</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={LogOutImg} alt="LogOut" />
                <span>ログアウト</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={SignOutImg} alt="SignOut" />
                <span>退会</span>
              </a>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
};

export default ModalMenu;
