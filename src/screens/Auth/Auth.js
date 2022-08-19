//login-input login-confirm login-failed signup signup-failed
import React from "react";
import InputForm from "../../components/Auth/molecules/InputForm";
import InputFormHeader from "../../components/Auth/molecules/InputFormHeader";
import "./Auth.css";

const Auth = () => {
  return (
    <>
      <InputFormHeader
        title="ログイン"
        desc="メールアドレスとパスワードを入力してください"
      />
      <InputForm />
    </>
  );
};

export default Auth;
