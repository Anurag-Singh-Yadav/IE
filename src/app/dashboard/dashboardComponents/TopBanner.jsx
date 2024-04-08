"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import { FaCircleCheck } from "react-icons/fa6";

import { IoShareSocialSharp } from "react-icons/io5";

const CopiedToClipBoardNotify = () => {
  return (
    <div className="absolute -bottom-0 flex gap-2 items-center bg-white rounded-lg px-2 py-2">
      <div className="text-green-bg"><FaCircleCheck /></div>
      <p className="text-gray-500 text-sm font-semibold whitespace-nowrap">Profile link copied to clipboard</p>
    </div>
  );
};

function TopBanner() {
  const details = useSelector((state) => state.GlobalState.userDetails);

  const [flag , setFlag] = useState(false);

  useEffect(() => {
    console.log("Details = ", details);
  }, [details]);

  const copyProfileToClipBoard = () => {
    setFlag(true);
    setTimeout(() => {
      setFlag(false);
    }, 1000);
    navigator.clipboard.writeText(
      `${window.location.origin}/dashboard/${details.userHandle}`
    );
  };

  return (
    <div className="gradiant-container h-[60vh] pt-[10vh] items-start flex pl-[10vw] md:pl-[20vw]">
      {details && (
        <div className="flex gap-4 justify-center items-center text-white flex-wrap">
          <div className="p-1 bg-green-bg h-fit rounded-full">
            <Avatar
              name={details.name}
              src={details.avatar}
              size="120"
              round={true}
            ></Avatar>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <p className="text-lg font-semibold">
                {details.name ? details.name : details.userHandle}
              </p>
              <div className="relative flex gap-2 items-center">
                <IoShareSocialSharp
                  size={20}
                  onClick={copyProfileToClipBoard}
                  className="cursor-pointer"
                />
                {flag && <CopiedToClipBoardNotify />}
              </div>
            </div>
            {details.name && (
              <p className=" text-gray-400 text-sm">{details.userHandle}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBanner;
