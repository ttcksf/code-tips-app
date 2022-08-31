//mypost-delete
import React from "react";
import { Link } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./MypostDelete.css";

const MypostDelete = () => {
  return (
    <>
      <div className="inner">
        <HeaderMenu headerTitle="Tips削除" />
        <div className="mypost-delete">
          <p>
            Tipsは一度削除すると元に戻すことができません。
            <br />
            よろしければ削除ボタンをクリックしてください。
          </p>
        </div>
      </div>
      <Link to="/tipslist">
        <CommonButton commonBtnText="削除する" active="active" />
      </Link>
    </>
  );
};

export default MypostDelete;
