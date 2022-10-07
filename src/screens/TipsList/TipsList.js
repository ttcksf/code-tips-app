//index
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./TipsList.css";
import { fetchTips } from "../../features/tipsSlice";
import { logIn } from "../../features/userSlice";
import { auth } from "../../firebase";

const TipsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stateUser = useSelector((state) => state.user);
  let currentUserId = "";
  if (stateUser.data.length !== 0) {
    currentUserId = stateUser.data.email;
  } else {
    if (auth.currentUser) {
      currentUserId = auth.currentUser.email;
    }
  }

  // const currentUserId = currentUser.data.email;
  const { data: tips } = useSelector((state) => state.tips);

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
            console.log("currentUserId-list: ");
            console.log(currentUserId);
            return (
              <div
                className="tips"
                onClick={() =>
                  navigate(`/tips/${tip.tipsId}`, {
                    state: { tip, currentUserId },
                  })
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
                    <span>ID : {tip.userId} さん</span>の投稿
                  </p>
                )}

                <p className="tips-title">{tip.title}</p>

                <p className="tips-desc">{tip.desc}</p>
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
