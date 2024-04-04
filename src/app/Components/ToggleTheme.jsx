'use client'
import React, {useEffect, useState} from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";
import { useDispatch , useSelector } from "react-redux";
import { toggleLight } from "../GlobalRedux/Features/GlobalStateSlice";

function ToggleTheme() {
  const { setTheme } = useTheme();
  const dispatch = useDispatch();
  const isLight = useSelector((state) => state.GlobalState.isLight);

  return (
    <div>
      {isLight ? (
        <MdDarkMode
          onClick={() => {
            setTheme("dark");
            dispatch(toggleLight(false));
            window.localStorage.setItem('theme','dark');
          }}
          size={25}
          className="cursor-pointer"
        />
      ) : (
        <CiLight
          onClick={() => {
            setTheme("light");
            dispatch(toggleLight(true));
            window.localStorage.setItem('theme','light');
          }}
          size={25}
          className="cursor-pointer dark:hidden"
        />
      )}
    </div>
  );
}

export default ToggleTheme;
