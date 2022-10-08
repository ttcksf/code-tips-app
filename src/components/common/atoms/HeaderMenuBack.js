import React from "react";
import BackImg from "../../../images/back-arrow.png";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderMenuBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/tipsList" ? (
        <div className="back-menu-img"></div>
      ) : (
        <div className="back-menu-img" onClick={() => navigate(-1)}>
          <img src={BackImg} alt="back" />
        </div>
      )}
    </>
  );
};

export default HeaderMenuBack;
