import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import { db, storage } from "../../firebase";

const MyPostDelete = () => {
  const location = useLocation();
  console.log(location);
  const { imagePath, tipsId } = location.state;
  const navigate = useNavigate();

  const deleteMyTips = async () => {
    await deleteDoc(doc(db, "tips", tipsId));
    const deleteRef = ref(storage, imagePath);
    await deleteObject(deleteRef).then(() => {
      navigate("/tipsList");
    });
  };
  const isPostingButton = true;

  return (
    <>
      <div className="inner">
        <HeaderMenu headerTitle="Tips削除" />
        <div className="my-post-delete">
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

export default MyPostDelete;
