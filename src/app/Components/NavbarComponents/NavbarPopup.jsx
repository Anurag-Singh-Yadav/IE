"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { MdLogout } from "react-icons/md";
import Avatar from "react-avatar";
import "./NavbarPopup.css";
import "./Dropdown.css";
import { MdDashboard } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { userSignout } from "@/app/fetchDetails/userSignout";
import {useDispatch} from 'react-redux';
import { setLogin } from "@/app/GlobalRedux/Features/GlobalStateSlice";


function NavbarPopup({ details, setShowNavPopup }) {

  const dispatch = useDispatch();

  const { name, userHandle, avatar } = details;

  const handleClick = (e) => {
    let b = document.getElementById("avatar-dropdown");
    if (!b.contains(e.target)) {
      b.classList.add("animate-out");
      b.classList.add("animate-in");
      setTimeout(() => {
        b.classList.remove("animate-out");
        setShowNavPopup(false);
      }, 300);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      id="avatar-dropdown"
      className="dropdown-content  animate-in px-5 py-2 flex flex-col gap-3 min-w-[20vw] absolute top-16 z-[40] w-fit right-0 overflow-visible bg-primary rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-2 border-t-[3px] border-green-bg"
    >
      <div className="flex gap-6 items-center">

        <Avatar
          name={name}
          src={avatar}
          size="50"
          round={true}
          className=" aspect-square"
        ></Avatar>
        <Link
          href={`/dashboard?userHandle=${userHandle}`}
          className="font-semibold text-lg border-b-2  py-0 border-white hover:border-black transition duration-300"
        >
          {name}
        </Link>
      </div>
      <div className=" text-gray-500 flex flex-col gap-2">
        <Link
          href={`/`}
          className="hover:text-green-bg flex gap-2 items-center transition duration-300"
        >
          <IoIosHome />
          <p>Home</p>
        </Link>
        <Link
          href={`/dashboard/${userHandle}`}
          className="hover:text-green-bg flex gap-2 items-center transition duration-300"
        >
          <MdDashboard />
          <p>Dashboard</p>
        </Link>
        <div
          onClick={() => {
            dispatch(setLogin(false));
            userSignout();
          }}
          className="flex gap-2 items-center hover:text-green-bg cursor-pointer transition duration-300"
        >
          <MdLogout />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default NavbarPopup;
