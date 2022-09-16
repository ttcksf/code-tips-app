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
  const navigate = useNavigate();

  const currentUserId = "aaa";
  const isPostingButton = true;

  const deleteMyTips = async () => {
    // await deleteDoc(doc(db, "tips", location.state.tip.id));
    // const deleteRef = ref(
    //   storage,
    //   `tips/${location.state.tip.id}/thumbnail_${location.state.tip.id}`
    // );
    // await deleteObject(deleteRef);
  };

  return (
    <>
      <div className="inner">
        <HeaderMenu headerTitle="Tips詳細" />
        <div className="tips">
          <p className="tips-title">{location.state.tip.title}</p>
          <div className="tips-code">
            <img src={location.state.tip.thumbnail} alt="" />
          </div>

          <p className="tips-desc">{location.state.tip.desc}</p>
        </div>
      </div>
      {currentUserId === location.state.tip.userId && (
        <CommonButton
          commonBtnText="削除する"
          isPostingButton={isPostingButton}
          onClick={() => navigate("/postdelete")}
        />
      )}
    </>
  );
};

export default TipsDetail;
