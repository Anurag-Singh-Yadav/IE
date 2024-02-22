"use client";
import React, { useState } from "react";
import Avatar from "react-avatar";
import { TiTick } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import { GrLinkedin } from "react-icons/gr";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import Acceptinterview from "../Acceptinterview";
function InterviewCard({
  name,
  userPhoto,
  company,
  linkedin_id,
  created_on,
  selected,
  position,
  round,
  id,
  isAdmin,
  isClick,
  setIsClicked,
}) {
  const adminChoics = async (choics) => {
    const token = Cookies.get("token");
    setIsClicked(true);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}${process.env.NEXT_PUBLIC_ADMIN_TO_ACCEPTS_INTERVIEW_BLOG}`,
      {
        id: id,
        isAdminAccepted: choics,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setIsClicked(false);
  };

  return (
    <div className="my-3 py-4 text-black px-4 border-l-2 hover:border-green-bg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex gap-3 flex-wrap items-center">
          <div>
            <Avatar
              className="cursor-pointer"
              size="50"
              src={userPhoto}
              name={name}
              round={true}
            ></Avatar>
          </div>
          <div>
            <div>
              <span className="text-sm md:text-xl font-semibold md:font-bold text-green-bg">
                {name}
              </span>{" "}
              <span>| Round {round}</span>
            </div>
            <div>
              <span>{position}, </span>
              <span className="font-bold px-[2px] py">{company}</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="h-[2px] my-4 bg-slate-800"></div>

      <div className="flex flex-wrap text-sm sm:text-normal justify-between items-center">
        <div>
          {selected && (
            <div className="flex justify-center items-center gap-2 font-semibold text-green-bg">
              <TiTick />
              <div>Selected</div>
            </div>
          )}

          {!selected && (
            <div className="flex justify-center items-center text-red-800 gap-2 font-semibold">
              <RxCrossCircled />
              <div>Not Selected</div>
            </div>
          )}
        </div>
        <div className="">Published on : <strong>{created_on.split(',')[0]}</strong></div>
        <div className="border rounded-full px-4 py-2 bg-dark-blue text-white">Published on : <strong>{new Date(created_on).toLocaleString().split(',')[0]}</strong></div>
      </div>

      <div className="flex justify-between my-2 flex-wrap items-center">
        <Link
          href={`/interview-experience/[id]`}
          as={`/interview-experience/${id}`}
          className="px-4 py-2 btn-gradient rounded-md btn-gradient-2 cursor-pointer text-white hover:rounded-lg transition-all duration-500"
        >
          Read
        </Link>
        {isAdmin && (
          <Acceptinterview adminChoics={adminChoics} isClick={isClick} />)}
        {linkedin_id && (
          <div className="flex justify-between gap-2 items-center hover:text-blue-700">
            <span className=" font-medium cursor-pointer hover:font-semibold">
              Connect me{" "}
            </span>{" "}
            <GrLinkedin className="text-blue-700" />
          </div>
        )}
      </div>
    </div>
  );
}

export default InterviewCard;
