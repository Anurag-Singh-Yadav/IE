'use client';
import React from "react";
import interviewData from "../../../../public/interviewData";
import InterviewCard from "./InterviewCard";
function InterviewExperiance() {
  return (
    <div className="py-8 px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-0 gap-4 justify-between items-center py-2">
        <div className="col-span-3">
          <div className="font-semibold md:font-bold text-normal sm:text-xl md:text-3xl">
            Most Recent Interview <span className="text-green-bg underline">Experience ...</span>
            🚀
          </div>
          <div className="col-span-1 font-normal sm:font-medium md:text-xl sm:text-base text-xs">
            Keep Your Edge Sharp: Read and Learn from Diverse Interview
            Journeys.
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <button className="px-4 py-2 rounded-lg font-bold text-white btn-gradient-2">
            Read more...
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <InterviewCard
            key={i}
            name={interviewData[i].name}
            userPhoto={interviewData[i].userPhoto}
            company={interviewData[i].company}
            linkedin_id={interviewData[i].linkedin_id}
            created_on={interviewData[i].created_on}
            selected={interviewData[i].selected}
            position={interviewData[i].position}
            round={interviewData[i].round}
            company_logo={interviewData[i].company_logo}
          />
        ))}
      </div>
    </div>
  );
}

export default InterviewExperiance;
