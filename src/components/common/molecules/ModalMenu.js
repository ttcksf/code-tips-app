import React from "react";
import HeaderMenuBack from "../atoms/HeaderMenuBack";

const ModalMenu = () => {
  return (
    <>
      <div className="inner">
        <header className="modal-menu-header">
          <HeaderMenuBack />
          <div>
            <p>メニュー</p>
          </div>
          <div></div>
        </header>
      </div>
    </>
  );
};

export default ModalMenu;
