//detail
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import { db, storage } from "../../firebase";
import "./TipsDetail.css";

const TipsDetail = () => {
  const location = useLocation();
  const { title, desc, userId, thumbnail, tipsId } = location.state.tip;

  const navigate = useNavigate();

  const currentUserId = "aaa";
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
            navigate("/postdelete", {
              state: { title, desc, userId, thumbnail, tipsId },
            })
          }
        />
      )}
    </>
  );
};

export default TipsDetail;
