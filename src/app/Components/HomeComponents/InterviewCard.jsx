"use client";
import React from "react";
import Avatar from "react-avatar";
import { TiTick } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import { GrLinkedin } from "react-icons/gr";
import Image from "next/image";
function InterviewCard({
  name,
  userPhoto,
  company,
  linkedin_id,
  created_on,
  selected,
  position,
  round,
  company_logo,
}) {
  return (
    <div className="my-3 py-4 text-black px-4 border-l-2 hover:border-green-bg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap items-center">
          <div>
            <Avatar
              className="cursor-pointer items-center mr-8 px-2"
              src={userPhoto}
              name={name}
              size="50"
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
              <div>Seleted</div>
            </div>
          )}

          {!selected && (
            <div className="flex justify-center items-center text-red-800 gap-2 font-semibold">
              <RxCrossCircled />
              <div>Not Seleted</div>
            </div>
          )}
        </div>
        {linkedin_id && (
          <div className="flex justify-between gap-2 items-center hover:text-blue-700">
            <span className=" font-medium cursor-pointer hover:font-semibold">
              Connect me{" "}
            </span>{" "}
            <GrLinkedin className="text-blue-700" />
          </div>
        )}

        <div>Published on : {created_on}</div>
      </div>
    </div>
  );
}

export default InterviewCard;
