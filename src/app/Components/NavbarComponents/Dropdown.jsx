"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Dropdown.css";

import React from "react";
import Link from "next/link";
import ChallengesPoster from "./ChallengesPoster";

function Dropdown({ label, options }) {
  // options : [ { label : 'abc' , value : 'xyz' , }  , {} ,....]

  const mouseEnter = () => {
    let b = document.getElementById(`dd-${label}`);
    b.classList.add("animate-in");
  };

  const mouseLeave = () => {
    let b = document.getElementById(`dd-${label}`);
    b.classList.remove("animate-in");
    b.classList.add("animate-out");
    setTimeout(() => {
      b.classList.remove("animate-out");
    }, 300);
  };

  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="relative flex justify-center z-20"
    >
      <p className="hover:cursor-pointer hover:text-green-bg transition duration-400 font-semibold text-[15px]">
        {label}
          <RiArrowDropDownLine size={30} className="inline-block" />
      </p>

      {label !== 'Challenges' && (
        <div
          id={`dd-${label}`}
          className="dropdown-content top-[0vh] pt-[10vh] w-[100%] flex justify-center cursor-pointer"
        >
          <div className="flex flex-col bg-white rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-2 border-t-[3px] border-green-bg w-fit">
            {options.map((obj, index) => {
              return (
                <Link
                  name={obj.value}
                  key={index}
                  className="whitespace-nowrap cursor-pointer hover:bg-green-bg px-4 py-2 transition duration-200 hover:text-white font-semibold"
                  href={obj.value}
                >
                  {obj.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}


      {
        label === 'Challenges' && 
        <div
          id={`dd-${label}`}
          className="dropdown-content top-[0vh] pt-[10vh] flex justify-center w-full cursor-pointer"
        >
          <div className="flex flex-col bg-white rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-2 border-t-[3px] border-green-bg">
            <ChallengesPoster challenges={options} />
          </div>
        </div>
      }
    </div>
  );
}

export default Dropdown;
