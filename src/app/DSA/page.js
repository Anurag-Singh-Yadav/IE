"use client";
import React, { useEffect, useState } from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import TopicsTemplets from "../Components/templets/TopicsTemplets";
import ScoreMeter from "../Components/templets/ScoreMeter";
import axios from "axios";
import Cookies from "js-cookie";
import { getAllTopics } from "../fetchDetails/getAllTopics";
import PreRender from "../Components/templets/PreRender";
function Page() {
  const [userQuestoinsDetails, setUserQuestionsDetails] = useState(null);
  const [topics, setTopics] = useState(null);
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

  const getTopics = async () => {
    const res = await getAllTopics();
    console.log(res);
    setTopics(res);
  };

  useEffect(() => {
    getTopics();
    getUserDetails();
  }, []);

  return (
    <div>
      <div>
        <WebsiteBanner
          heading={"The world’s largest selection of online courses"}
          paragraph={
            "Millions of people have used Interview Express to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone."
          }
          imgSrc={"dsaPractise.png"}
          BtnName={"Practice "}
        ></WebsiteBanner>
      </div>

      <div className="bg-[url('/dsaPrac.svg')] dark:bg-[url('/dsaPrac-dark.svg')] pt-4 pb-8 main-container">
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
              <div className="flex justify-center nmd:sticky nmd:top-4 items-center">
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

          {!userQuestoinsDetails && (
            <div className="nmd:col-span-3 w-full mx-5 rounded-lg overflow-hidden">
              <div className="flex justify-center nmd:sticky nmd:top-4 items-center">
                <PreRender count={1} height={300} color={'#c2bfb8'} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
