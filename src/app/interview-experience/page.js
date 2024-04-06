"use client";
import React, { useEffect, useState } from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import InterviewCard from "../Components/HomeComponents/InterviewCard";
import Link from "next/link";
import PreRender from "../Components/templets/PreRender";
import { fetchInterviewExperience } from "../fetchDetails/fetchInterviewExperience";
// import interviewData from "../../../public/interviewData";

function Page() {
  const [pageIndex, setPageIndex] = useState(0);
  const [interviewData, setInterviewData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [totalLength, setTotalLength] = useState(0);

  const firstFetch = async () => {
    setLoading(true);
    const { data, len } = await fetchInterviewExperience(false, 0);
    if (data) setInterviewData(data);
    if (len) setTotalLength(len);
    setLoading(false);
  };

  const fetchMore = async (startingIndex) => {
    setLoading(true);
    const { data, len } = await fetchInterviewExperience(false, startingIndex);
    if (data)
      setInterviewData((prev) => {
        return [...prev, ...data];
      });
    if (len) setTotalLength(len);
    setLoading(false);
  };

  let arr = new Array(6).fill({});

  useEffect(() => {
    firstFetch();
  }, []);

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

      <div className="bg-[url('/dsaPrac.svg')] dark:bg-[url('/dsaPrac-dark.svg')] pt-4 pb-8 main-container">
        <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Explore all{" "}
          <span className="text-green-bg underline">Interview Experience</span>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {interviewData &&
            interviewData.map((interview, index) => {
              if (index >= pageIndex * 8 && index < (pageIndex + 1) * 8) {
                return (
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
                    id={interview._id}
                  />
                );
              }
            })}
        </div>
        <div>
          {!interviewData ||
            (interviewData.length === 0 && (
              <div className="">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {arr.map((obj, index) => {
                    return (
                      <PreRender
                        key={index}
                        count={1}
                        height={100}
                        color={`#f5f6f7`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
        </div>

        <div className="w-fit mx-auto grid grid-cols-2 items-center justify-center py-4 sm:py-8">
          <div
            className={`text-lg font-medium rounded-l-full py-2 px-4 transition-all duration-300  ${
              pageIndex == 0
                ? "cursor-not-allowed bg-slate-300 text-black"
                : "cursor-pointer hover:bg-green-bg hover:text-white"
            }`}
            onClick={() => {
              if (pageIndex == 0) return;
              setPageIndex(pageIndex - 1);
            }}
          >
            Previous
          </div>
          <div
            className={`text-lg font-medium rounded-r-full py-2 px-4  transition-all duration-300 ${
              (pageIndex + 1) * 8 < totalLength
                ? "hover:bg-green-bg cursor-pointer hover:text-white"
                : "cursor-not-allowed bg-slate-300 text-black"
            } `}
            onClick={() => {
              if (loading) return;
              if ((pageIndex + 1) * 8 == interviewData.length && pageIndex > 0)
                fetchMore(interviewData.length);
              if (interviewData.length === (pageIndex + 1) * 8) {
                setPageIndex(pageIndex + 1);
              }
            }}
          >
            Next
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href={"/interview-experience/post"}
            className="btn-gradient-2 px-4 py-2 rounded-md"
          >
            Post your own interview-journey
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
