"use client";
import React, { useState } from "react";
import ApexChart from "../dashboardComponents/CircularRadial";
import LeaderboardPercentageChart from "../dashboardComponents/LeaderboardPercentageChart";
import DashboardCards from "../dashboardComponents/DashboardCards";
import { GiFlame } from "react-icons/gi";
import ChallengeProgress from "../dashboardComponents/ChallengeProgress";
import Announcement from "../dashboardComponents/Announcement";

function UserData() {
  const [progressBarData, setProgressBarData] = useState([50, 70, 120]);
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(5);

  return (
    <div className="flex flex-col gap-12 h-[300vh]">
      <p className="font-bold text-2xl">{"Dashboard"}</p>

      <DashboardCards followers={30} following={45} profileViews={32} />

      <p className="font-bold text-2xl">{"Progress Analysis"}</p>

      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <ApexChart data={progressBarData} />
          <LeaderboardPercentageChart data={leaderboardData} />
        </div>
        <div className="col-span-2 bg-white box-shadow">
          <p>Streak</p>
          <div className='flex justify-start items-start'>
          <p>
            {currentStreak}
            {" Days"}
          </p>
          <GiFlame />
          </div>
          <Announcement></Announcement>
        </div>
      </div>

      <div>
        <ChallengeProgress></ChallengeProgress>
      </div>
    </div>
  );
}




export default UserData;
