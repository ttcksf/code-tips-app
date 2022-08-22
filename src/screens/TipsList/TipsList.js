//index
import React from "react";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import { tipsData } from "../../data/tipsData";
import "./TipsList.css";

const TipsList = () => {
  console.log(tipsData[0].img);
  return (
    <>
      <div className="inner" style={style.inner}>
        <HeaderMenu headerTitle="Tips一覧" />
        <div className="tips-list">
          {tipsData.map((tips, id) => {
            return (
              <div className="tips">
                <div className="tips-code" key={id}>
                  <img src={tips.img} alt="" />
                </div>
                <p className="tips-auther">
                  <span>ID : {tips.id} さん</span>の投稿
                </p>
                <p className="tips-title">{tips.title}</p>
                <p className="tips-desc">
                  {tips.description}
                  <span>...</span>
                </p>
              </div>
            );
          })}
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
