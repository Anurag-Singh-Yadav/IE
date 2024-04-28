"use client";
import React, { useEffect, useState } from "react";
// import interviewData from "../../../../public/interviewData";
import InterviewCard from "./InterviewCard";
import Link from "next/link";
import { fetchInterviewExperience } from "@/app/fetchDetails/fetchInterviewExperience";
import PreRender from "../templets/PreRender";
function InterviewExperiance() {
  const [interviewData, setInterviewData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchInterviewExperience(false, 0);
        setInterviewData(res?.data);
      } catch (e) {
        // console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-16">
        
          <h1 className="font-semibold md:font-bold text-normal md:text-4xl text-2xl text-center">
            Most Recent Interview{" "}
            <span className="text-green-bg">Experience</span>
          </h1>
          <h3 className="text-center mt-2 text-gray-600 mb-8">
            Keep Your Edge Sharp: Read and Learn from Diverse Interview
            Journeys.
          </h3>
     
        
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-0 gap-4 justify-between items-center py-2">
     
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {interviewData &&
          interviewData.length > 0 &&
          interviewData.map((obj, i) => {
            // if (i < 4) {
            return (
              <InterviewCard
                key={i}
                name={obj.name}
                userPhoto={obj.avatar}
                company={obj.company}
                linkedin_id={obj.linkedin_id}
                created_on={obj.created_on}
                selected={obj.selected}
                position={obj.position}
                round={obj.round}
                company_logo={obj.company_logo}
                id={obj._id}
                isAdmin={false}
              />
            );
            // }
          })}

        {!interviewData && (
          <div className="col-span-2 grid grid-cols-3 justify-between px-4">
            {Array(3)
              .fill(0)
              .map((_, index) => {
                return (
                  <div key={index} className="mx-2">
                    <PreRender count={1} height={100} color={"#dbcccc"} />
                  </div>
                );
              })}
          </div>
        )}
      </div>
      <div className="flex justify-center md:justify-end items-center mt-6">
          <Link
            className="px-4 py-2 rounded-lg font-bold text-white btn-gradient-2"
            href={"/interview-experience"}
          >
            Read more...
          </Link>
        </div>
    </div>
  );
}

export default InterviewExperiance;
