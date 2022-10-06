//account-delete
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import { auth } from "../../firebase";
import "./AccountDelete.css";

const AccountDelete = () => {
  const [signOutError, setSignOutError] = useState(false);
  const navigate = useNavigate();
  const isPostingButton = true;
  const signOut = () => {
    try {
      auth.currentUser.delete().then(() => navigate("/"));
    } catch (error) {
      setSignOutError(true);
    }
  };

  const signOutDesc = () => {
    if (!signOutError) {
      return "こちらの画面は退会処理になります。\n退会されますと、過去に投稿されたデータは全て削除されてしまいます。\n\nこのまま退会して問題なければ以下のボタンをクリックすることで退会できます。";
    } else {
      return "退会処理に失敗しました。\nお手数ですが以下の宛先までお問い合わせください。\n\n\n【宛先】ttc0104ksf1993@gmail.com";
    }
  };

  return (
    <>
      <div className="inner" style={style.inner}>
        <HeaderMenu headerTitle="退会" />
        <div className="account-delete">
          <p
            style={
              signOutError ? style.signOutFalseDesc : style.signOutTrueDesc
            }
          >
            {signOutDesc()}
          </p>
        </div>
      </div>
      <CommonButton
        commonBtnText="退会する"
        isPostingButton={isPostingButton}
        onClick={() => signOut()}
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
  signOutTrueDesc: {
    fontSize: "20px",
    margin: "0",
    color: "#4E4B66",
    whiteSpace: "pre-line",
  },
  signOutFalseDesc: {
    fontSize: "20px",
    margin: "0",
    color: "#EC1515",
    whiteSpace: "pre-line",
  },
};

export default AccountDelete;
