import React from "react";

const InputButton = ({ btnText }) => {
  return (
    <div class="form-btn">
      <button>{btnText}</button>
      {/* <button className="active">{btnText}</button> */}
    </div>
  );
};

export default InputButton;
