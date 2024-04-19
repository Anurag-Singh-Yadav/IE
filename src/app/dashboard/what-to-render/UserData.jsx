"use client";
import React, { useState } from "react";
import ApexChart from "../dashboardComponents/CircularRadial";
import LeaderboardPercentageChart from "../dashboardComponents/LeaderboardPercentageChart";
import DashboardCards from "../dashboardComponents/DashboardCards";
import { GiFlame } from "react-icons/gi";
import ChallengeProgress from "../dashboardComponents/ChallengeProgress";
import Announcement from "../dashboardComponents/Announcement";
import LineProgressTracker from "../dashboardComponents/LineProgressTracker";

function UserData({userInfo}) {
  const [progressBarData, setProgressBarData] = useState([50, 70, 120]);
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(5);

  return (
    <div className="flex flex-col gap-12 h-[300vh]">
      <p className="font-bold text-2xl">{"Dashboard"}</p>
      <DashboardCards followers={30} following={45} profileViews={32} />
      <p className="font-bold text-2xl">{"Progress Analysis"}</p>
      <div className="grid grid-cols-1 dmd:grid-cols-6">
        <div className="col-span-4 flex flex-col justify-between h-full">
          <div className="grid grid-cols-1 s2:grid-cols-2">
            <ApexChart data={progressBarData} />
            <div className="flex py-4 px-2 bg-primary flex-wrap lg:w-full flex-col gap-1  justify-center items-start">
              <LineProgressTracker
                color={"#5CB85C"}
                type={"Easy"}
                qCount={12}
                totalQCount={50}
              ></LineProgressTracker>
              <LineProgressTracker
                color={"#FFA500"}
                type={"Medium"}
                qCount={24}
                totalQCount={60}
              ></LineProgressTracker>
              <LineProgressTracker
                type={"Hard"}
                color={"#FF0000"}
                qCount={40}
                totalQCount={100}
              ></LineProgressTracker>
            </div>
          </div>
          <LeaderboardPercentageChart data={leaderboardData} />
        </div>
        <div className="col-span-2 bg-white h-full">
          <p>Streak</p>
          <div className="flex justify-start items-start">
            <p>
              {currentStreak}
              {" Days"}
            </p>
            <GiFlame />
          </div>
          <Announcement></Announcement>
        </div>
      </div>

      <div className="">
        <ChallengeProgress></ChallengeProgress>
      </div>

      <p className="font-bold text-2xl">{"Dashboard"}</p>

    <div>
      <LeaderboardList />
    </div>

    </div>
  );
}

export default UserData;
