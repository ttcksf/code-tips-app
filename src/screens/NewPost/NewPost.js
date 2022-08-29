//new-post new-post-confirm
import { useEffect, useState } from "react";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./NewPost.css";

const NewPost = () => {
  const [tipsImg, setTipsImg] = useState(null);
  const [tipsTitle, setTipsTitle] = useState("");
  const [tipsDesc, setTipsDesc] = useState("");
  const [isPostingButton, setIsPostingButton] = useState(false);
  const changeInputTitle = (e) => setTipsTitle(e.target.value);
  const changeInputDesc = (e) => setTipsDesc(e.target.value);

  useEffect(() => {
    if (tipsTitle !== "" && tipsDesc !== "") {
      setIsPostingButton(true);
    } else {
      setIsPostingButton(false);
    }
  }, [tipsDesc, tipsTitle]);

  const imageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imgFile = e.target.files[0];
      setTipsImg({
        tipsImg: URL.createObjectURL(imgFile),
      });
    }
  };

  return (
    <>
      <div className="inner" style={style.inner}>
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
        CommonButtonLink="tipslist"
      />
    </>
  );
};

const style = {
  inner: {
    boxSizing: "border-box",
    width: "100%",
    overflow: "hidden",
  },
};

export default NewPost;
