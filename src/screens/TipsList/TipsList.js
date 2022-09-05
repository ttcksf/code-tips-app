//index
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./TipsList.css";
import { collection, doc, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const TipsList = () => {
  const navigate = useNavigate();

  const currentUserId = "aaa";
  const isPostingButton = true;

  const [tips, setTips] = useState([]);
  useEffect(() => {
    const tipsCollection = collection(db, "tips");
    getDocs(tipsCollection).then((querySnapshot) => {
      setTips(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
    console.log(tips);
  }, []);
  return (
    <>
      <div className="inner">
        <HeaderMenu headerTitle="Tips一覧" />
        <div className="tips-list">
          {tips.map((tip, index) => {
            return (
              <div
                className="tips"
                onClick={() => navigate(`/tips/${tip.id}`)}
                key={index}
              >
                <div className="tips-code">
                  {/* <img src={tip.img} alt="" /> */}
                </div>
                {currentUserId === tip.userId ? (
                  <p className="tips-auther myid">
                    <span>あなた</span>の投稿
                  </p>
                ) : (
                  <p className="tips-auther">
                    <span>ID : {tip.id} さん</span>の投稿
                  </p>
                )}

                <p className="tips-title">{tip.title}</p>
                <p className="tips-desc">
                  {tip.desc}
                  <span>...</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <CommonButton
        commonBtnText="新規投稿"
        isPostingButton={isPostingButton}
        CommonButtonLink="newpost"
      />
    </>
  );
};

export default TipsList;
