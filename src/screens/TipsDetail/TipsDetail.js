//detail
import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./TipsDetail.css";

const TipsDetail = () => {
  const location = useLocation();
  console.log("location: ", location);

  const currentUserId = "aaa";
  const isPostingButton = true;

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
        <Link to="/postdelete">
          <CommonButton
            commonBtnText="削除する"
            isPostingButton={isPostingButton}
            CommonButtonLink="mypostdelete"
          />
        </Link>
      )}
    </>
  );
};

export default TipsDetail;
