import React from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import ScoreMeter from "../Components/templets/ScoreMeter";

function Aptitude() {
  return (
    <div>
      <WebsiteBanner
        imgSrc={``}
        BtnName={"Start Solving"}
        heading={"Aptitude Based Problems"}
        paragraph={`Solving aptitude-based problems helps engineers to develop critical thinking, problem-solving, and analytical skills, which are essential for their profession. It also improves their ability to handle complex real-world problems, enhances their logical reasoning, and enables them to make quick and effective decisions, which are critical in engineering projects and scenarios.`}
      />
      <div>
        <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Explore Best{" "}
          <span className="text-green-bg underline">Aptitude Questions</span>
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

export default Aptitude;
