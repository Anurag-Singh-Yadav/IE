'use client'
import React, { useState , useEffect } from "react";
import Sidenav from "../dashboardComponents/Sidenav";
import TopBanner from "../dashboardComponents/TopBanner";
import DashboardAnalytics from "../dashboardComponents/DashboardAnalytics";
import ChallengeProgress from "../dashboardComponents/ChallengeProgress";

function Dashboard({params}) {

  const [selectedMode , setSelectedMode] = useState('dashboard');

  const [userInfo , setUserInfo] = useState(null);

  const {userHandle} = params;

  useEffect(() => {
    const fetchUser = async () => {
      try{
        const res = await fetchUserByHandle(userHandle);
      setUserInfo(res);
      console.log('User = ' , res);
      }catch(err){
        console.log(err.message);
      }
    }
    fetchUser();
  } , []);


  return (
    <div className="min-h-[250vh] bg-primary overflow-hidden">
      <div className="relative bg-black ">
        <TopBanner details={userInfo}/>
      </div>
      <div className="relative px-2">
        <Sidenav setSelectedMode={setSelectedMode}/>
        <DashboardAnalytics userInfo={userInfo} selectedMode={selectedMode} setSelectedMode={setSelectedMode}/>
      </div>
    </div>
  );
}

export default Dashboard;
