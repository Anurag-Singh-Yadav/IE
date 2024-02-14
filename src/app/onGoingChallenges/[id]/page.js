"use client";
import QuestionRender from "@/app/Components/templets/QuestionRender";
import WebsiteBanner from "@/app/Components/templets/WebsiteBanner";
import axios from "axios";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page({ params, imgSrc }) {
  const query = useSearchParams();
  const [questionsDetail, setQuestionsDetail] = useState(null);
  const [userFilter, setUserFilter] = useState([]);


  const fetchQuestions = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_CHALLENGE_BY_ID}/${params.id}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("respone of the id challenges",response.data);
      setQuestionsDetail(response?.data?.data);
    } catch (e) {
      console.log("hfksdf")
      console.log(e);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      <div>
        <WebsiteBanner
          imgSrc={"onGoingChallenges.gif"}
          BtnName={questionsDetail?.challengeType}
        ></WebsiteBanner>
      </div>

      {questionsDetail && (
        <div>
          <div className="main-container font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Start Your{" "}
            <span className="text-green-bg underline">Challenges</span>
          </div>

          <div>
            <QuestionRender
              setUserFilter={setUserFilter}
              questionsDetail={questionsDetail}
            ></QuestionRender>
          </div>
        </div>
      )}
    </div>
  );
}
