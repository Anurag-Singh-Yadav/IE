"use client";
import React, { useEffect, useState } from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import { topics } from "./Topics.js";
import TopicsTemplets from "../Components/templets/TopicsTemplets";
import ScoreMeter from "../Components/templets/ScoreMeter";
import axios from "axios";
import Cookies from "js-cookie";
function Page() {
  const [userQuestoinsDetails, setUserQuestionsDetails] = useState(null);
  const getUserDetails = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_QUESTIONS_SOLVED_BY_USER}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setUserQuestionsDetails(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <div>
        <WebsiteBanner
          imgSrc={"dsaPractise.png"}
          BtnName={"Practice "}
        ></WebsiteBanner>
      </div>

      <div className="bg-[url('/dsaPrac.svg')] pt-4 pb-8 main-container">
        <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Explore Best{" "}
          <span className="text-green-bg underline">DSA Questions</span>
        </div>

        <div className="grid grid-col-1 w-full nmd:grid-cols-7">

          <div className="nmd:col-span-4">
            <div className="bg-green-bg py-2 mt-4 mb-6 text-center rounded-md text-white text-sm s2:text-base md:text-lg font-medium">
              Data Structures and Algorithms
            </div>

            <div>
              <TopicsTemplets topics={topics}></TopicsTemplets>
            </div>
          </div>

          {userQuestoinsDetails && (
            <div className="nmd:col-span-3 w-full">
              <div className="flex justify-center items-center">
                <ScoreMeter
                  totalQuestion={userQuestoinsDetails.totalQuestions}
                  solvedQuestion={userQuestoinsDetails.solvedQuestions}
                  easy={userQuestoinsDetails.easy}
                  medium={userQuestoinsDetails.medium}
                  hard={userQuestoinsDetails.hard}
                ></ScoreMeter>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Page;
