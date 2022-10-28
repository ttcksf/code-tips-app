//new-post new-post-confirm
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import { auth, db, storage } from "../../firebase";
import "./NewPost.css";

const NewPost = () => {
  const [tipsImg, setTipsImg] = useState(null);
  const [tipsTitle, setTipsTitle] = useState("");
  const [tipsDesc, setTipsDesc] = useState("");
  const [isPostingButton, setIsPostingButton] = useState(false);
  const changeInputTitle = (e) => setTipsTitle(e.target.value);
  const changeInputDesc = (e) => setTipsDesc(e.target.value);
  const navigate = useNavigate();
  const currentUserId = auth.currentUser.email;

  useEffect(() => {
    if (tipsTitle !== "" && tipsDesc !== "") {
      setIsPostingButton(true);
    } else {
      setIsPostingButton(false);
    }
  }, [tipsDesc, tipsTitle]);

  const imageChange = (e) => {
    e.preventDefault();

    if (e.target.files[0]) {
      const imgReader = new FileReader();
      const selectedFile = e.target.files[0];
      imgReader.readAsDataURL(selectedFile);
      imgReader.onload = (readerEvent) => {
        setTipsImg(readerEvent.target.result);
      };
    } else {
      setTipsImg(null);
    }
  };

  const submitNewTips = async (e) => {
    if (isPostingButton) {
      if (tipsImg) {
        let currentDate = Date();
        let tipsThumbnail = ref(
          storage,
          `tips/${currentUserId}/${currentDate}`
        );
        await uploadString(tipsThumbnail, tipsImg, "data_url").then(
          async (snapshot) => {
            const downloadThumbnail = await getDownloadURL(tipsThumbnail);
            await addDoc(collection(db, "tips"), {
              userId: currentUserId,
              title: tipsTitle,
              desc: tipsDesc,
              // timestamp: serverTimestamp(),
              timestamp: currentDate,
              thumbnail: downloadThumbnail,
            });
          }
        );
      } else {
        await addDoc(collection(db, "tips"), {
          userId: currentUserId,
          title: tipsTitle,
          desc: tipsDesc,
          timestamp: serverTimestamp(),
        });
      }
      setTipsTitle("");
      setTipsImg(null);
      navigate("/tipsList");
    }
  };

  return (
    <>
      <div className="tips-new-inner">
        <HeaderMenu headerTitle="Tips作成" />
        <div className="inner">
          <div className="new-post-img">
            <input
              type="file"
              name="tipsImg"
              id="tipsImg"
              onChange={imageChange}
            />
            {tipsImg && (
              <img className="preview-post-img" src={tipsImg} alt="" />
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
      </div>
      <CommonButton
        commonBtnText="投稿する"
        isPostingButton={isPostingButton}
        onClick={(e) => submitNewTips(e)}
      />
    </>
  );
};

export default NewPost;
