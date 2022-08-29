import React from "react";
import { Link } from "react-router-dom";
import "./CommonButton.css";

const CommonButton = ({ isPostingButton, commonBtnText }) => {
  return (
    <div className="common-footer">
      <Link to="/tipslist">
        <button
          style={
            isPostingButton ? style.commonTrueButton : style.commonFalseButton
          }
        >
          {commonBtnText}
        </button>
      </Link>
    </div>
  );
};

const style = {
  commonTrueButton: {
    background: "#1877f2",
    color: "#fff",
  },
  commonFalseButton: {
    background: "#EEF1F4",
    color: "#667080",
  },
};

export default CommonButton;
