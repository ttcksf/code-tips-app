//detail
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./TipsDetail.css";

const TipsDetail = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  console.log(params);
  return (
    <>
      <div className="inner" style={style.inner}>
        <HeaderMenu headerTitle="Tips詳細" />
        <div className="tips">
          <p className="tips-title">{location.state.tipsData.title}</p>
          <div className="tips-code">
            <img src={location.state.tipsData.img} alt="" />
          </div>

          <p className="tips-desc">{location.state.tipsData.description}</p>
        </div>
      </div>
      {location.state.currentUserId === location.state.tipsData.userId && (
        <CommonButton commonBtnText="削除する" active="active" />
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
