import React from "react";
import { useNavigate } from "react-router-dom";
import "./CommonButton.css";

const CommonButton = ({ isPostingButton, commonBtnText, CommonButtonLink }) => {
  const navigate = useNavigate();
  console.log(CommonButtonLink);
  return (
    <div className="common-footer">
      <button
        style={
          isPostingButton ? style.commonTrueButton : style.commonFalseButton
        }
        onClick={() => navigate(`/${CommonButtonLink}`)}
      >
        {commonBtnText}
      </button>
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
