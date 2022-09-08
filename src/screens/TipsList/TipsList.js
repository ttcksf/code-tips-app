//index
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./TipsList.css";
import { fetchTips } from "../../features/tipsSlice";

const TipsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: tips } = useSelector((state) => state.tips);

  const currentUserId = "aaa";
  const isPostingButton = true;

  const linkToNewpost = () => {
    isPostingButton && navigate("/newpost");
  };

  useEffect(() => {
    dispatch(fetchTips());
  }, []);

  return (
    <>
      <div className="inner">
        <HeaderMenu headerTitle="Tips一覧" />
        <div className="tips-list">
          {tips.map((tip) => {
            return (
              <div
                className="tips"
                onClick={() =>
                  navigate(`/tips/${tip.tipsId}`, { state: { tip } })
                }
                key={tip.tipsId}
              >
                <div className="tips-code">
                  <img src={tip.thumbnail} alt="" />
                </div>
                {currentUserId === tip.userId ? (
                  <p className="tips-auther myid">
                    <span>あなた</span>の投稿
                  </p>
                ) : (
                  <p className="tips-auther">
                    <span>ID : {tip.id} さん</span>の投稿
                  </p>
                )}

                <p className="tips-title">{tip.title}</p>
                <p className="tips-desc">
                  {tip.desc}
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
        onClick={() => linkToNewpost()}
      />
    </>
  );
};

export default TipsList;
