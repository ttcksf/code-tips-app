import React from "react";

const InputButton = ({ btnText, isInputButton, onClick }) => {
  return (
    <div className="form-btn">
      <button
        style={isInputButton ? style.formTrueButton : style.formFalseButton}
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
};

const style = {
  formTrueButton: {
    background: "#1877F2",
    color: "#fff",
  },
  formFalseButton: {
    background: "#eef1f4",
    color: "#667080",
  },
};

export default InputButton;
