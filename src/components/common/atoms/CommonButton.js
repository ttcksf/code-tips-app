import React from "react";

const CommonButton = ({ commonBtnText, active }) => {
  return (
    <div className="common-footer">
      <button className={active}>{commonBtnText}</button>
    </div>
  );
};

export default CommonButton;
