//account-delete
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import { auth } from "../../firebase";
import "./AccountDelete.css";

const AccountDelete = () => {
  const [signOutError, setSignOutError] = useState(false);
  const navigate = useNavigate();
  const [isPostingButton, setIsPostingButton] = useState(false);

  const stateUser = useSelector((state) => state.user);
  let deleteUser = auth.currentUser;
  if (stateUser.data.length !== 0) {
    deleteUser = stateUser;
  } else {
    if (auth.currentUser) {
      deleteUser = auth.currentUser;
    }
  }

  console.log("deleteuser: ");
  console.log(deleteUser);

  const signOut = () => {
    try {
      deleteUser.delete().then(() => navigate("/"));
    } catch (error) {
      setSignOutError(true);
    }
  };

  const signOutDesc = () => {
    if (!signOutError) {
      if (deleteUser !== null) {
        return "こちらの画面は退会処理になります。\n退会されますと、過去に投稿されたデータは全て削除されてしまいます。\n\nこのまま退会して問題なければ以下のボタンをクリックすることで退会できます。";
      } else {
        return "退会処理に失敗しました。\nお手数ですが一つ前のページに戻って再度やり直してください。";
      }
    } else {
      return "退会処理に失敗しました。\nお手数ですが以下の宛先までお問い合わせください。\n\n\n【宛先】ttc0104ksf1993@gmail.com";
    }
  };

  useEffect(() => {
    if (deleteUser !== null) {
      setIsPostingButton(true);
    } else {
      setIsPostingButton(false);
    }
  }, []);

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
        onClick={signOut}
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
