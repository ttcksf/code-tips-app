//mypost-delete
import React from "react";
import { useLocation } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./MypostDelete.css";

const MypostDelete = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="inner" style={style.inner}>
        <HeaderMenu headerTitle="Tips削除" />
        <div className="mypost-delete">
          <p>
            Tipsは一度削除すると元に戻すことができません。
            <br />
            よろしければ削除ボタンをクリックしてください。
          </p>
        </div>
      </div>
      <CommonButton commonBtnText="削除する" active="active" />
    </>
  );
};

const style = {
  inner: {
    boxSizing: "border-box",
    width: "100%",
    overflow: "hidden",
  },
};

export default MypostDelete;
