import React from "react";

const CommonButton = ({ commonBtnText }) => {
  return (
    <div className="common-footer">
      <button>{commonBtnText}</button>
      {/* <button className="active">新規投稿</button> */}
    </div>
  );
};

export default CommonButton;
