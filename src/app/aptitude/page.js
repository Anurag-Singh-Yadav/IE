"use client";
import React, { useEffect, useState } from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import TopicsTemplets from "../Components/templets/TopicsTemplets";
import {
  getAllAptitudeQuestions,
  postAptitudeQuestions,
} from "../fetchDetails/aptitudeEndPoints";
import PreRender from "../Components/templets/PreRender";

function Aptitude() {
  const [allTopics, setAllTopics] = useState(null);

  const fetchAllTopics = async () => {
    try {
      const res = await getAllAptitudeQuestions();
      setAllTopics(res.data?.data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAllTopics();
  }, []);

  return (
    <div>
      <WebsiteBanner
        imgSrc={`dsaPractise.png`}
        heading="Aptitude"
        paragraph="Aptitude is the natural ability to do something. Some people are born with natural aptitudes for things, like math or art. Other people develop aptitudes through their experiences and education."
        BtnName="Learn More"
      />
      <div className="main-container mb-7">
        <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Explore Best{" "}
          <span className="text-green-bg underline">Aptitude Questions</span>
        </div>
        {allTopics && (
          <div>
            <div className="bg-green-bg py-2 mt-4 mb-6 text-center rounded-md text-white text-sm s2:text-base md:text-lg font-medium">
              Aptitude Based Problems
            </div>
            <TopicsTemplets topics={allTopics} />
          </div>
        )}
        {!allTopics && (
          <div className="flex gap-3">
            <PreRender count={4} color={`#f3f3f3`} height={50} />
            <PreRender count={4} color={`#f3f3f3`} height={50} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Aptitude;
