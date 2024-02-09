"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropdownData, links } from "./NavbarData";
import MobileDropDown from "./MobileDropDown";
import {
  toggleSignPagePopup,
  setSignInBtn,
} from "../../GlobalRedux/Features/GlobalStateSlice";
import Avatar from "react-avatar";
import Link from "next/link";
function MobileNavbarContent({ handleClick, details }) {
  const isLogin = useSelector((state) => {
    return state.GlobalState.isLogin;
  });
  const [open, setOpen] = useState(null);
  const dispatch = useDispatch();
  return (
    <div className="relative background-grid px-4 h-[100vh] min-w-[100vw] sm:min-w-[70vw] md:min-w-[50vw] lg:min-w-[40vw] overflow-scroll-auto">
      {isLogin ? (
        <div className="flex flex-col gap-1 mt-[2vh] items-center justify-center">
          <Avatar
            className="cursor-pointer"
            name={details.name}
            src={details.avatar}
            size="50"
            round={true}
          ></Avatar>
          <div className=" px-4 py-2 rounded-sm cursor-pointer hover:underline transition-all duration-300 hover:text-green-bg font-semibold">
            {details.name}
          </div>
        </div>
      ) : (
        <div className="flex mt-[2vh] items-center gap-6">
          <button
            className="py-2 px-4 start-2  font-semibold rounded-md transition duration-300"
            onClick={() => {
              dispatch(toggleSignPagePopup());
              handleClick();
              dispatch(setSignInBtn(false));
            }}
          >
            Sign In
          </button>
          <button
            className="py-2 px-4 text-white font-semibold rounded-lg btn-gradient-2"
            onClick={() => {
              dispatch(toggleSignPagePopup());
              handleClick();
              dispatch(setSignInBtn(true));
            }}
          >
            Sign Up
          </button>
        </div>
      )}

      <div className="absolute w-[50%] right-0 h-full right-gradient " />
      <div className="absolute w-[50%] left-0 h-full left-gradient" />
      <div className="absolute w-full left-0 h-full down-gradient" />

      <div className="flex flex-col pt-16 gap-2 w-full z-[150]">
        {dropdownData.map((obj, index) => {
          return (
            <MobileDropDown
              key={index}
              label={obj.label}
              options={obj.options}
              index={index}
              open={open}
              setOpen={setOpen}
            />
          );
        })}
        <ul className="z-[150] my-6 list-disc px-6 max-w-md mx-auto w-full">
        {
          links.map((link , index) => {
            return <li key={index} onClick={handleClick} className=""><Link href={`/${link.value}`}><span className="border-b-2 border-black hover:border-green-bg hover:text-green-bg transition duration-300">{link.label}</span></Link></li>
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default MobileNavbarContent;
