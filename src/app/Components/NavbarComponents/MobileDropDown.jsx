"use client";
import React from "react";
import { FaChevronUp } from "react-icons/fa";
import "./MobileDropDown.css";
import Link from "next/link";
import ChallengesPoster from "./ChallengesPoster";
import ChallengePosterMobile from "./ChallengePosterMobile";

function MobileDropDown2({
  open,
  setOpen,
  label,
  options,
  index,
  closeNav,
  challenges,
}) {
  const handleClick = () => {
    if (index == open) {
      let b = document.getElementById(`dropdown-${index}`);

      b.classList.add("slide-left");

      let icon = document.getElementById(`icon-${index}`);

      icon.classList.add(`rotate-back`);

      setTimeout(() => {
        setOpen(null);
        b.classList.remove("slide-left");
        icon.classList.remove("rotate-back");
      }, 300);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="w-full z-[1]">
      <div
        onClick={handleClick}
        className="mx-auto w-full max-w-md rounded-2xl"
      >
        <div
          className={`flex w-full justify-between rounded-lg hover:bg-green-bg ${
            open == index ? "bg-green-bg text-white" : "bg-light-green"
          } hover:text-white transition duration-300  px-4 py-2 text-left text-sm font-medium cursor-pointer`}
        >
          <span>{label}</span>
          <FaChevronUp
            id={`icon-${index}`}
            className={`${
              open == index && "rotate-half"
            } rotate-180 h-5 w-5 font-bold`}
          />
        </div>

        <div
          id={`dropdown-${index}`}
          className={`hidden ${
            open == index && "slide-right"
          } flex-col w-fit px-4 text-sm`}
        >
          {label !== 'Challenges' && options.map((obj, index) => {
            return (
              <div
                key={index}
                className=" border-l-2 border-green-bg whitespace-nowrap py-2 transition duration-200 font-semibold flex items-center"
              >
                <div className=" h-[2px] w-4 bg-green-bg mr-2" />
                <Link
                  href={obj.value}
                  onClick={closeNav}
                  className=" cursor-pointer hover:text-green-bg rounded-lg transition duration-300 w-full px-2 py-1"
                >
                  {obj.label}
                </Link>
              </div>
            );
          })}

          {
            label === 'Challenges' && <ChallengePosterMobile challenges={challenges} />
          }

        </div>
      </div>
    </div>
  );
}

export default MobileDropDown2;
