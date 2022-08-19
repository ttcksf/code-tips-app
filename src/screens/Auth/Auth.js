//login-input login-confirm login-failed signup signup-failed
import React from "react";
import InputFormHeader from "../../components/Auth/molecules/InputFormHeader";
import "./Auth.css";

const Auth = () => {
  return (
    <>
      <InputFormHeader
        title="ログイン"
        desc="メールアドレスとパスワードを入力してください"
      />
    </>
  );
};

export default Auth;
