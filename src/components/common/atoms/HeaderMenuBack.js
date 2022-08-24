import React from "react";
import BackImg from "../../../images/back-arrow.png";
import { useNavigate } from "react-router-dom";

const HeaderMenuBack = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="back-menu-img" onClick={() => navigate(-1)}>
        <img src={BackImg} alt="back" />
      </div>
    </>
  );
};

export default HeaderMenuBack;
