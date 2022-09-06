//index
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../components/common/atoms/CommonButton";
import HeaderMenu from "../../components/common/molecules/HeaderMenu";
import "./TipsList.css";
import { collection, doc, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { fetchTips } from "../../features/tipsSlice";

const TipsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: tips, status } = useSelector((state) => state.tips);
  const currentUserId = "aaa";
  const isPostingButton = true;

  useEffect(() => {
    dispatch(fetchTips());
    // console.log("tips: ", tips);
  });

  // const [tips, setTips] = useState([]);
  // useEffect(() => {
  //   const tipsCollection = collection(db, "tips");
  //   getDocs(tipsCollection).then((querySnapshot) => {
  //     setTips(
  //       querySnapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }))
  //     );
  //   });
  // }, []);
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
