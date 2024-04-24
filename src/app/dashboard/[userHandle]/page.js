"use client";
import React, { useState, useEffect } from "react";
import Sidenav from "../dashboardComponents/Sidenav";
import TopBanner from "../dashboardComponents/TopBanner";
import DashboardAnalytics from "../dashboardComponents/DashboardAnalytics";
import {
  fetchUserByHandle,
  getUserAnalytics,
  profileViewed,
} from "@/app/fetchDetails/fetchUserDetails";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

function Dashboard({ params }) {
  const [selectedMode, setSelectedMode] = useState("dashboard");

  const [userInfo, setUserInfo] = useState(null);

  const { userHandle } = params;

  const [userAnalytics, setUserAnalytics] = useState(null);

  const [isFollowing , setIsFollowing] = useState(null);

  const [show , setShow] = useState(false);

  const userDetails = useSelector((state) => state.GlobalState.userDetails);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetchUserByHandle(userHandle);
        setUserInfo(res);
      } catch (err) {
        console.log(err.message);
      }
    };

    const fetchUserAnalytics = async () => {
      const token = Cookies.get("token");
      try {
        const res = await getUserAnalytics(token, userHandle);
        if (res) {
          setUserAnalytics(res.data?.data);
          setIsFollowing(res.data?.data?.userInfo?.isFollowing);
        }
      } catch (err) {
        alert("Server error, please refresh a few times or try again later");
      }
    };
    fetchUserAnalytics();
    fetchUser();
  }, []);

  useEffect(() => {
    const viewProfile = async () => {
      try{
        if (
          userDetails &&
          userDetails.userHandle &&
          userDetails.userHandle !== userHandle
        ) {
          const token = Cookies.get("token");
          await profileViewed(token , userHandle);
        }
      }catch(err){
        console.log(err);
      }
    };
    setShow(userDetails.userHandle === userHandle);
    viewProfile();
  }, [userDetails]);

  return (
    <div className="min-h-[5000vh] bg-primary overflow-hidden">
      <div className="relative bg-black ">
        <TopBanner details={userInfo} isFollowing={isFollowing} setIsFollowing={setIsFollowing} />
      </div>
      <div className="relative px-2">
        <Sidenav
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          show={show}
        />
        <DashboardAnalytics
          userInfo={userInfo}
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          userAnalytics={userAnalytics}
        />
      </div>
    </div>
  );
}

export default Dashboard;
