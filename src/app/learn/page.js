"use client";
import { courses } from "./courses.js";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import WebsiteBanner from "../Components/templets/WebsiteBanner.jsx";
import PreRender from "../Components/templets/PreRender.jsx";
function Page() {
  const [queryPara, setQueryPara] = useState(null);
  const findMyFirstTopic = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_MY_TOPICS}`
      );
      setQueryPara(response.data.data);
    } catch (e) {
      console.error("There was an error!", e);
    }
  };

  useEffect(() => {
    findMyFirstTopic();
  }, []);

  return (
    <div className="min-h-[100vh]">
      <div>
        <WebsiteBanner
          heading={"The world’s largest selection of online courses"}
          paragraph={
            "Millions of people have used Interview Express to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone."
          }
          imgSrc={"learn.gif"}
          BtnName={"Explore Courses"}
        ></WebsiteBanner>
      </div>
      {queryPara && (
        <div className="main-container bg-[url('/star2.svg')] dark:bg-[url('/star2-dark.svg')]">
          <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Explore Top <span className="text-green-bg underline">Course</span>
          </div>

          <div className="grid pb-8 grid-col-1 md:grid-cols-2 gap-4">
            {courses &&
              courses.map((course, index) => (
                <Link
                  key={index}
                  href={{
                    pathname: `/learn/${course.name}`,
                    query: {
                      mainTopic: course.name,
                      mainHeading: queryPara[course.name]?.mainHeading,
                      title: queryPara[course.name]?.title,
                    },
                  }}
                >
                  <div className="flex text-xs sm:text-sm md:text-normal  items-center border-2 border-white dark:border-white hover:border-l-green-bg dark:hover:border-green-bg hover:cursor-pointer p-4 transition-all duration-300 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                    <img
                      src={course.url}
                      alt={course.name}
                      className="mr-4 w-24 aspect-video"
                    />
                    <div>
                      <div className="font-bold">{course.name}</div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <Link
            href={"/post-review"}
            className="flex justify-center items-center"
          >
            <div className="flex justify-center dark:text-black px-5 cursor-pointer mb-4 py-2 items-center text-lg start">
              Reviews
            </div>
          </Link>
        </div>
      )}
      {!queryPara && (
        <div className=" main-container">
          <PreRender count={1} height={50} width={250} />
          <div className="grid grid-cols-2">
            <div className="mr-5 my-5">
              <PreRender count={3} height={30} color="#808080" />
            </div>

            <div className="ml-5 my-5">
              <PreRender count={3} height={30} color="#808080" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
