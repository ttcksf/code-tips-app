//new-post new-post-confirm
import { async } from "@firebase/util";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import { db, storage } from "../../firebase";
import "./NewPost.css";

const NewPost = () => {
  const [tipsImg, setTipsImg] = useState(null);
  const [tipsTitle, setTipsTitle] = useState("");
  const [tipsDesc, setTipsDesc] = useState("");
  const [isPostingButton, setIsPostingButton] = useState(false);
  const changeInputTitle = (e) => setTipsTitle(e.target.value);
  const changeInputDesc = (e) => setTipsDesc(e.target.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (tipsTitle !== "" && tipsDesc !== "") {
      setIsPostingButton(true);
    } else {
      setIsPostingButton(false);
    }
  }, [tipsDesc, tipsTitle]);

  const imageChange = (e) => {
    const imgReader = new FileReader();
    if (e.target.files[0]) {
      imgReader.readAsDataURL(e.target.files[0]);
      imgReader.onload = (readerEvent) => {
        setTipsImg(readerEvent.target.result);
      };
    }
  };

  const submitNewTips = async (e) => {
    const tipsDocs = await addDoc(collection(db, "tips"), {
      useId: "aaa",
      title: tipsTitle,
      desc: tipsDesc,
    });
    const tipsThumbnail = ref(
      storage,
      `tips/${tipsDocs.id}/thumbnail_${tipsDocs.id}`
    );
    await uploadString(tipsThumbnail, tipsImg, "data_url").then(
      async (snapshot) => {
        const downloadThumbnail = await getDownloadURL(tipsThumbnail);
        await updateDoc(doc(db, "tips", tipsDocs.id), {
          thumbnail: downloadThumbnail,
        });
      }
    );
    setTipsTitle("");
    setTipsImg(null);

    if (isPostingButton && navigate("/tipslist"));
  };

  return (
    <>
      <div className="inner">
        <HeaderMenu headerTitle="Tips作成" />
        <div className="new-post-img">
          <input
            type="file"
            name="tipsImg"
            id="tipsImg"
            onChange={imageChange}
          />
          {tipsImg && (
            <img className="preview-post-img" src={tipsImg.tipsImg} alt="" />
          )}
        </div>
        <div className="new-post-title">
          <input
            type="text"
            placeholder="タイトル"
            value={tipsTitle}
            onChange={changeInputTitle}
          />
        </div>
        <div className="new-post-desc">
          <textarea
            cols={50}
            rows={10}
            placeholder="説明文"
            value={tipsDesc}
            onChange={changeInputDesc}
          />
        </div>
      </div>
      <CommonButton
        commonBtnText="投稿する"
        isPostingButton={isPostingButton}
        onClick={() => submitNewTips()}
      />
    </>
  );
};

export default NewPost;
