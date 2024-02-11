"use client";
import React, { useEffect, useState } from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import challengesData from "./challengesData.js";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
function page() {
  const fetchAllChallenges = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_CHALLENGES}`,
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
    fetchAllChallenges();
  }, []);

  return (
    <div className="min-h-[100vh]">
      <div>
        <WebsiteBanner
          imgSrc={"onGoingChallenges.gif"}
          BtnName={"Accepts Challenges"}
        ></WebsiteBanner>
      </div>
      <div className="main-container">
        <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Explore Top{" "}
          <span className="text-green-bg underline">Challenges</span>
        </div>

        <div className="grid pb-8 grid-col-1 md:grid-cols-2 gap-4">
          {challengesData &&
            challengesData.map((challenges, index) => (
              <Link
                key={index}
                href={{
                  pathname: `/learn/${challenges._id}`,
                }}
              >
                <div className="flex text-xs sm:text-sm md:text-normal  items-center border-2 border-white hover:border-l-green-bg hover:cursor-pointer p-4 transition-all duration-300 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                  <img
                    src={challenges.challenges}
                    alt={challenges.challengeType}
                    className="mr-4 w-24 aspect-auto"
                  />
                  <div>
                    <div className="font-bold">{challenges.challengeType}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default page;
