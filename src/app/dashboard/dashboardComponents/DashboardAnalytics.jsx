"use client";
import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import UserData from "../what-to-render/UserData";

function DashboardAnalytics({ userInfo , selectedMode, setSelectedMode }) {

  return (
    <div
      className={`${
        !selectedMode && "translate-x-[110%] md:translate-x-0"
      } transition-all duration-700 box-shadow absolute overflow-hidden mx-auto left-0 right-0  md:left-auto -top-0 md:-top-[15vh] w-[95vw] md:w-[75vw] min-h-[100vh] rounded-md bg-gray-100 px-4 md:px-12 py-12`}
    >
      <AiOutlineBars
        onClick={() => {
          setSelectedMode(null);
        }}
        size={30}
        className="md:hidden"
      />
      {(selectedMode === "dashboard" || !selectedMode) && (
        <div className='overflow-hidden'>
          <UserData userInfo={userInfo}/>
        </div>
      )}
    </div>
  );
}

export default DashboardAnalytics;
