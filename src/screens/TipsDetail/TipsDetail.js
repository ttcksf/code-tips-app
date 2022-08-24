//detail
import React from "react";
import { useParams } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./TipsDetail.css";

const TipsDetail = () => {
  const params = useParams();
  // console.log(params);
  return (
    <>
      <div className="inner" style={style.inner}>
        <HeaderMenu headerTitle="Tips詳細" />
        <div className="tips">
          <p className="tips-title">JavaScriptで文字を出力する方法</p>
          <div className="tips-code"></div>

          <p className="tips-desc">
            JavaScriptではconsole.log()という関数があります。
            こちらはブラウザの検証ツールで確認できるもので、文字や変数の値など様々な内容に対応しています。
            文字を出力する場合には、「””」で文字全体を囲う必要があるのがポイントです。
          </p>
        </div>
      </div>
      {/* 自分の投稿では表示されない予定 */}
      <CommonButton commonBtnText="削除する" />
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

export default TipsDetail;
