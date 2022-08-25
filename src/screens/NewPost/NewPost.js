//new-post new-post-confirm
import React from "react";
import { useState, useRef } from "react";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./NewPost.css";

const NewPost = () => {
  const [tipsImg, setTipsImg] = useState(null);

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
          <input type="file" name="tipsImg" onChange={imageChange} />
          {tipsImg && (
            <img className="preview-post-img" src={tipsImg.tipsImg} alt="" />
          )}
        </div>
        <div className="new-post-title">
          <input type="text" placeholder="タイトル" />
        </div>
        <div className="new-post-desc">
          <textarea cols={50} rows={10} placeholder="説明文" />
        </div>
      </div>
      <CommonButton commonBtnText="投稿する" />
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
