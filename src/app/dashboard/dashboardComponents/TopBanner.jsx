"use client";

import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { FaCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";

import { IoShareSocialSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import PreRender from "@/app/Components/templets/PreRender";
import { addFollower, removeFollower } from "@/app/fetchDetails/fetchUserDetails";
import Cookies from "js-cookie";

const CopiedToClipBoardNotify = () => {
  return (
    <div className="absolute -bottom-0 flex gap-2 items-center bg-white rounded-lg px-2 py-2">
      <div className="text-green-bg">
        <FaCircleCheck />
      </div>
      <p className="text-gray-500 text-sm font-semibold whitespace-nowrap">
        Profile link copied to clipboard
      </p>
    </div>
  );
};

function TopBanner({ details, isFollowing , setIsFollowing }) {
  const [flag, setFlag] = useState(false);
  const [posting, setPosting] = useState(false);
  
  const userDetails = useSelector((state) => state.GlobalState.userDetails);


  const updateFollowUser = async (action) => {
    if(!userDetails || userDetails.userHandle === details.userHandle)return;
    try{
      setPosting(true);
      const token = Cookies.get('token');
      const res = (action === 1 ? await addFollower(token , details.userHandle) : await removeFollower(token , details.userHandle));
      if(res){
        setIsFollowing(action);
      }
    }catch(err){
      alert('Unknown error while processing user request.')
      console.log(err);
    }finally{
      setPosting(false);
    }
  }

  const copyProfileToClipBoard = () => {
    setFlag(true);
    setTimeout(() => {
      setFlag(false);
    }, 1000);
    navigator.clipboard.writeText(
      `${window.location.origin}/dashboard/${details.userHandle}`
    );
  };

  const messageHandler = () => {};


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
            <p className=" text-gray-400 text-sm">{details.userHandle}</p>
            {userDetails?.userHandle !== details.userHandle && (
              <div className="flex gap-3 items-center my-2">
                <IoIosSend onClick={messageHandler} size={25} />
                {!isFollowing ? (
                  <div className="flex gap-3 items-center">
                    <PreRender count={1} height={20} />
                    <PreRender count={1} height={30} />
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => {
                        if (isFollowing == -1 && !posting)updateFollowUser(1);
                        if(isFollowing === 1 && !posting)updateFollowUser(-1);
                      }}
                      className={`btn-gradient-2 px-3 py-2 rounded-md text-xs`}
                    >
                      {isFollowing === 1 ? 'Unfollow' : 'Follow'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {!details && (
        <div className="flex gap-1 items-center">
          <PreRender count={1} height={120} width={120} round={true} />
          <div className="w-[120px]">
            <PreRender count={1} height={30}></PreRender>
            <PreRender count={1} height={20} width={80}></PreRender>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBanner;
