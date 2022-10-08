import React from "react";
import "./CommonButton.css";

const CommonButton = ({ isPostingButton, commonBtnText, onClick }) => {
  return (
    <div className="common-footer">
      {/* isInputButtonでクリックできるボタンとできないボタンを出力仕分けている */}
      {isPostingButton ? (
        <button style={style.commonTrueButton} onClick={onClick}>
          {commonBtnText}
        </button>
      ) : (
        <button style={style.commonFalseButton}>{commonBtnText}</button>
      )}
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
