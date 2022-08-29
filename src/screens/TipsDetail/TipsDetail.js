//detail
import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./TipsDetail.css";

const TipsDetail = () => {
  const params = useParams();
  const tipsData = useSelector((state) => state.tips.tipsData);
  const tipsDetail = tipsData.filter((tips) => tips.id === params.id);
  const currentUserId = "aaa";

  return (
    <>
      <div className="inner" style={style.inner}>
        <HeaderMenu headerTitle="Tips詳細" />
        <div className="tips">
          <p className="tips-title">{tipsDetail[0].title}</p>
          <div className="tips-code">
            <img src={tipsDetail[0].img} alt="" />
          </div>

          <p className="tips-desc">{tipsDetail[0].description}</p>
        </div>
      </div>
      {currentUserId === tipsDetail[0].userId && (
        <Link to="/postdelete">
          <CommonButton commonBtnText="削除する" active="active" />
        </Link>
      )}
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

export default TipsDetail;
