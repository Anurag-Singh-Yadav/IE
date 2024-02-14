"use client";
import React from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import { topics } from "./Topics.js";
import TopicsTemplets from "../Components/templets/TopicsTemplets";
function Page() {
  console.log("topics", topics);
  return (
    <div>
      <div>
        <WebsiteBanner
          imgSrc={"dsaPractise.png"}
          BtnName={"Practise "}
        ></WebsiteBanner>
      </div>

      <div className="bg-[url('/dsaPrac.svg')] pt-4 pb-8 main-container">
        <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Explore Best{" "}
          <span className="text-green-bg underline">DSA Questions</span>
        </div>

        <div className="grid grid-col-1 nmd:grid-cols-6">
          <div className=" col-span-4 ">
            <div className="bg-green-bg py-2 mt-4 mb-6 text-center px-2 rounded-md text-white text-lg font-medium">
                Data Structures and Algorithms
            </div>

            <TopicsTemplets topics={topics}></TopicsTemplets>

          </div>

          <div className="">
            {/* score meter */}
            score Meter
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
