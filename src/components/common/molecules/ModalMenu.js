import React from "react";
import TipsListImg from "../../../images/home.png";
import NewPostImg from "../../../images/pencil.png";
import LogOutImg from "../../../images/door.png";
import SignOutImg from "../../../images/human.png";
import CloseImg from "../../../images/close.png";

const ModalMenu = ({ menuToggle, menuCloseHandler }) => {
  return (
    <>
      <div className="modal-area" style={menuToggle ? { left: 0 } : {}}>
        <header className="modal-menu-header">
          <div></div>
          <div>
            <p>メニュー</p>
          </div>
          <div className="modal-close" onClick={menuCloseHandler}>
            <img src={CloseImg} alt="close" />
          </div>
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
