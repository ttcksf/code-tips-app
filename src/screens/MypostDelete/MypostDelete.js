//mypost-delete
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import { db, storage } from "../../firebase";
import "./MypostDelete.css";

const MypostDelete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const deleteMyTips = async () => {
    await deleteDoc(doc(db, "tips", location.state.location.state.tip.tipsId));
    const deleteRef = ref(
      storage,
      `tips/${location.state.location.state.tip.tipsId}/thumbnail_${location.state.location.state.tip.tipsId}`
    );
    await deleteObject(deleteRef).then(() => {
      navigate("/tipslist");
    });
  };
  const isPostingButton = true;

  return (
    <>
      <div className="inner">
        <HeaderMenu headerTitle="Tips削除" />
        <div className="mypost-delete">
          <p>
            Tipsは一度削除すると元に戻すことができません。
            <br />
            よろしければ削除ボタンをクリックしてください。
          </p>
        </div>
      </div>

      <CommonButton
        commonBtnText="削除する"
        isPostingButton={isPostingButton}
        onClick={() => deleteMyTips()}
      />
    </>
  );
};

export default MypostDelete;
