"use client";
import React from "react";
import { AiOutlineBars } from "react-icons/ai";

function DashboardAnalytics({ selectedMode, setSelectedMode }) {
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
        <p className="mt-4 px-3 py-2 font-bold text-lg">Dashboard Analytics</p>
      )}
    </div>
  );
}

export default DashboardAnalytics;
