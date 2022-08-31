import React, { useEffect, useState } from "react";
import InputText from "../atoms/InputText";

const InputForm = () => {
  return (
    <div className="input-form">
      <form>
        <dl>
          <InputText
            labelText="メールアドレス"
            labelFor="email"
            inputType="text"
            inputId="email"
          />
          <InputText
            labelText="パスワード"
            labelFor="password"
            inputType="password"
            inputId="password"
          />
        </dl>
        <div className="input-check">
          <label htmlFor="check" className="check-box">
            <input id="check" type="checkbox" />
            <span className="check-text">記憶する</span>
          </label>
          <span className="forget-password">パスワードをお忘れですか？</span>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
