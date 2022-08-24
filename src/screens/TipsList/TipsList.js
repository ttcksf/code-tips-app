//index
import React from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import { tipsData } from "../../data/tipsData";
import "./TipsList.css";

const TipsList = () => {
  const navigate = useNavigate();

  const currentUserId = "aaa";
  return (
    <>
      <div className="inner" style={style.inner}>
        <HeaderMenu headerTitle="Tips一覧" />
        <div className="tips-list">
          {tipsData.map((tips, index) => {
            console.log(currentUserId);
            return (
              <div
                className="tips"
                onClick={() =>
                  navigate(`/tips/${tips.id}`, {
                    state: { currentUserId: currentUserId, tipsData: tips },
                  })
                }
                key={index}
              >
                <div className="tips-code">
                  <img src={tips.img} alt="" />
                </div>
                {currentUserId === tips.userId ? (
                  <p className="tips-auther myid">
                    <span>あなた</span>の投稿
                  </p>
                ) : (
                  <p className="tips-auther">
                    <span>ID : {tips.id} さん</span>の投稿
                  </p>
                )}

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
