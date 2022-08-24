import React from "react";

const CommonButton = ({ commonBtnText }) => {
  return (
    <div className="common-footer">
      {/* <button className="active">{commonBtnText}</button> */}
      <button>{commonBtnText}</button>
    </div>
  );
};

export default CommonButton;
