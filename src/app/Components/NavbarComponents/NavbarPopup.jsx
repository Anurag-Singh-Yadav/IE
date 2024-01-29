"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import Avatar from "react-avatar";
import { setLogin } from "@/app/GlobalRedux/Features/GlobalStateSlice";

function NavbarPopup({details}) {

    const { name, userHandle, avatar } = details;

    console.log('avatar = ' , avatar);

  const dispatch = useDispatch();

  return (
    <div className=" absolute top-16 bg-red-400">
      <div className="flex">
        <Avatar
          name={name}
          src={avatar}
          size="50"
          round={true}
        ></Avatar>
        <p>{name}</p>
      </div>
      <div>
        <Link href={`/dashboard?userHandle=${userHandle}`}>
          <p>Dashboard</p>
        </Link>
        <div
          onClick={() => {
            signOut();
            dispatch(setLogin(false));
            Cookies.remove("token");
          }}
        >
          <MdLogout />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default NavbarPopup;
