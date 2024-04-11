"use client";
import { Tooltip } from "react-tooltip";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaHandPointUp } from "react-icons/fa";

function LeaderboardPercentageChart() {
  const globalRank = 200;
  const total = 540;

  const leaderboardData = [
    1, 0.95, 0.85, 0.81, 0.64, 0.55, 0.49, 0.45, 0.3, 0.01,
  ];
  const userIndex = 4;
  const topPercentage = (globalRank / total) * 100;

  const solvedQuestions = 30;
  const totalQuestions = 3008;

  return (
    <div className="flex justify-between">
      <div className="flex flex-wrap flex-grow justify-between items-center bg-primary rounded-lg px-3 py-10 box-shadow">
        <div className="flex flex-col justify-between">
          <p className="font-semibold">Global Ranks</p>
          <p className="text-lg font-bold">
            Top:{` ${topPercentage.toPrecision(4)}%`}
          </p>
          <p className="text-sm text-gray-400">Data since: April 2024</p>
        </div>

        <div className="flex items-end gap-2">
          {leaderboardData &&
            leaderboardData.map((item, index) => {
              const scoreRange = [index * 50, (index + 1) * 50];
              const [highLight, setHighLight] = useState(false);
              return (
                <div
                  className="h-[200px] flex items-end w-[15px]"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={`Score: ${scoreRange[0]} - ${
                    scoreRange[1]
                  }\nTop: ${(item * 100).toPrecision(3)}%`}
                  data-tooltip-place="top"
                  onMouseEnter={() => {
                    console.log("Mouse entered");
                    setHighLight(true);
                  }}
                  onMouseLeave={() => {
                    console.log("Mouse Left");
                    setHighLight(false);
                  }}  
                  key={index}
                >
                  <div
                    className={`relative bg-gray-200 ${
                      (highLight || index === userIndex) && `bg-green-bg`
                    } w-full`}
                    style={{ height: `${Math.max(15, item * 200)}px` }}
                  >
                    <div
                      className={`${
                        index !== userIndex && "hidden"
                      } absolute -bottom-[20px]`}
                    >
                      <FaHandPointUp size={15} className="text-gray-800" />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Tooltip id="my-tooltip" />
      </div>
    </div>
  );
}

export default LeaderboardPercentageChart;
