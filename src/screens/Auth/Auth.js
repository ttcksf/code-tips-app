//login-input login-confirm login-failed signup signup-failed
import React, { useState } from "react";
import InputForm from "../../components/Auth/molecules/InputForm";
import InputButton from "../../components/Auth/atoms/InputButton";
import InputFormHeader from "../../components/Auth/molecules/InputFormHeader";
import "./Auth.css";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [fromData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputFormChange = (e) => {
    //name属性を含む要素の値をとる
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="inner" style={style.inner}>
        <InputFormHeader
          title={isSignUp ? "ログイン" : "新規登録"}
          desc={
            authError
              ? "入力情報が一致しませんでした。\nもう一度お試しください。"
              : "メールアドレスとパスワードを入力してください"
          }
          errorMsg={errorMsg}
        />
        <InputForm />
        <InputButton btnText={isSignUp ? "ログイン" : "新規登録"} />
        <div className="form-switch">
          <p>
            {isSignUp ? (
              <span>
                アカウントをお持ちでないですか?<button>&nbsp;新規登録</button>
              </span>
            ) : (
              <span>
                アカウントをお持ちですか?<button>&nbsp;ログイン</button>
              </span>
            )}
          </p>
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
