//index
import React from "react";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./TipsList.css";

const TipsList = () => {
  return (
    <>
      <div className="inner" style={style.inner}>
        <HeaderMenu headerTitle="Tips一覧" />
        <div className="tips-list">
          <div className="tips">
            <div className="tips-code"></div>
            <p className="tips-auther">
              <span>ID : 0001 さん</span>の投稿
            </p>
            <p className="tips-title">JavaScriptで文字を出力する方法</p>
            <p className="tips-desc">
              JavaScriptではconsole.log()という関数があります。 こちらは
              <span>...</span>
            </p>
          </div>
          <div className="tips">
            <div className="tips-code"></div>
            <p className="tips-auther">
              <span>ID : 0002 さん</span>の投稿
            </p>
            <p className="tips-title">JavaScriptで文字を出力する方法</p>
            <p className="tips-desc">
              JavaScriptではconsole.log()という関数があります。 こちらは
              <span>...</span>
            </p>
          </div>
          <div className="tips">
            <div className="tips-code"></div>
            <p className="tips-auther active">
              <span>あなた</span>の投稿
            </p>
            <p className="tips-title">JavaScriptで文字を出力する方法</p>
            <p className="tips-desc">
              JavaScriptではconsole.log()という関数があります。 こちらは
              <span>...</span>
            </p>
          </div>
        </div>
      </div>
      <CommonButton commonBtnText="新規投稿" />
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

export default TipsList;
