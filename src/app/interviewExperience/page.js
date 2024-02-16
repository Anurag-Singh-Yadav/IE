"use client";
import React, { useEffect, useState } from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import axios from "axios";
import InterviewCard from "../Components/HomeComponents/InterviewCard";
import interviewData from "../../../public/interviewData";
function Page() {
  const [pageIndex, setPageIndex] = useState(0);
  //   const [interviewData, setInterviewData] = useState(null);

  const fetchInterviews = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_INTERVIEW_EXPERIENCE}/${pageIndex}`
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // fetchInterviews();
  }, [pageIndex]);

  return (
    <div>
      <div>
        <WebsiteBanner
          heading="The world’s largest selection of online courses"
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
                company_logo={interview.company_logo}
              />
            ))}
        </div>
        
        <div className="w-fit mx-auto grid grid-cols-2 items-center justify-center py-4 sm:py-8">
            <div className={`text-lg font-medium rounded-l-full py-2 px-4 transition-all duration-300  ${pageIndex == 0 ? 'cursor-not-allowed bg-slate-300 text-black' : 'cursor-pointer hover:bg-green-bg hover:text-white'}`}  onClick={()=>{
              if(pageIndex == 0)return;
              setPageIndex(pageIndex - 1)
            }}>Previous</div>
            <div className="text-lg font-medium  rounded-r-full py-2 px-4 hover:text-white transition-all duration-300  hover:bg-green-bg cursor-pointer"
            onClick={() => setPageIndex(pageIndex + 1)}
            >Next</div>
        </div>

      </div>
    </div>
  );
}

export default Page;
