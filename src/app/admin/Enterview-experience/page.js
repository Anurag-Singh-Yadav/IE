"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import WebsiteBanner from "@/app/Components/templets/WebsiteBanner";
import InterviewCard from "@/app/Components/HomeComponents/InterviewCard";
import axios from "axios";
function Page() {
  const [interviewData, setInterviewData] = useState(null);
  const [isClick,setIsClicked] = useState(false);

  const fetchInterviews = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${
          process.env.NEXT_PUBLIC_GET_INTERVIEW_EXPERIENCE
        }/${true}`
      );
      setInterviewData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, [isClick]);
  return (
    <div>
      <div>
        <WebsiteBanner
          heading="This is Admin section to accept the Interview Experience"
          BtnName="Read More"
          imgSrc="interview-Experience.svg"
          paragraph="Interview Experience is a platform where you can find interview experiences of top companies. We have a collection of interview experiences of top companies like Google, Amazon, Microsoft, etc. You can also share your interview experience with us."
        ></WebsiteBanner>
      </div>
      <div className="bg-[url('/dsaPrac.svg')] pt-4 pb-8 main-container">
        <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Explore all{" "}
          <span className="text-green-bg underline">Interview Experience</span>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {interviewData &&
            interviewData.map((interview, index) => (
              <InterviewCard
                key={index}
                name={interview.name}
                userPhoto={interview.avatar}
                company={interview.company}
                linkedin_id={interview.linkedin_id}
                created_on={interview.created_on}
                selected={interview.selected}
                position={interview.position}
                round={interview.round}
                isClick={isClick}
                setIsClicked={setIsClicked}
                company_logo={interview.company_logo}
                id={interview._id}
                isAdmin={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
