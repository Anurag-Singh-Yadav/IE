'use client'
import React, { useState , useEffect } from "react";
import Sidenav from "../dashboardComponents/Sidenav";
import TopBanner from "../dashboardComponents/TopBanner";
import DashboardAnalytics from "../dashboardComponents/DashboardAnalytics";
import ChallengeProgress from "../dashboardComponents/ChallengeProgress";

function Dashboard({params}) {

  const [selectedMode , setSelectedMode] = useState('dashboard');
  useEffect(() => {
    const {userHandle} = params;
    console.log('userHandle = ' ,  userHandle);
  } , []);

  return (
    <div className="min-h-[250vh] bg-primary overflow-hidden">
      <div className="relative bg-black ">
        <TopBanner />
      </div>
      <div className="relative px-2">
        <Sidenav setSelectedMode={setSelectedMode}/>
        <DashboardAnalytics selectedMode={selectedMode} setSelectedMode={setSelectedMode}/>
        <ChallengeProgress></ChallengeProgress>
      </div>
    </div>
  );
}

export default Dashboard;
