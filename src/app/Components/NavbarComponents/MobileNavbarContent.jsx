'use client'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropdownData } from "./NavbarData";
import MobileDropDown from "./MobileDropDown";
import {toggleSignPagePopup,setSignInBtn} from '../../GlobalRedux/Features/GlobalStateSlice';
import Avatar from "react-avatar";
function MobileNavbarContent({handleClick}) {
  const isLogin = useSelector((state)=>{return state.GlobalState.isLogin});
  const [open, setOpen] = useState(null);
  const dispatch = useDispatch();
  return (
    <div className="relative background-grid px-4 h-[100vh] min-w-[100vw] sm:min-w-[70vw] md:min-w-[50vw] lg:min-w-[40vw] overflow-scroll-auto">

      {
        isLogin ? <div className="flex flex-col gap-2 mt-[2vh] items-center justify-center">
        <Avatar
        className="cursor-pointer"
          name="Wim Mostmans"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          size="50"
          round={true}
        ></Avatar>
        <div className="btn-gradient-2 px-4 py-2 rounded-sm font-semibold cursor-pointer">Logout</div>
      </div> : <div className="flex mt-[2vh] items-center gap-6">
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
      }



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
      </div>
    </div>
  );
}

export default MobileNavbarContent;
