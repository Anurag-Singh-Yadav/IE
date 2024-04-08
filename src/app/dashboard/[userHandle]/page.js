'use client'
import React, { useState } from "react";
import Sidenav from "../dashboardComponents/Sidenav";
import TopBanner from "../dashboardComponents/TopBanner";
import DashboardAnalytics from "../dashboardComponents/DashboardAnalytics";

function Dashboard() {

  const [selectedMode , setSelectedMode] = useState('dashboard');

  return (
    <div className="min-h-[250vh] bg-primary overflow-hidden">
      <div className="relative bg-black ">
        <TopBanner />
      </div>
      <div className="relative px-2">
        <Sidenav setSelectedMode={setSelectedMode}/>
        <DashboardAnalytics selectedMode={selectedMode} setSelectedMode={setSelectedMode}/>
      </div>
    </div>
  );
}

export default Dashboard;
