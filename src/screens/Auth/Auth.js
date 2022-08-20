//login-input login-confirm login-failed signup signup-failed
import React from "react";
import InputForm from "../../components/Auth/molecules/InputForm";
import InputButton from "../../components/Auth/atoms/InputButton";
import InputFormHeader from "../../components/Auth/molecules/InputFormHeader";
import "./Auth.css";

const Auth = () => {
  return (
    <>
      <div className="inner" style={style.inner}>
        <InputFormHeader
          title="ログイン"
          desc="メールアドレスとパスワードを入力してください"
        />
        <InputForm />
        <InputButton btnText="ログイン" />
        <div className="form-switch">
          <span>
            アカウントをお持ちでないですか?<a href="#"> 新規登録</a>
          </span>
        </div>
      </div>
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

export default Auth;
