"use client";
import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import ApexChart from "./CircularRadial";

function DashboardAnalytics({ selectedMode, setSelectedMode }) {

  const [data , setData] = useState([50,70,120]);

  return (
    <div
      className={`${
        !selectedMode && "translate-x-[110%] md:translate-x-0"
      } transition-all duration-700 box-shadow absolute overflow-hidden mx-auto left-0 right-0  md:left-auto -top-0 md:-top-[15vh] w-[95vw] md:w-[75vw] min-h-[100vh] bg-white rounded-md`}
    >
      <AiOutlineBars
        onClick={() => {
          setSelectedMode(null);
        }}
        size={30}
        className="md:hidden"
      />
      {(selectedMode === "dashboard" || !selectedMode) && (
        <div className='border-black border-2 overflow-hidden'>
          <ApexChart data={data}/>
        </div>
      )}
    </div>
  );
}

export default DashboardAnalytics;
