import { listAll, ref } from "firebase/storage";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import { storage } from "../../firebase";
import "./TipsDetail.css";

const TipsDetail = () => {
  const location = useLocation();
  const { title, desc, userId, thumbnail, tipsId, timestamp } =
    location.state.tip;
  const currentUserId = location.state.currentUserId;
  const navigate = useNavigate();

  const listRef = ref(storage, `tips/${currentUserId}`);
  let imagePath = "";
  listAll(listRef).then((res) => {
    res.items.forEach((itemRef) => {
      imagePath = itemRef._location.path_;
      return imagePath;
    });
  });
  // TODO:isPostingButtonをuseStateで管理する
  const isPostingButton = true;

  return (
    <>
      <div className="inner">
        <HeaderMenu headerTitle="Tips詳細" />
        <div className="tips">
          <p className="tips-title">{title}</p>
          <div className="tips-code">
            <img src={thumbnail} alt="" />
          </div>

          <p className="tips-desc">{desc}</p>
        </div>
      </div>
      {currentUserId === userId && (
        <CommonButton
          commonBtnText="削除する"
          isPostingButton={isPostingButton}
          onClick={() =>
            navigate("/postDelete", {
              state: {
                title,
                desc,
                userId,
                thumbnail,
                tipsId,
                timestamp,
                currentUserId,
                imagePath,
              },
            })
          }
        />
      )}
    </>
  );
};

export default TipsDetail;
