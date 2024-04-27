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

  const [show , setShow] = useState(true);

  const [userAnalytics, setUserAnalytics] = useState(null);

  const [isFollowing , setIsFollowing] = useState(null);

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
        console.log(err);
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
    viewProfile();
  }, [userDetails]);


  return (
    <div className="min-h-[5000vh] bg-white text-black overflow-hidden">
      <div className="relative bg-black ">
        <TopBanner details={userInfo} isFollowing={isFollowing} setIsFollowing={setIsFollowing} loggedIn={userDetails.userHandle.length && userDetails.userHandle.length > 0}/>
      </div>
      <div className="relative px-2">
        <Sidenav
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          setShow={setShow}
          same={userHandle === userDetails.userHandle}
        />
        <DashboardAnalytics
          userInfo={userInfo}
          selectedMode={selectedMode}
          userAnalytics={userAnalytics}
          show={show}
          setShow={setShow}
        />
      </div>
    </div>
  );
}

export default Dashboard;
