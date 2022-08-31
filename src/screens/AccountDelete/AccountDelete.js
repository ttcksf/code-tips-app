//account-delete
import React from "react";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./AccountDelete.css";

const AccountDelete = () => {
  const isPostingButton = true;

  return (
    <>
      <div className="inner" style={style.inner}>
        <HeaderMenu headerTitle="退会" />
        <div className="account-delete">
          <p>
            こちらの画面は退会処理になります。
            <br />
            退会されますと、過去に投稿されたデータは全て削除されてしまいます。
            <br />
            <br />
            このまま退会して問題なければ以下のボタンをクリックすることで退会できます。
          </p>
        </div>
      </div>
      <CommonButton
        commonBtnText="退会する"
        isPostingButton={isPostingButton}
        CommonButtonLink=""
      />
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

export default AccountDelete;
