"use client";
import { Tooltip } from "react-tooltip";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaHandPointUp } from "react-icons/fa";
import PreRender from "@/app/Components/templets/PreRender";

function BarDiv({ scoreRange, item, index, userIndex }) {
  const [highLight, setHighLight] = useState(false);

  return (
    <div
      className="h-[200px] flex items-end w-[15px] hover:bg-gray-100"
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
        className={`relative bg-gray-400 ${
          (highLight || index === userIndex) && `purple-gradient`
        } w-full rounded-md box-shadow`}
        style={{ height: `${Math.max(15, item * 200)}px` }}
      >
        <div
          className={`${
            index !== userIndex && "hidden"
          } absolute -bottom-[40px]`}
          title="You're here"
        >
          <FaHandPointUp size={15} className="text-green-bg" />
        </div>
      </div>
    </div>
  );
}

function LeaderboardPercentageChart({ data }) {
  const { globalRank, total, leaderboardData, userIndex } = data;

  const [barData , setBarData] = useState(null);

  const [topPercentage, setTopPercentage] = useState(null);

  useEffect(() => {
    setTopPercentage(((globalRank / total) * 100).toPrecision(4));
    if(leaderboardData.length < 10){
      const data = [...leaderboardData];
      for(let i = leaderboardData.length; i < 10; i++){
        data.push(0);
      }
      setBarData(data);
    }
    else setBarData(leaderboardData);
  }, [data]);

  return (
    <div>
      {data ? (
        <div className="flex justify-between md:mr-[70px]">
          <div className="flex flex-wrap flex-grow justify-between items-center bg-primary rounded-lg px-3 py-10">
            <div className="flex flex-col justify-between">
              <p className="font-semibold">Global Ranks</p>
              <p className="text-lg font-bold">
                Top:{` ${topPercentage}%`}
              </p>
              <p className="text-sm text-gray-400">Data since: April 2024</p>
              <p className="text-center purple-gradient px-3 text-white my-3 py-1 rounded-md">
                {"Rank: "}
                {globalRank}/{total}
              </p>
            </div>

            <div className=" p-4 rounded-xl white-gradient box-shadow relative md:-right-[50px]">
              <div className="flex items-end gap-2">
                {barData &&
                  barData.map((item, index) => {
                    const scoreRange = [index * 50, (index + 1) * 50];
                    return (
                      <BarDiv
                        scoreRange={scoreRange}
                        item={item}
                        index={index}
                        userIndex={userIndex}
                        key={index}
                      />
                    );
                  })}
              </div>
            </div>
            <Tooltip id="my-tooltip" />
          </div>
        </div>
      ) : (
        <div>
          <PreRender count={10} height={15} />
        </div>
      )}
    </div>
  );
}

export default LeaderboardPercentageChart;
