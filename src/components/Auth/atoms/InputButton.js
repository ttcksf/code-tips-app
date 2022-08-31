import React from "react";
import { useNavigate } from "react-router-dom";

const InputButton = ({ btnText, isInputButton }) => {
  const navigate = useNavigate();
  const InputButtonNavigate = () => {
    isInputButton && navigate("/tipslist");
  };
  return (
    <div className="form-btn">
      <button
        style={isInputButton ? style.formTrueButton : style.formFalseButton}
        onClick={() => InputButtonNavigate()}
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
