//index
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./TipsList.css";

const TipsList = () => {
  const navigate = useNavigate();
  const tipsData = useSelector((state) => state.tips.tipsData);
  const currentUserId = "aaa";
  const isPostingButton = true;
  return (
    <>
      <div className="inner">
        <HeaderMenu headerTitle="Tips一覧" />
        <div className="tips-list">
          {tipsData.map((tips, index) => {
            return (
              <div
                className="tips"
                onClick={() => navigate(`/tips/${tips.id}`)}
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

      <CommonButton
        commonBtnText="新規投稿"
        isPostingButton={isPostingButton}
        CommonButtonLink="newpost"
      />
    </>
  );
};

export default TipsList;
