//login-input login-confirm login-failed signup signup-failed
import React, { useEffect, useState } from "react";
import InputButton from "../../components/Auth/atoms/InputButton";
import InputFormHeader from "../../components/Auth/molecules/InputFormHeader";
import "./Auth.css";
import InputText from "../../components/Auth/atoms/InputText";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [isInputButton, setIsInputButton] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const switchRegister = () => {
    setIsSignUp(false);
  };
  const switchLogin = () => {
    setIsSignUp(true);
  };

  const authDesc = () => {
    if (authError === true) {
      if (isSignUp) {
        return "入力情報が一致しませんでした。\nもう一度お試しください。";
      } else {
        return "登録できませんでしたので、\nもう一度お試しください。\n既にアカウントをお持ちの場合は、ログイン画面よりログインしてください。";
      }
    } else {
      return "メールアドレスとパスワードを入力してください";
    }
  };

  const inputFormChange = (e) => {
    //name属性を含む要素の値をとる
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData.email);
  };

  const submitFormData = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
      } else {
        await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
      }
      navigate("/tipslist");
    } catch (error) {
      setAuthError(true);
    }
  };

  useEffect(() => {
    if (formData.email !== "" && formData.password !== "") {
      setIsInputButton(true);
    } else {
      setIsInputButton(false);
    }
  }, [formData]);
  return (
    <>
      <div className="inner">
        <InputFormHeader
          title={isSignUp ? "ログイン" : "新規登録"}
          desc={authDesc()}
          descStyle={authError && "error"}
        />
        <div className="input-form">
          <form>
            <dl>
              <InputText
                labelText="メールアドレス"
                labelFor="email"
                inputType="text"
                inputId="email"
                inputName="email"
                value={formData.email}
                onChange={inputFormChange}
              />
              <InputText
                labelText="パスワード"
                labelFor="password"
                inputType="password"
                inputId="password"
                inputName="password"
                value={formData.password}
                onChange={inputFormChange}
              />
            </dl>
            <div className="input-check">
              <label htmlFor="check" className="check-box">
                <input id="check" type="checkbox" />
                <span className="check-text">記憶する</span>
              </label>
              <span className="forget-password">
                パスワードをお忘れですか？
              </span>
            </div>
          </form>
        </div>
        <InputButton
          btnText={isSignUp ? "ログイン" : "新規登録"}
          isInputButton={isInputButton}
          onClick={(e) => submitFormData(e)}
        />
        <div className="form-switch">
          <p>
            {isSignUp ? (
              <span>
                アカウントをお持ちでないですか?
                <button onClick={() => switchRegister()}>&nbsp;新規登録</button>
              </span>
            ) : (
              <span>
                アカウントをお持ちですか?
                <button onClick={() => switchLogin()}>&nbsp;ログイン</button>
              </span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
