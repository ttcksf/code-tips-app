import React from "react";

const InputForm = () => {
  return (
    <div className="input-form">
      <form>
        <dl>
          <div className="input-row">
            <dt>
              <label className="label" for="email">
                メールアドレス
              </label>
            </dt>
            <dd>
              <input type="email" id="email" />
            </dd>
          </div>
          <div className="input-row">
            <dt>
              <label for="password">パスワード</label>
            </dt>
            <dd>
              <input type="password" id="password" />
            </dd>
          </div>
        </dl>
        <div className="input-check">
          <label for="check" className="check-box">
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
