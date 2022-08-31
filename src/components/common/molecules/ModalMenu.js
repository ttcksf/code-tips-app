import React from "react";
import "./ModalMenu.css";
import TipsListImg from "../../../images/home.png";
import NewPostImg from "../../../images/pencil.png";
import LogOutImg from "../../../images/door.png";
import SignOutImg from "../../../images/human.png";
import CloseImg from "../../../images/close.png";
import { Link, useNavigate } from "react-router-dom";

const ModalMenu = ({ menuToggle, menuCloseHandler }) => {
  const navigate = useNavigate();

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
            <Link to="/tipslist" onClick={menuCloseHandler}>
              <li>
                <img src={TipsListImg} alt="TipsList" />
                <span>Tips一覧</span>
              </li>
            </Link>
            <Link to="/newpost" onClick={menuCloseHandler}>
              <li>
                <img src={NewPostImg} alt="NewPost" />
                <span>Tips作成</span>
              </li>
            </Link>
            <Link to="/" onClick={menuCloseHandler}>
              <li>
                <img src={LogOutImg} alt="LogOut" />
                <span>ログアウト</span>
              </li>
            </Link>
            <Link to="/accountdelete" onClick={menuCloseHandler}>
              <li>
                <img src={SignOutImg} alt="SignOut" />
                <span>退会</span>
              </li>
            </Link>
          </ul>
        </main>
      </div>
    </>
  );
};

export default ModalMenu;
