"use client";
import React, { useEffect, useState } from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import { topics } from "./Topics.js";
import TopicsTemplets from "../Components/templets/TopicsTemplets";
import ScoreMeter from "../Components/templets/ScoreMeter";
import axios from "axios";
import Cookies from "js-cookie";
function Page() {
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
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

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

        <div className="grid grid-col-1 nmd:grid-cols-7">
          <div className=" col-span-4 ">
            <div className="bg-green-bg py-2 mt-4 mb-6 text-center px-2 rounded-md text-white text-lg font-medium">
              Data Structures and Algorithms
            </div>

            <TopicsTemplets topics={topics}></TopicsTemplets>
          </div>

          <div className="w-full flex justify-center item-center col-span-3">
            <div className="my-6 bg-red-300 py-4 px-2">
              <ScoreMeter></ScoreMeter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
