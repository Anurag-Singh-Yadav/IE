'use client'
import React, {useState} from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";
import { useDispatch , useSelector } from "react-redux";
import { toggleLight } from "../GlobalRedux/Features/GlobalStateSlice";
function ToggleTheme() {
  const { setTheme } = useTheme();
  const dispatch = useDispatch();
  const isLight = useSelector((state) => state.GlobalState.isLight);
  const [themeFlag, setThemeFlag] = useState(isLight);
  return (
    <div>
      {themeFlag ? (
        <MdDarkMode
          onClick={() => {
            setThemeFlag(!themeFlag);
            setTheme("dark");
            dispatch(toggleLight());
          }}
          size={25}
          className="cursor-pointer"
        />
      ) : (
        <CiLight
          onClick={() => {
            setThemeFlag(!themeFlag);
            setTheme("light");
            dispatch(toggleLight());
          }}
          size={25}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}

export default ToggleTheme;
